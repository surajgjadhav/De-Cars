import { dcMarketplaceAddress } from "@/config/contract";
import {
  useReadDeCarsMarketplaceGetListedCars,
  useReadDeCarsTokenOwner,
  useWriteDeCarsMarketplaceList,
} from "@/generated";
import { CarDetails, useCarDetails } from "@/hooks/useCarInfo";
import { CarMetadata, usePinataUploadJSON } from "@/hooks/usePinata";
import { useEffect, useMemo, useState } from "react";

export const useInitData = () => {
  const [selectedCarId, setSelectedCarID] = useState(0);
  const {
    data: carDetails,
    isError: isErrorCarDetails,
    isPending: isPendingCarDetails,
  } = useCarDetails();

  const {
    data: listedCars,
    isPending: isPendingNft,
    isError: isErrorNft,
  } = useReadDeCarsMarketplaceGetListedCars({
    address: dcMarketplaceAddress,
  });

  const {
    data: result,
    writeContract,
    isPending: isPendingWM,
    error: listError,
  } = useWriteDeCarsMarketplaceList();

  const { data: owner } = useReadDeCarsTokenOwner();

  console.log("listError: ", listError);
  console.log("result: ", result);
  console.log("isPendingWM: ", isPendingWM);
  console.log("owner: ", owner);

  const isPending = useMemo(
    () => isPendingCarDetails || isPendingNft,
    [isPendingCarDetails, isPendingNft]
  );
  const isError = useMemo(
    () => isErrorCarDetails || isErrorNft,
    [isErrorCarDetails, isErrorNft]
  );

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
        args: [BigInt(selectedCarId), tokenURI, BigInt(242), 300000],
      });
    }
  }, [status, data, error]);

  const listedCarIds = useMemo(
    () => listedCars?.map((listedCar) => listedCar.id) || [],
    [listedCars]
  );

  return {
    selectedCarId,
    carDetails,
    listedCars,
    listedCarIds,
    isError,
    isPending,
    isLoading,
    onCardClick,
  };
};
