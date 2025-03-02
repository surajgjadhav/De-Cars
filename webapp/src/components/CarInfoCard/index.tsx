import { Button, Card, IconButton, Skeleton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import { getFormattedCurrency } from "../../utils";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export interface CarInfoCardProps extends PropsWithChildren {
  className?: string;
  imageLink: string | StaticImageData;
  make: string;
  model: string;
  year: number;
  price: number;
  isLoading?: boolean;
  onClickDetails: () => void;
}

const CarInfoCard = ({
  className = "",
  imageLink,
  make,
  model,
  year,
  price,
  isLoading = false,
  onClickDetails,
}: CarInfoCardProps) => {
  const name = `${make} - ${model}`;
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
            `Production: ${year}`
          )}
        </div>
        <div className="text-3xl font-bold text-orange-400">
          {isLoading ? (
            <Skeleton
              sx={{ bgcolor: "grey.600", borderRadius: 2 }}
              animation="wave"
              height={30}
              width="80%"
            />
          ) : (
            getFormattedCurrency(price)
          )}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button
            variant="contained"
            color="warning"
            className="!rounded-full !capitalize !grow disabled:!bg-slate-100 disabled:!text-slate-500"
            disabled={isLoading}
          >
            Buy now
          </Button>
          <IconButton
            color="warning"
            className="disabled:!bg-slate-100 disabled:!text-slate-500"
            onClick={onClickDetails}
            disabled={isLoading}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default CarInfoCard;
