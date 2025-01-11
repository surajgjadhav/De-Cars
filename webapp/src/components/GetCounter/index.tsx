"use client";
import { contractAddress } from "@/config/contract";
import { useReadCounterNumber } from "@/generated";

const GetCounter = ({ className = "" }: { className?: string }) => {
  const { data: counter } = useReadCounterNumber({
    address: contractAddress,
  });
  const isDefined = counter !== undefined;

  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center ${className}`}
    >
      <div
        className={`text-8xl ${isDefined ? "font-bold text-black" : "text-gray-400"}`}
      >
        {isDefined ? counter : "N/A"}
      </div>
    </div>
  );
};

export default GetCounter;
