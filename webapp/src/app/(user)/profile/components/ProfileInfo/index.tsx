"use client";

import BannerCard from "@/components/BannerCard";
import ErrorComp from "@/components/ErrorComp";
import InfoField from "@/components/InfoField";
import { dcMarketplaceAddress } from "@/config/contract";
import { RoutePathEnum } from "@/enums/RoutePaths";
import { useReadDeCarsMarketplaceGetMyCars } from "@/generated";
import { useNftMetadata } from "@/hooks/useNftMetadata";
import { useRouter } from "next/navigation";
import LoadingSkeleton from "../LoadingSkeleton";
import { useAccount } from "wagmi";
import { getFormattedAddress } from "@/utils";
import NftInfoCard from "@/components/NftInfoCard";

const ProfileInfo = () => {
  const router = useRouter();
  const { address } = useAccount();

  console.log("dcMarketplaceAddress: ", dcMarketplaceAddress);

  const {
    data: myNfts,
    isFetching,
    isError,
  } = useReadDeCarsMarketplaceGetMyCars({
    address: dcMarketplaceAddress,
  });

  const { data: nftMetadata } = useNftMetadata({
    nfts: [...(myNfts || [])],
    enabled: !!myNfts?.length,
  });

  if (isFetching) return <LoadingSkeleton />;
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
      <div className="col-span-full">
        <BannerCard>
          <div className="flex flex-row gap-4 justify-around">
            <InfoField
              title="Address"
              value={`${address ? getFormattedAddress(address) : "0x0"}`}
            />
            <InfoField title="No. of NFTs" value={`${myNfts?.length || 0}`} />
          </div>
        </BannerCard>
      </div>

      {!nftMetadata?.nftInfo.length ? (
        <ErrorComp
          errImage="/no-result.png"
          className="col-span-full"
          errorMsg="No car in account"
          btnText="Explore Marketplace"
          onClickBtn={() => router.push(RoutePathEnum.MARKETPLACE)}
        />
      ) : (
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {nftMetadata.nftInfo.map(
            ({ id, metaData: { name, description, image } }) => (
              <NftInfoCard
                key={id}
                name={name}
                description={description}
                imageLink={image}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
