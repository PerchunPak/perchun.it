import styles from "./project.module.css";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { ReactNode } from "react";
import { Github, ReadTheDocs } from "@/components/shared/icons";

export interface projectInterface {
  projectName: string;
  description: string | ReactNode;
  links: {
    main: string;
    github?: string;
    readTheDocs?: string;
  };
}

export function Project({ projectName, description, links }: projectInterface) {
  const numberOfProjectLinks = projectLinks
    .map((e) => e.name)
    .filter((key) => key in links).length;

  return (
    <div
      className={`relative col-span-1 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:scale-[1.02] hover:transition ${styles.project}`}
      onClick={() => open(links.main)}
      data-links={JSON.stringify(
        Object.keys(links).filter((i) => i !== "main"),
      )}
      data-project-name={projectName}
    >
      <div className="mx-auto mt-3 flex items-center justify-center space-x-3">
        {projectLinks.map(({ name, title, shortTitle, image }) => {
          // @ts-expect-error
          const link: string | undefined = links[name];
          if (link === undefined) {
            return;
          }
          let linkTitle: ReactNode;
          if (numberOfProjectLinks > 1) {
            linkTitle = (
              <>
                <p className="hidden xl:block">{title}</p>
                <p className="hidden min-[860px]:block xl:hidden">
                  {shortTitle}
                </p>
              </>
            );
          } else {
            linkTitle = (
              <>
                <p className="hidden md:block">{title}</p>
              </>
            );
          }
          return (
            <Link
              key={name}
              className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image}
              {linkTitle}
            </Link>
          );
        })}
      </div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="mt-6 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{projectName}</Balancer>
        </h2>
        <div className="prose-sm m-3 mt-2 leading-normal text-gray-500 md:prose">
          <Balancer className={styles.description}>{description}</Balancer>
        </div>
      </div>
    </div>
  );
}

export default function InsertMyProjects() {
  return (
    <>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 flex grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] auto-cols-max grid-cols-1 gap-5 px-5 md:grid-cols-3">
        {myProjects.map(({ projectName, description, links }) => (
          <Project
            key={projectName}
            projectName={projectName}
            description={description}
            links={links}
          />
        ))}
      </div>
    </>
  );
}

const projectLinks: {
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

const myProjects: projectInterface[] = [
  {
    projectName: "czech-plus",
    description: (
      <>
        As I{"'"}m in Czech now, I need to learn Czech fastly. This is why I
        created an addon for <Link href="https://apps.ankiweb.net">Anki</Link>!
        For me, the addon helps learning and adding new words.
      </>
    ),
    links: {
      main: "https://s.perchun.it/czech-plus",
      github: "https://github.com/PerchunPak/czech-plus",
      readTheDocs: "https://czech-plus.readthedocs.io",
    },
  },
  {
    projectName: "This site!",
    description: (
      <>
        My first Frontend project, written in{" "}
        <Link href="https://nextjs.org">Next.js 13</Link>! There is nothing to
        describe, because you are looking at the result right now.
      </>
    ),
    links: {
      main: "https://s.perchun.it/src-perchun-it",
      github: "https://github.com/PerchunPak/perchun.it",
    },
  },
  {
    projectName: "the-war-tracker-bot",
    description:
      "The Telegram bot that doom-scrolls through the war news for you!",
    links: {
      main: "https://s.perchun.it/the-war-tracker-bot",
      github: "https://github.com/PerchunPak/the-war-tracker-bot",
      readTheDocs: "https://the-war-tracker-bot.readthedocs.io",
    },
  },
  {
    projectName: "pinger-bot",
    description:
      "Discord bot to ping (and collect statistics of) Minecraft servers, which is my main project, where I test new tools, or even architectures.",
    links: {
      main: "https://s.perchun.it/pinger-bot",
      github: "https://github.com/PerchunPak/pinger-bot",
      readTheDocs: "https://pinger-bot.readthedocs.io",
    },
  },
  {
    projectName: "python-template",
    description:
      "Cookiecutter template for my every Python project. The collection of fundamental things for all of them. Check it to see most of my coding habits!",
    links: {
      main: "https://s.perchun.it/py-template",
      github: "https://github.com/PerchunPak/python-template",
    },
  },
  {
    projectName: "mcstatus",
    description:
      "Python library to ping and get status from Minecraft servers. Not actually mine, but project that I particularly maintain.",
    links: {
      main: "https://s.perchun.it/mcstatus",
      github: "https://github.com/py-mine/mcstatus",
      readTheDocs: "https://mcstatus.readthedocs.io",
    },
  },
  // It's still too ToDo for referencing in portfolio
  // {
  //   projectName: "mcph",
  //   description:
  //     "Minecraft Plugin Helper. Tool for managing Minecraft server's plugins. At now, on making architecture stage.",
  //   links: {
  //     main: "https://s.perchun.it/mcph",
  //     github: "https://github.com/PerchunPak/mcph",
  //     readTheDocs: "https://mcph.readthedocs.io",
  //   },
  // },
];
