"use client";

import { contractAddress } from "@/config/contract";
import { useWriteCounterSetNumber } from "@/generated";
import useInvalidateCounterQuery from "@/hooks/useInvalidateCounterQuery";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

const SetCounterForm = ({ className = "" }: { className?: string }) => {
  const [number, setNumber] = useState<string>("");
  const { invalidateReadCounter } = useInvalidateCounterQuery();
  const { data: result, writeContract } = useWriteCounterSetNumber({
    mutation: {
      onSuccess: () => {
        invalidateReadCounter();
      },
    },
  });

  console.log("result of setCounter: ", result);

  const onChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const _value = event.target.value;
    const _number = Number(_value);
    setNumber(`${!isNaN(_number) ? _value : ""}`);
  };

  const onSetCounter = () => {
    console.log("number: ", number);
    writeContract({
      address: contractAddress,
      args: [BigInt(number)],
    });
  };
  return (
    <form
      className={`flex flex-row gap-4 items-center justify-between ${className}`}
    >
      <TextField
        id="counter"
        label="counter"
        variant="filled"
        size="small"
        value={number}
        onChange={onChangeNumber}
      />
      <Button variant="outlined" size="large" onClick={onSetCounter}>
        Set Counter
      </Button>
    </form>
  );
};

export default SetCounterForm;
