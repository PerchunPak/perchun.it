import useScroll from "@/lib/hooks/use-scroll";
import type {ReactNode} from "react";

export default function Header({children}: {children: ReactNode} ) {
  const scrolled = useScroll(50);

  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      {children}
    </div>
  )
}
