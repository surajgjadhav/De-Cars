"use client";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useRouter } from "next/navigation";
import { RoutePathEnum } from "@/enums/RoutePaths";

export interface ExploreCarButton {
  className?: string;
  useIconOnly?: boolean;
}

const ExploreCarButton = ({
  className = "",
  useIconOnly = false,
}: ExploreCarButton) => {
  const router = useRouter();
  const onClickExplore = () => router.push(RoutePathEnum.MARKETPLACE);
  return (
    <>
      {useIconOnly ? (
        <Button
          variant="contained"
          className={`!rounded-full ${className}`}
          color="warning"
          aria-label="Explore Cars"
          onClick={onClickExplore}
        >
          <EastIcon />
        </Button>
      ) : (
        <Button
          variant="outlined"
          endIcon={<EastIcon />}
          className={`!rounded-full ${className}`}
          color="warning"
          onClick={onClickExplore}
        >
          Explore Cars
        </Button>
      )}
    </>
  );
};

export default ExploreCarButton;
