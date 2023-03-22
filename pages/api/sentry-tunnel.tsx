import { withSentry, captureException } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

// Change host appropriately if you run your own Sentry instance.
const sentryHost = "o4504254006689792.ingest.sentry.io";

// Set knownProjectIds to an array with your Sentry project IDs which you
// want to accept through this proxy.
const knownProjectIds: number[] = [4504883284344832];

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const envelope = req.body;
    const pieces = envelope.split("\n");
    const header = JSON.parse(pieces[0]);
    // DSNs are of the form `https://<key>@o<orgId>.ingest.sentry.io/<projectId>`
    const { host, pathname } = new URL(header.dsn);
    // Remove leading slash
    const projectId = pathname.substring(1);

    if (host !== sentryHost) {
      throw new Error(`The client provided invalid host (${host}), is it try to hack us?`);
    }

    if (!knownProjectIds.includes(Number(projectId))) {
      throw new Error(`The client provided invalid project ID (${projectId}), is it try to hack us?`);
    }

    const sentryIngestURL = `https://sentry.io/api/${projectId}/envelope/`;
    const sentryResponse = await fetch(sentryIngestURL, {
      method: "POST",
      body: envelope,
    });

    // Relay response from Sentry servers to front end
    sentryResponse.headers.forEach((value, key) => res.setHeader(key, value));
    res.status(sentryResponse.status).send(sentryResponse.body);
  } catch (error) {
    captureException(error);
    console.error(error)
    return res.status(400).send("An error happened, oops.");
  }
}

export default withSentry(handler);
