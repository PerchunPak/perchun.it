import { ReactNode } from "react";

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
  shortDescription: "16 years old Junior+ Backend/Software developer!",
  aboutMe: (
    <>
      Hello there! I{"'"}m 16 years old Junior+ Backend/Software developer from{" "}
      <a href="https://s.perchun.it/ukraine" className="description-link">
        Ukraine
      </a>
      .<br />
      Below you can find some of my main projects. They{"'"}re all available on{" "}
      <a href="https://s.perchun.it/github" className="description-link">
        my GitHub
      </a>
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
