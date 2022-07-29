import List from "./List";
import { caratLink } from "../utils/caratLink";

const CaratLink = () => {
  return (
    <div className=" w-full mt-5">
      <ul className="mx-auto flex flex-col justify-center max-w-xs ">
        {caratLink.map(({ id, target, Icon, title }) => (
          <List
            key={Math.random()}
            id={id}
            target={target}
            Icon={Icon}
            title={title}
          />
        ))}
      </ul>
    </div>
  );
};

export default CaratLink;
