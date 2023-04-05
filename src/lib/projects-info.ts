export interface projectInterface {
  name: string;
  description: string;
  links: {
    main: string;
    github?: string;
    readTheDocs?: string;
  };
}

interface projectLinksElement {
  name: string;
  title: string;
  shortTitle: string;
  image: string;
}

export const projectLinks: projectLinksElement[] = [
  {
    name: "github",
    title: "Check the GitHub!",
    shortTitle: "GitHub",
    image: "github",
  },
  {
    name: "readTheDocs",
    title: "See ReadTheDocs!",
    shortTitle: "ReadTheDocs",
    image: "readthedocs",
  },
];
