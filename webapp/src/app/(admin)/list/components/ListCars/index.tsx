"use client";
import ErrorComp from "@/components/ErrorComp";
import ListCarCard from "@/components/ListCarCard";
import Loader from "@/components/Loader";
import { RoutePathEnum } from "@/enums/RoutePaths";
import { useRouter } from "next/navigation";
import { useInitData } from "../../hooks/useInitData";

/**
 * uploads non listed cars to ipfs and update price after minitng
 */

const ListCars = () => {
  const router = useRouter();
  const { carDetails, isError, isPending, isLoading, onCardClick } =
    useInitData();

  if (isPending)
    return <Loader className="col-span-full place-self-center py-20" />;
  if (isError)
    return (
      <ErrorComp
        errImage="/something-went-wrong.png"
        className="col-span-full"
        btnText="Go to Home"
        onClickBtn={() => router.push(RoutePathEnum.HOME)}
      />
    );

  return (
    <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {carDetails?.map((details) => {
        return (
          <ListCarCard
            key={details.id}
            {...details}
            imageLink={details.image}
            onClickList={() => onCardClick(details)}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
};

export default ListCars;