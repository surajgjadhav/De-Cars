"use client";
import GridLayout from "@/components/GridLayout";
import Image from "next/image";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import { getFormattedCurrency } from "@/utils";
import { Button } from "@mui/material";
import TraitInfo from "@/components/TraitInfo";
import { useCarDetailsById } from "@/hooks/useCarInfo";
import { useParams, useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";
import Loader from "@/components/Loader";
import ErrorComp from "@/components/ErrorComp";
import { RoutePathEnum } from "@/enums/RoutePaths";

/**
 * fetch car details from contract and dispplay all detysails of NFT
 */
const CarDetails = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { id } = params;

  const { data, isPending, isError } = useCarDetailsById(id);

  if (isPending)
    return <Loader className="col-span-full place-self-center py-40" />;

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
    <GridLayout className="gap-6">
      <div className="col-span-full">
        <Button
          variant="text"
          startIcon={<WestIcon />}
          color="warning"
          className="!capitalize"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </div>
      <div className="col-span-full md:col-span-4 place-self-center">
        <Image
          src={data.image}
          alt={"name"}
          className="rounded"
          width={315}
          height={200}
        />
      </div>
      <div className="col-span-full md:col-span-8 flex flex-col gap-4">
        <div className="text-lg">De-Cars</div>
        <div className="text-4xl">{`De-Car #${data.id}`}</div>
        <div className="border border-solid border-stone-400 rounded p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center text-xl">
              <SubjectRoundedIcon />
              Traits
            </div>
            <div className="grid grid-cols-3 gap-4">
              <TraitInfo title="id" value={data.make} />
              <TraitInfo title="id" value={data.model} />
              <TraitInfo title="id" value={`${data.mileage}`} />
            </div>
          </div>
          <hr className="border-stone-400 -mx-4 my-4" />
          <div className="flex flex-col gap-4">
            <div className="text-slate-600 text-lg">Current Price</div>
            <div className="text-4xl font-semibold">
              {getFormattedCurrency(data.price)}
            </div>
            <Button
              variant="contained"
              color="warning"
              className="!rounded-full !capitalize"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </GridLayout>
  );
};

export default CarDetails;
