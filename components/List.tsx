import Link from "next/link";
import { ILink } from "../utils/modules/ILink";

const List = ({ id, target, Icon, title }: ILink) => {
  return (
    <li
      id={id}
      className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-[60px] px-5 py-2">
      <Link href={target}>
        <a className="flex items-center">
          <div className="rounded-full bg-white p-2 text-black">
            <Icon />
          </div>
          <span className="ml-3 text-xl">{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default List;
