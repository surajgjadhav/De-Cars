import { dcMarketplaceAddress } from "@/config/contract";
import { useWriteDeCarsMarketplaceList } from "@/generated";
import { CarDetails, useCarDetails } from "@/hooks/useCarInfo";
import { CarMetadata, usePinataUploadJSON } from "@/hooks/usePinata";
import { useEffect, useMemo, useState } from "react";

export const useInitData = () => {
  const [selectedCarId, setSelectedCarID] = useState(0);
  const { data: carDetails, isError, isPending } = useCarDetails();

  const { /* data: result, */ writeContract, isPending: isPendingWM } =
    useWriteDeCarsMarketplaceList();

  const {
    mutate,
    status,
    data,
    error,
    isPending: mutateIsLoading,
  } = usePinataUploadJSON();

  const isLoading = useMemo(
    () => mutateIsLoading || isPendingWM,
    [mutateIsLoading, isPendingWM]
  );

  const onCardClick = (carDetails: CarDetails) => {
    const { id, make, model, image, year, mileage, fuelType, transmission } =
      carDetails;
    setSelectedCarID(id);
    const metaData: CarMetadata = {
      name: `De-Car #${id}`,
      description: `${make} - ${model}`,
      image,
      attributes: [
        {
          trait_type: "make",
          value: make,
        },
        {
          trait_type: "model",
          value: model,
        },
        {
          trait_type: "year",
          value: year,
        },
        {
          trait_type: "mileage",
          value: mileage,
        },
        {
          trait_type: "fuelType",
          value: fuelType,
        },
        {
          trait_type: "transmission",
          value: transmission,
        },
      ],
    };

    mutate(metaData);
  };

  useEffect(() => {
    console.log("status, data, error: ", status, data, error);

    if (status === "error") {
      console.log(error);
    }

    if (status === "success" && !!data) {
      console.log(data);
      const { tokenURI } = data;
      console.log("tokenURI:", tokenURI);

      // call list method
      writeContract({
        address: dcMarketplaceAddress,
        args: [BigInt(selectedCarId), tokenURI, BigInt(374), 30000000],
      });
    }
  }, [status, data, error]);

  return {
    selectedCarId,
    carDetails,
    isError,
    isPending,
    isLoading,
    onCardClick,
  };
};
