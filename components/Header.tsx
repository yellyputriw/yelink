import Image from "next/image";

const Header = () => {
  return (
    <div className=" mx-auto  flex items-center justify-center">
      <div className="bg-neutral-50/50 flex items-end mt-8 pt-2 pl-11 pr-4  rounded-xl border-neutral-50 border-[1.5px] shadow-mengShadow">
        <Image src="/meng.png" alt="Foto Meng" width={104} height={127} />
      </div>
    </div>
  );
};

export default Header;
