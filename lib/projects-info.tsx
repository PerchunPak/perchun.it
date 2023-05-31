import { ReactNode } from "react";
import { Github, ReadTheDocs } from "@/components/shared/icons";

export interface projectInterface {
  name: string;
  description: string | ReactNode;
  longDescription: {
    text: string | ReactNode;
    technologies?: (
      | { name: string; description?: string; link?: string }
      | string
    )[];
    additional?: string;
  };
  links: {
    github?: boolean;
    readTheDocs?: boolean;
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
        created an addon for <a href="https://apps.ankiweb.net" target="_blank">Anki</a>!
        For me, the addon helps learning and adding new words.
      </>
    ),
    longDescription: {
      text: "This addon helps you (and me actually) to learn new words deeply, add them to your vocabulary, and learn productively.",
      technologies: [
        { name: "Lexing", description: "breaking the input text into tokens", link: "https://en.wikipedia.org/wiki/Lexical_analysis" },
        {
          name: "Parsing",
          description:
            "further analysis of these tokens and their conversion into the output text",
          link: "https://en.wikipedia.org/wiki/Parsing",
        },
      ],
    },
    links: {
      github: true,
      readTheDocs: true,
    },
  },
  {
    name: "This site!",
    description: (
      <>
        My first Frontend project, written in{" "}
        <a href="https://nextjs.org" target="_blank">Next.js 13</a>! There is nothing to
        describe, because you are looking at the result right now.
      </>
    ),
    longDescription: {
      text: (
        <p>
          I believe that every programmer should have their own domain, and
          maybe a website on it. It&apos;s incredibly convenient to keep some of
          your personal things there (for example, running projects or your
          portfolio/resume). So I recently bought a domain,{" "}
          <a
            href="https://perchun.it"
            className="underline transition-colors hover:text-blue-800"
          >
            perchun.it
          </a>
          , and to fill my homepage with something, I wrote my portfolio site.
        </p>
      ),
      technologies: [
        {
          name: "Next.js 13",
          description:
            "a framework for React, which removes *a lot* of unnecessary work for developers",
          link: "https://nextjs.org",
        },
        { name: "TypeScript", description: "JavaScript with types", link: "https://www.typescriptlang.org" },
        {
          name: "Precedent.dev",
          description: "the good template from one of Vercel employees",
          link: "https://precedent.dev",
        },
        {
          name: "Tailwind CSS",
          description: "the new approach to CSS",
          link: "https://tailwindcss.com",
        },
      ],
    },
    links: {
      github: true,
    },
  },
  {
    name: "the-war-tracker-bot",
    description:
      "The Telegram bot that doom-scrolls through the war news for you!",
    longDescription: {
      text: <div>
          <p className="mt-1">
            I&apos;m a person who often finds myself doomscrolling, and I&apos;m not a big fan of it.
            But I really want to follow the latest news in Ukraine (more specifically, about the war).
            Instead of following hundreds of telegram channels - I can finally use this bot!
            This bot follows a bunch of telegram channels and sends you the news you need!
          </p>
          <p className="mt-1">
            Example: When I saw the news that a missile had landed in Poland, I wanted to follow the news,
            but I didn&apos;t want to scroll through the night.
          </p>
          <p className="mt-1">
            I&apos;m sure this happens with a lot of news. At the time, I wanted a channel that reported
            only the most important news - but this has its drawbacks. The line of the &quot;importance&quot;
            is subjective for everyone, and such a channel would require the authors to reveal a lot of
            their thoughts, which I didn&apos;t want, so I didn&apos;t create something like that.
          </p>
        </div>,
      technologies: [
        {
          name: "Telethon",
          description:
            "library for connecting to Telegram with MTProto protocol, which is what use mobile apps",
          link: "https://pypi.org/project/Telethon/",
        },
        {
          name: "Redis",
          description: "key-value database, mostly used for caching",
          link: "https://redis.io",
        },
      ],
    },
    links: {
      github: true,
      readTheDocs: true,
    },
  },
  {
    name: "pinger-bot",
    description:
      "Discord bot to ping (and collect statistics of) Minecraft servers, which is my main project, where I test new tools, or even architectures.",
    longDescription: {
      text:
        "It's my longest project that's still being supported. I started writing it when I have first started " +
        "programming. It's a Discord bot that receives public information from Minecraft servers and can " +
        "generate statistics on the number of players. But this is not the most important thing, the most " +
        "important thing is that it is my testing ground for new ideas and libraries. I often find interesting " +
        "tools or even ecosystem sites and test them with this bot.",
      technologies: [
        {
          name: "Hikari-py",
          description: "library for connecting to Discord",
          link: "https://www.hikari-py.dev/",
        },
        {
          name: "APScheduler",
          description: "for collecting statistics once in a while",
          link: "https://pypi.org/project/APScheduler/",
        },
        {
          name: "mcstatus",
          description: "for getting data from servers",
          link: "https://mcstatus.readthedocs.io/",
        },
        {
          name: "SQLAlchemy ORM",
          description:
            "for connecting to the database (I currently support [SQLite](https://sqlite.org/), [MySQL](https://www.mysql.com/) and [PostgreSQL](https://postgresql.org))",
          link: "https://sqlalchemy.org/",
        },
        {
          name: "alembic",
          description: "for database migrations",
          link: "https://alembic.sqlalchemy.org/",
        },
        {
          name: "matplotlib",
          description: "for creating statistics graphs",
          link: "https://matplotlib.org/",
        },
        {
          name: "gettext",
          description: "for translating into different languages",
          link: "https://docs.python.org/3/library/gettext.html",
        },
        {
          name: "Babel",
          description: "for helping in translating",
          link: "https://babel.pocoo.org/",
        },
        {
          name: "Docker",
          description: "for running on my server",
          link: "https://docker.com/",
        },
      ],
    },
    links: {
      github: true,
      readTheDocs: true,
    },
  },
  {
    name: "python-template",
    description:
      "Cookiecutter template for my every Python project. The collection of fundamental things for all of them. Check it to see most of my coding habits!",
    longDescription: {
      text: "I spend little time creating a new project. It's all thanks to this project - it's my personal template. It contains a set of the best tools I've found in all my experience.",
      technologies: [
        {
          name: "cookiecutter",
          description: "for easy template creation",
          link: "https://github.com/cookiecutter/cookiecutter#readme",
        },
        {
          name: "lice",
          description: "for generating the project license",
          link: "https://pypi.org/project/lice/",
        },
        {
          name: "cruft",
          description: "for auto-updating template",
          link: "https://cruft.github.io/cruft/",
        },
        {
          name: "OmegaConf",
          description: "for configuration files with Yaml",
          link: "https://omegaconf.readthedocs.io/",
        },
        {
          name: "structlog",
          description: "for beautiful and structed logging",
          link: "https://structlog.org",
        },
        {
          name: "mypy",
          description: "linter for supporting statically typed Python",
          link: "https://www.mypy-lang.org/",
        },
        {
          name: "poetry",
          description: "advanced package manager, my favorite tool",
          link: "https://python-poetry.org/",
        },
        {
          name: "Github Actions",
          description: "for running automatic testing on every commit",
          link: "https://github.com/features/actions",
        },
        {
          name: "pytest",
          description: "for testing with easy-to-write unit-tests",
          link: "https://pytest.org/",
        },
        "QA with **[flake8](https://flake8.pycqa.org/)** and about five addons to it",
        {
          name: "Sphinx",
          description:
            "for generating documentation from [.RST](https://en.wikipedia.org/wiki/ReStructuredText) files",
          link: "https://python-poetry.org/",
        },
        "documentation with **[Sphinx](https://pypi.org/project/Sphinx/)**, **[Furo](https://pypi.org/project/furo/)** theme and **[ReadTheDocs.org](https://readthedocs.org)** for hosting",
      ],
    },
    links: {
      github: true,
    },
  },
  {
    name: "mcstatus",
    description:
      "Python library to ping and get status from Minecraft servers. Not actually mine, but project that I maintain.",
    longDescription: {
      text:
        "This is a library for receiving data from Minecraft servers. And I, in particular, " +
        "[rewrote](https://github.com/py-mine/mcstatus/pull/306) the entire system of interaction " +
        "between the library and users using the latest technologies and standards. Since this " +
        "rewrite took a lot of time, it so happened that I made many other contributions to this " +
        "library and became a maintainer!",
      technologies: [
        {
          name: "poetry-dynamic-versioning",
          description: "for automatic version control using Git tags",
          link: "https://pypi.org/project/poetry-dynamic-versioning/",
        },
        {
          name: "dnspython",
          description: "for DNS SRV record lookup",
          link: "https://dnspython.readthedocs.io/en/latest/",
        },
        {
          name: "pyright",
          description:
            "linter for supporting statically typed Python. Much faster than [mypy](https://www.mypy-lang.org/) because is written in NodeJS",
          link: "https://github.com/microsoft/pyright#readme",
        },
        "all other features from [python-template](https://s.perchun.it/py-template)",
      ],
      additional:
        "**Features of the library made by me:**\n" +
        "- Rewriting of response objects to the latest system using the [`dataclasses`](https://docs.python.org/3/library/dataclasses.html) module (**[#306](https://github.com/py-mine/mcstatus/pull/306)**).\n" +
        "- Completely new parsing system for server description (MOTD) (**[#335](https://github.com/py-mine/mcstatus/pull/335)**).\n" +
        "- Documentation (almost from scratch) (**[#477](https://github.com/py-mine/mcstatus/pull/477)**).\n" +
        "- Using the `with` block to open and close connections (**[#422](https://github.com/py-mine/mcstatus/pull/422)**).\n" +
        "- And about [50 other PRs](https://github.com/py-mine/mcstatus/pulls/PerchunPak) that are not important enough to mention here.",
    },
    links: {
      github: true,
      readTheDocs: true,
    },
  },
  // It's still too ToDo for referencing in portfolio
  // {
  //   name: "mcph",
  //   description:
  //     "Minecraft Plugin Helper. Tool for managing Minecraft server's plugins. At now, on making architecture stage.",
  //   links: {
  //     github: true,
  //     readTheDocs: true,
  //   },
  // },
];

export default projectsInfo;
