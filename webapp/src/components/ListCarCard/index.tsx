import { Button, Card } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { getFormattedCurrency } from "../../utils";

export interface ListCarCardProps {
  className?: string;
  imageLink: string | StaticImageData;
  make: string;
  model: string;
  year: number;
  price: number;
  isLoading?: boolean;
  isListed?: boolean;
  onClickList: () => void;
}

const ListCarCard = ({
  className = "",
  imageLink,
  make,
  model,
  year,
  price,
  isLoading = false,
  isListed = false,
  onClickList,
}: ListCarCardProps) => {
  const name = `${make} - ${model}`;
  return (
    <Card
      className={`p-6 !bg-zinc-900 !text-slate-200 !rounded-xl flex flex-col gap-2 justify-between ${className}`}
    >
      <Image
        src={imageLink}
        alt={name}
        className="rounded self-center"
        width={272}
        height={182}
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-base">Production: {year}</div>
        <div className="text-3xl font-bold text-orange-400">
          {getFormattedCurrency(price)}
        </div>
        <Button
          variant="contained"
          color="warning"
          className="!rounded-full !capitalize disabled:!bg-slate-100 disabled:!text-slate-500"
          onClick={onClickList}
          disabled={isLoading || isListed}
        >
          {isListed ? "Listed" : "List"}
        </Button>
      </div>
    </Card>
  );
};

export default ListCarCard;
