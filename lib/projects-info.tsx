import Link from "next/link";
import { ReactNode } from "react";
import { Github, ReadTheDocs } from "@/components/shared/icons";

export interface projectInterface {
  name: string;
  description: string | ReactNode;
  longDescription: {
    text: string;
    technologies?: (
      | { name: string; description?: string; link?: string }
      | string
    )[];
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
      text: "This addon helps you (and me actually) to learn new words deeply, add them to your vocabulary, and learn productively.",
      technologies: [
        { name: "Lexing", description: "breaking the input text into tokens" },
        {
          name: "Parsing",
          description:
            "further analysis of these tokens and their conversion into the output text",
        },
      ],
    },
    links: {
      github: "https://s.perchun.it/czech-plus",
      readTheDocs: "https://czech-plus.readthedocs.io",
    },
  },
  {
    name: "This site!",
    description: (
      <>
        My first Frontend project, written in{" "}
        <Link href="https://nextjs.org">Next.js 13</Link>! There is nothing to
        describe, because you are looking at the result right now.
      </>
    ),
    longDescription: {
      text:
        "I believe that every programmer should have their own domain, and maybe a website on it." +
        "It's incredibly convenient to keep some of your personal things there (for example, running " +
        "projects or your portfolio/resume). So I recently bought a domain, perchun.it, and to fill my homepage " +
        "with something, I wrote my portfolio site.",
      technologies: [
        {
          name: "Next.js 13",
          description:
            "framework for React, which removes *a lot* of unnecessary work for developers",
          link: "https://nextjs.org",
        },
        { name: "TypeScript" },
        { name: "Precedent.dev", description: "template" },
        { name: "Tailwind CSS", description: "a new approach to CSS" },
      ],
    },
    links: {
      github: "https://s.perchun.it/src-perchun-it",
    },
  },
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
