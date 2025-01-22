import { Card } from "@mui/material";
import { PropsWithChildren } from "react";

export interface BannerCardProps extends PropsWithChildren {
  className?: string;
}

const BannerCard = ({ className = "", children }: BannerCardProps) => {
  return (
    <Card
      className={`p-6 !bg-zinc-800 !text-slate-200 !rounded-xl ${className}`}
    >
      {children}
    </Card>
  );
};

export default BannerCard;
