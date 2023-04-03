import useWindowSize from "@/lib/hooks/use-window-size";
import config from "@/lib/config";
import Balancer from "react-wrap-balancer";

export default function AboutMe() {
  const { isDesktop } = useWindowSize();

  return isDesktop ? config.aboutMe : <Balancer>{config.aboutMe}</Balancer>
}
