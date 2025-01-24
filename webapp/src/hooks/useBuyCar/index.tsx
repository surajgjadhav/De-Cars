import { dcMarketplaceAddress, usdcAddress } from "@/config/contract";
import {
  useWriteDeCarsMarketplaceBuy,
  useWriteErc20Approve,
} from "@/generated";
import { useMemo } from "react";
import { parseUnits } from "viem";

export const useBuyCar = () => {
  // Step 1: Approve USDC
  const {
    writeContractAsync: approve,
    isPending: approvalIsPending,
    error: approvalError,
  } = useWriteErc20Approve();

  //   Step 2: Buy car
  const {
    writeContractAsync: buyCar,
    isPending: buyCarIsPending,
    error: buyCarError,
  } = useWriteDeCarsMarketplaceBuy();

  const initiateCarBuying = async (id: bigint, priceInUSDC: bigint) => {
    const _priceInUSDC = parseUnits(priceInUSDC.toString(), 6);
    const approvalResp = await approve({
      address: usdcAddress,
      args: [dcMarketplaceAddress, _priceInUSDC],
    });
    console.log("approvalResp: ", approvalResp);

    const buyCarData = await buyCar({
      address: dcMarketplaceAddress,
      args: [BigInt(id), _priceInUSDC],
    });
    console.log("buyCarData: ", buyCarData);
  };

  const isPending = useMemo(
    () => approvalIsPending || buyCarIsPending,
    [approvalIsPending, buyCarIsPending]
  );

  /* useEffect(() => {
    console.log(
      "status, data, error: ",
      approveStatus,
      approveData,
      approvalError
    );

    if (approveStatus === "error") {
      console.log(approvalError);
    }

    if (approveStatus === "success" && !!priceInUSDC) {
      console.log("priceInUSDC:", priceInUSDC);

      buyCar({
        address: dcMarketplaceAddress,
        args: [BigInt(id), priceInUSDC],
      });
    }
  }, [approveStatus, priceInUSDC, approvalError]);

  useEffect(() => {
    console.log("status, data, error: ", buyCarStatus, buyCarData, buyCarError);

    if (buyCarStatus === "error") {
      console.log(buyCarError);
    }

    if (buyCarStatus === "success" && !!buyCarData) {
      console.log("buyCarData:", buyCarData);
    }
  }, [buyCarStatus, buyCarData, buyCarError]); */

  return {
    initiateCarBuying,
    isPending,
    approvalError,
    buyCarError,
  };
};
