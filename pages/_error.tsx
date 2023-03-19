import Error from "next/error";
import Honeybadger from "@honeybadger-io/js";
import type { NextPageContext } from "next";

export default function MyError({ statusCode }: { statusCode: number }) {
  return <Error statusCode={statusCode} />;
}

MyError.getInitialProps = async (pageContext: NextPageContext) => {
  const errorInitialProps = await Error.getInitialProps(pageContext);

  /* Opinionated: do not record an exception for 404
  if (res && res.statusCode === 404) {
    return {statusCode: 404}
  }
  */

  if (pageContext.err) {
    Honeybadger.notify(pageContext.err);

    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Honeybadger
  Honeybadger.notify(
    `_error.js getInitialProps missing data at path: ${pageContext.asPath}`,
  );

  return errorInitialProps;
};
