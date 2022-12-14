import { allLink } from "../utils/socialLink";
import AnnonymousModal from "./AnonymousForm";
import FangirlModal from "./FangirlModal";
import List from "./List";

const SocialLink = () => {
  return (
    <div className=" w-full mt-5">
      <ul className="mx-auto flex flex-col justify-center max-w-xs ">
        {allLink.map(({ id, target, Icon, title }) => (
          <List
            key={Math.random()}
            id={id}
            target={target}
            Icon={Icon}
            title={title}
          />
        ))}
        <AnnonymousModal />
        <FangirlModal />
      </ul>
    </div>
  );
};

export default SocialLink;
