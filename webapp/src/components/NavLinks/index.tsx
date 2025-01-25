"use client";
import { RoutePathEnum } from "@/enums/RoutePaths";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  const pathname = usePathname();

  const applyActiveLink = (link: string) => {
    return pathname === link ? "text-orange-500" : "";
  };

  return (
    <div className={`font-serif flex flex-row gap-8 text-xl ${className}`}>
      <Link
        href={RoutePathEnum.HOME}
        className={`${applyActiveLink(RoutePathEnum.HOME)}`}
      >
        Home
      </Link>
      <Link
        href={RoutePathEnum.MARKETPLACE}
        className={`${applyActiveLink(RoutePathEnum.MARKETPLACE)}`}
      >
        Marketplace
      </Link>
      <Link
        href={RoutePathEnum.LIST_CAR}
        className={`${applyActiveLink(RoutePathEnum.LIST_CAR)}`}
      >
        List Cars
      </Link>
      <Link
        href={RoutePathEnum.PROFILE}
        className={`${applyActiveLink(RoutePathEnum.PROFILE)}`}
      >
        Profile
      </Link>
    </div>
  );
};

export default NavLinks;
