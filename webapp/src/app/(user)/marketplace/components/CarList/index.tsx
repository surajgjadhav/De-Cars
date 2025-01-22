"use client";
import { RoutePathEnum } from "@/enums/RoutePaths";
import { useRouter } from "next/navigation";
import ErrorComp from "@/components/ErrorComp";
import LoadingSkeleton from "../LoadingSkeleton";
import { useReadDeCarsMarketplaceGetListedCars } from "@/generated";
import { dcMarketplaceAddress } from "@/config/contract";
import { useNftMetadata } from "@/hooks/useNftMetadata";
import BuyNftCard from "@/components/BuyNftCard";
import { useMemo } from "react";

/**
 * check all minted tokens and fetch it's info using tokenURI
 */
const CarList = () => {
  const router = useRouter();

  const {
    data: listedCars,
    isFetching: isFetchingNft,
    isError: isErrorNft,
  } = useReadDeCarsMarketplaceGetListedCars({
    address: dcMarketplaceAddress,
  });

  const {
    data: nftMetadata,
    isFetching: isFetchingMetadata,
    isError: isErrorMetadata,
  } = useNftMetadata({
    nfts: [...(listedCars || [])],
    enabled: !!listedCars?.length,
  });

  const isLoading = useMemo(
    () => isFetchingNft || isFetchingMetadata,
    [isFetchingNft, isFetchingMetadata]
  );

  const isError = useMemo(
    () => isErrorNft || isErrorMetadata,
    [isErrorNft, isErrorMetadata]
  );

  console.log("listedCars: ", listedCars);

  if (isLoading) return <LoadingSkeleton />;

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
    <>
      {!nftMetadata?.nftInfo ? (
        <ErrorComp
          errImage="/no-result.png"
          className="col-span-full"
          errorMsg="No car listed"
          btnText="Go to Home"
          onClickBtn={() => router.push(RoutePathEnum.HOME)}
        />
      ) : (
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {nftMetadata.nftInfo.map(
            ({ id, metaData: { name, description, image } }) => {
              return (
                <BuyNftCard
                  key={id}
                  name={name}
                  description={description}
                  imageLink={image}
                  onClickDetails={() =>
                    router.push(`${RoutePathEnum.MARKETPLACE}/${id}`)
                  }
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default CarList;
