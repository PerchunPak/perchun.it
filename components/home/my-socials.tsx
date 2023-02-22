import { ReactNode } from "react";
import config from "@/lib/config";
import { Discord, Email, Github, Telegram } from "@/components/shared/icons";
import useWindowSize from "@/lib/hooks/use-window-size";
import Link from "next/link";

const mySocials: { name: string; image: ReactNode; link: string }[] = [
  { name: "GitHub", image: <Github />, link: config.linkTo.gitHub },
  { name: "Discord", image: <Discord />, link: config.linkTo.discord },
  { name: "Telegram", image: <Telegram />, link: config.linkTo.telegram },
  { name: "Email", image: <Email />, link: config.linkTo.email },
];

export default function InsertMySocials() {
  const { isDesktop } = useWindowSize();

  return (
    <>
      {mySocials.map(({ name, image, link }) => (
        <Link
          key={name}
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {image}
          {isDesktop ? <p>My {name}</p> : null}
        </Link>
      ))}
    </>
  );
}
