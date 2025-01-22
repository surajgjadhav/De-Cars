import BuyNftCard from "@/components/BuyNftCard";

const LoadingSkeleton = () => {
  return (
    <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <BuyNftCard
        imageLink={""}
        name=""
        description=""
        onClickDetails={() => {}}
        isLoading
      />
      <BuyNftCard
        imageLink={""}
        name=""
        description=""
        onClickDetails={() => {}}
        isLoading
      />
      <BuyNftCard
        imageLink={""}
        name=""
        description=""
        onClickDetails={() => {}}
        isLoading
      />
    </div>
  );
};

export default LoadingSkeleton;
