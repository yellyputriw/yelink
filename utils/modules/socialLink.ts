import { IconType } from "react-icons";

interface ILink {
  id: string;
  target: string;
  Icon: IconType;
  title: string;
}

class SocialLink implements ILink {
  public id: string;
  public target: string;
  public Icon: IconType;
  public title: string;

  constructor({ id, target, Icon, title }: ILink) {
    this.id = id;
    this.target = target;
    this.Icon = Icon;
    this.title = title;
  }
}

export default SocialLink;
