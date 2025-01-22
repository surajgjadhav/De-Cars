import BannerCard from "@/components/BannerCard";
import InfoFieldSkeleton from "@/components/InfoFieldSkeleton";
import NftInfoCard from "@/components/NftInfoCard";

const LoadingSkeleton = () => {
  return (
    <>
      <div className="col-span-full">
        <BannerCard>
          <div className="flex flex-row gap-4 justify-around">
            <InfoFieldSkeleton title="Address" />
            <InfoFieldSkeleton title="No. of NFTs" />
          </div>
        </BannerCard>
      </div>

      <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <NftInfoCard description="" imageLink={""} name="" isLoading />
        <NftInfoCard description="" imageLink={""} name="" isLoading />
        <NftInfoCard description="" imageLink={""} name="" isLoading />
      </div>
    </>
  );
};

export default LoadingSkeleton;
