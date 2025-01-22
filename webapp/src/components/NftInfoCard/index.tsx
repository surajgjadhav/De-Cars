import { Card, Skeleton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export interface NftInfoCardProps extends PropsWithChildren {
  className?: string;
  imageLink: string | StaticImageData;
  name: string;
  description: string;
  isLoading?: boolean;
}

const NftInfoCard = ({
  className = "",
  imageLink,
  name,
  description,
  isLoading = false,
}: NftInfoCardProps) => {
  return (
    <Card
      className={`p-6 !bg-zinc-900 !text-slate-200 !rounded-xl flex flex-col gap-2 justify-between ${className}`}
    >
      {isLoading ? (
        <Skeleton
          sx={{ bgcolor: "grey.600", borderRadius: 2 }}
          variant="rectangular"
          animation="wave"
          width={210}
          height={118}
        />
      ) : (
        <Image
          src={imageLink}
          alt={name}
          className="rounded self-center"
          width={1920}
          height={1280}
        />
      )}
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">
          {isLoading ? (
            <Skeleton
              sx={{ bgcolor: "grey.600", borderRadius: 2 }}
              animation="wave"
              height={20}
            />
          ) : (
            name
          )}
        </div>
        <div className="text-base">
          {isLoading ? (
            <Skeleton
              sx={{ bgcolor: "grey.600", borderRadius: 2 }}
              animation="wave"
              height={16}
              width="80%"
            />
          ) : (
            description
          )}
        </div>
      </div>
    </Card>
  );
};

export default NftInfoCard;
