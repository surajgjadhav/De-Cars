import { Skeleton } from "@mui/material";

export interface InfoFieldProps {
  className?: string;
  title: string;
}

const InfoFieldSkeleton = ({ className, title }: InfoFieldProps) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center animate-pulse ${className}`}
    >
      <Skeleton
        sx={{ bgcolor: "grey.600", borderRadius: 2 }}
        variant="rectangular"
        width={144}
        height={48}
      />
      <div className="!text-gray-400 text-base">{title}</div>
    </div>
  );
};

export default InfoFieldSkeleton;
