"use client";
import GridLayout from "@/components/GridLayout";
import Image from "next/image";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import { formatUSDC, getFormattedCurrency } from "@/utils";
import { Button } from "@mui/material";
import TraitInfo from "@/components/TraitInfo";
import { useParams, useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";
import Loader from "@/components/Loader";
import ErrorComp from "@/components/ErrorComp";
import { RoutePathEnum } from "@/enums/RoutePaths";
import {
  useReadDeCarsMarketplaceGetValuationInUsdc,
  useReadDeCarsTokenGetPriceDetails,
  useReadDeCarsTokenTokenUri,
} from "@/generated";
import { dcMarketplaceAddress, dcTokenAddress } from "@/config/contract";
import { useNftMetadataById } from "@/hooks/useNftMetadata";
import { useMemo } from "react";
import { useBuyCar } from "@/hooks/useBuyCar";

/**
 * fetch car details from contract and dispplay all detysails of NFT
 */
const CarDetails = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { id } = params;

  // const { data, isPending, isError } = useCarDetailsById(id);
  const {
    data: tokenURI,
    isPending: isLoadingTokenURI,
    isError: isErrorTokenURI,
  } = useReadDeCarsTokenTokenUri({
    address: dcTokenAddress,
    args: [BigInt(id)],
  });

  const {
    data: tokenPrice,
    isPending: isLoadingTokenPrice,
    isError: isErrorTokenPrice,
  } = useReadDeCarsTokenGetPriceDetails({
    address: dcTokenAddress,
    args: [BigInt(id)],
  });

  const {
    data: tokenPriceUsdc,
    isPending: isLoadingTokenPriceUsdc,
    isError: isErrorTokenPriceUsdc,
  } = useReadDeCarsMarketplaceGetValuationInUsdc({
    address: dcMarketplaceAddress,
    args: [BigInt(id)],
  });

  const {
    data: metaData,
    isPending: isLoadingMetaData,
    isError: isErrorMetaData,
  } = useNftMetadataById({
    tokenURI: tokenURI || "",
    enabled: !!tokenURI,
  });

  const isLoading = useMemo(
    () =>
      isLoadingTokenURI ||
      isLoadingMetaData ||
      isLoadingTokenPrice ||
      isLoadingTokenPriceUsdc,
    [
      isLoadingTokenURI,
      isLoadingMetaData,
      isLoadingTokenPrice,
      isLoadingTokenPriceUsdc,
    ]
  );
  const isError = useMemo(
    () =>
      isErrorTokenURI ||
      isErrorMetaData ||
      isErrorTokenPrice ||
      isErrorTokenPriceUsdc,
    [isErrorTokenURI, isErrorMetaData, isErrorTokenPrice, isErrorTokenPriceUsdc]
  );

  const { isPending, initiateCarBuying } = useBuyCar();

  console.log("tokenPriceUsdc: ", tokenPriceUsdc);

  if (isLoading)
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
      {!!metaData && (
        <>
          <div className="col-span-full md:col-span-4 place-self-center">
            <Image
              src={metaData.image}
              alt={"name"}
              className="rounded"
              width={315}
              height={200}
            />
          </div>
          <div className="col-span-full md:col-span-8 flex flex-col gap-4">
            <div className="text-lg">De-Cars</div>
            <div className="text-4xl">{metaData.name}</div>
            <div className="border border-solid border-stone-400 rounded p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center text-xl">
                  <SubjectRoundedIcon />
                  Traits
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {metaData.attributes.map(({ trait_type, value }) => (
                    <TraitInfo
                      key={trait_type}
                      title={trait_type}
                      value={value}
                    />
                  ))}
                </div>
              </div>
              <hr className="border-stone-400 -mx-4 my-4" />
              <div className="flex flex-col gap-4">
                <div className="text-slate-600 text-lg">Current Price</div>
                <div className="flex flex-row gap-4 justify-between items-center">
                  <div className="text-4xl font-semibold">
                    {getFormattedCurrency(tokenPrice || 0)}
                  </div>
                  <div className="text-3xl text-gray-600">
                    {tokenPriceUsdc ? formatUSDC(tokenPriceUsdc) : 0}{" "}
                    <span className="text-xl">USDC</span>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="warning"
                  className="!rounded-full !capitalize"
                  onClick={() =>
                    tokenPriceUsdc
                      ? initiateCarBuying(BigInt(id), tokenPriceUsdc)
                      : undefined
                  }
                  disabled={isPending}
                >
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </GridLayout>
  );
};

export default CarDetails;
