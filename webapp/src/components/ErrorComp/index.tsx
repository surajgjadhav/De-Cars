import { Button } from "@mui/material";
import Image from "next/image";

export interface ErrorCompProps {
  className?: string;
  errImage?: string;
  errorMsg?: string;
  btnText: string;
  onClickBtn: () => void;
}

const ErrorComp = ({
  className,
  errImage = "",
  errorMsg,
  btnText,
  onClickBtn,
}: ErrorCompProps) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-center ${className}`}
    >
      <Image
        src={!errImage ? "/something-went-wrong.png" : errImage}
        alt="Something went wrong"
        width={400}
        height={148}
      />
      <h2 className="text-xl text-slate-800">
        {!!errorMsg ? errorMsg : "Something went wrong!"}
      </h2>
      <Button
        className="text-base !rounded-full !normal-case"
        color="warning"
        variant="contained"
        onClick={onClickBtn}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default ErrorComp;
