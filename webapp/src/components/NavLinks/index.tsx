import { RoutePathEnum } from "@/enums/RoutePaths";
import Link from "next/link";

export interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div className={`font-serif flex flex-row gap-8 text-xl ${className}`}>
      <Link href={RoutePathEnum.HOME}>Home</Link>
      <Link href={RoutePathEnum.MARKETPLACE}>Marketplace</Link>
      <Link href={RoutePathEnum.LIST_CAR}>List Cars</Link>
      <Link href={RoutePathEnum.PROFILE}>Profile</Link>
    </div>
  );
};

export default NavLinks;
