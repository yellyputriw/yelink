import { TbDiamond } from "react-icons/tb";
import { TiHeartFullOutline } from "react-icons/ti";

interface Icarat {
  carat: boolean;
}

const Footer = (props: Icarat) => {
  const { carat } = props;
  return (
    <footer className="flex justify-center pb-2 my-2">
      <p className="flex items-center">
        Made with{" "}
        {carat ? <TbDiamond /> : <TiHeartFullOutline className="mx-1" />}
        YellChan ^-^
      </p>
    </footer>
  );
};

export default Footer;
