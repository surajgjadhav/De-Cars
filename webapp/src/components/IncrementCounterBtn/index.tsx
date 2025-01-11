"use client";

import { contractAddress } from "@/config/contract";
import { useWriteCounterIncrement } from "@/generated";
import useInvalidateCounterQuery from "@/hooks/useInvalidateCounterQuery";
import { Button } from "@mui/material";

const IncrementCounterBtn = ({ className = "" }: { className?: string }) => {
  const { invalidateReadCounter } = useInvalidateCounterQuery();
  const { data: result, writeContract } = useWriteCounterIncrement({
    mutation: {
      onSuccess: () => {
        invalidateReadCounter();
      },
    },
  });

  console.log("result of increment counter: ", result);

  const onIncrement = () =>
    writeContract({
      address: contractAddress,
    });

  return (
    <Button
      className={`${className}`}
      variant="contained"
      onClick={onIncrement}
    >
      Increment
    </Button>
  );
};

export default IncrementCounterBtn;
