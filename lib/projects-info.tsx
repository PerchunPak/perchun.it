import Link from "next/link";
import { ReactNode } from "react";
import { Github, ReadTheDocs } from "@/components/shared/icons";

export interface projectInterface {
  name: string;
  description: string | ReactNode;
  longDescription: {
    text: string;
    technologies?: string[];
  };
  links: {
    [key: string]: string;
  };
}

export const projectLinks: {
  name: string;
  title: string;
  shortTitle: string;
  image: ReactNode;
}[] = [
  {
    name: "github",
    title: "Check the GitHub!",
    shortTitle: "GitHub",
    image: <Github />,
  },
  {
    name: "readTheDocs",
    title: "See ReadTheDocs!",
    shortTitle: "ReadTheDocs",
    image: <ReadTheDocs />,
  },
];

const projectsInfo: projectInterface[] = [
  {
    name: "czech-plus",
    description: (
      <>
        As I{"'"}m in Czechia now, I need to learn Czech fastly. This is why I
        created an addon for <Link href="https://apps.ankiweb.net">Anki</Link>!
        For me, the addon helps learning and adding new words.
      </>
    ),
    longDescription: {
      text: "loooong",
      technologies: ["123", "321"],
    },
    links: {
      github: "https://s.perchun.it/czech-plus",
      readTheDocs: "https://czech-plus.readthedocs.io",
    },
  },
  // {
  //   name: "This site!",
  //   description: (
  //     <>
  //       My first Frontend project, written in{" "}
  //       <Link href="https://nextjs.org">Next.js 13</Link>! There is nothing to
  //       describe, because you are looking at the result right now.
  //     </>
  //   ),
  //   links: {
  //     github: "https://s.perchun.it/src-perchun-it",
  //   },
  // },
  // {
  //   name: "the-war-tracker-bot",
  //   description:
  //     "The Telegram bot that doom-scrolls through the war news for you!",
  //   links: {
  //     github: "https://s.perchun.it/the-war-tracker-bot",
  //     readTheDocs: "https://the-war-tracker-bot.readthedocs.io",
  //   },
  // },
  // {
  //   name: "pinger-bot",
  //   description:
  //     "Discord bot to ping (and collect statistics of) Minecraft servers, which is my main project, where I test new tools, or even architectures.",
  //   links: {
  //     github: "https://s.perchun.it/pinger-bot",
  //     readTheDocs: "https://pinger-bot.readthedocs.io",
  //   },
  // },
  // {
  //   name: "python-template",
  //   description:
  //     "Cookiecutter template for my every Python project. The collection of fundamental things for all of them. Check it to see most of my coding habits!",
  //   links: {
  //     github: "https://s.perchun.it/py-template",
  //   },
  // },
  // {
  //   name: "mcstatus",
  //   description:
  //     "Python library to ping and get status from Minecraft servers. Not actually mine, but project that I particularly maintain.",
  //   links: {
  //     github: "https://s.perchun.it/mcstatus",
  //     readTheDocs: "https://mcstatus.readthedocs.io",
  //   },
  // },
  // It's still too ToDo for referencing in portfolio
  // {
  //   name: "mcph",
  //   description:
  //     "Minecraft Plugin Helper. Tool for managing Minecraft server's plugins. At now, on making architecture stage.",
  //   links: {
  //     github: "https://s.perchun.it/mcph",
  //     readTheDocs: "https://mcph.readthedocs.io",
  //   },
  // },
];

export default projectsInfo;
