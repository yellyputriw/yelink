import SocialLink from "./modules/socialLink";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbWorld,
  TbMail,
  TbLock,
  TbDiamond,
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

const Link4 = new SocialLink({
  id: "L4",
  target: "mailto:yellyputriw@gmail.com",
  Icon: TbMail,
  title: "Email",
});

const Link5 = new SocialLink({
  id: "L5",
  target: "/",
  Icon: TbLock,
  title: "Annonymous Form",
});

const Link6 = new SocialLink({
  id: "L6",
  target: "/",
  Icon: TbDiamond,
  title: "FanGirl",
});

export const allLink: SocialLink[] = [Link1, Link2, Link3, Link4, Link5, Link6];
