import Link from "next/link";
import { allLink } from "../utils/socialLink";
import MyModal from "./AnonymousForm";

const SocialLink = () => {
  return (
    <div className=" w-full mt-5">
      <ul className="mx-auto flex flex-col justify-center max-w-xs ">
        {allLink.map(({ target, Icon, title }) => (
          <li
            key={Math.random()}
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
        ))}
        {/* <MyModal /> */}
      </ul>
    </div>
  );
};

export default SocialLink;
