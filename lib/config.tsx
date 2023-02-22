import { ReactNode } from "react";
import Link from "next/link";

export const config: {
  title: string;
  shortDescription: string;
  aboutMe: ReactNode;
  linkTo: {
    gitHub: string;
    discord: string;
    telegram: string;
    email: string;
  };
} = {
  title: "Perchun's Portfolio",
  shortDescription: "15 years old Junior+ Backend/Software developer!",
  aboutMe: (
    <>
      Hello there! I{"'"}m 15 years old Junior+ Backend/Software developer from{" "}
      <Link href="https://s.perchun.it/ukraine" className="description-link">
        Ukraine
      </Link>
      .<br />
      Below you can find some of my main projects. They{"'"}re all available on{" "}
      <Link href="https://s.perchun.it/github" className="description-link">
        my GitHub
      </Link>
      !
    </>
  ),
  linkTo: {
    gitHub: "https://s.perchun.it/github",
    discord: "https://s.perchun.it/discord",
    telegram: "https://s.perchun.it/tg",
    email: "mailto:aboutme@perchun.it",
  },
};

export default config;
