import { ConnectButton } from "@rainbow-me/rainbowkit";
import NavLinks from "../NavLinks";
import { SideBar } from "../SideBar";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4 px-8 bg-orange-200 rounded-b-2xl ">
      <div>De-Cars</div>
      <NavLinks className="hidden md:flex" />
      <div className="hidden md:block">
        <ConnectButton />
      </div>
      <SideBar className="block md:hidden" />
    </header>
  );
};

export default Header;
