import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavLinks from "../NavLinks";
import { SideBar } from "../SideBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4 px-8 bg-orange-200 rounded-b-2xl ">
      <div className="flex flex-row gap-1 items-center">
        <Image
          alt="De-Cars"
          src="/logo.png"
          width={1024}
          height={1024}
          className="w-12 h-12 rounded"
        />
        <div className="font-gravitas-one text-lg">De-Cars</div>
      </div>
      <NavLinks className="hidden md:flex" />
      <div className="hidden md:block">
        <ConnectButton />
      </div>
      <SideBar className="block md:hidden" />
    </header>
  );
};

export default Header;
