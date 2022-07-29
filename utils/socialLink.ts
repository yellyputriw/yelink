import SocialLink from "./modules/ILink";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbWorld,
  TbMail,
} from "react-icons/tb";

const Link1 = new SocialLink({
  id: "L1",
  target: "https://github.com/yellyputriw",
  Icon: TbBrandGithub,
  title: "Github",
});

const Link2 = new SocialLink({
  id: "L2",
  target: "https://www.linkedin.com/in/yellyputri/",
  Icon: TbBrandLinkedin,
  title: "Linkedin",
});

const Link3 = new SocialLink({
  id: "L3",
  target: "https://yelly.netlify.app/",
  Icon: TbWorld,
  title: "Website",
});

export const allLink: SocialLink[] = [Link1, Link2, Link3];
