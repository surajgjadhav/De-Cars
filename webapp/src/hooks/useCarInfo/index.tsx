import { CAR, CARS } from "@/utils/queryConstants";
import { useQuery } from "@tanstack/react-query";

export type CarDetails = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: 1;
  image: string;
};

const getBaseURL = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export const fetchCarDetails = async (): Promise<Array<CarDetails>> => {
  const baseURL = getBaseURL();
  const response = await fetch("https://www.freetestapi.com/api/v1/cars");
  const data = await response.json();
  const carDetails: CarDetails[] = (data as CarDetails[]).map((car) => {
    return {
      ...car,
      image: `${baseURL}/cars/${car.id}.jpg`,
    };
  });
  return carDetails;
};

export const fetchCarDetailsById = async (id: string): Promise<CarDetails> => {
  const baseURL = getBaseURL();
  const response = await fetch(`https://www.freetestapi.com/api/v1/cars/${id}`);
  const data: CarDetails = (await response.json()) as CarDetails;
  const carDetails: CarDetails = {
    ...data,
    image: `${baseURL}/cars/${data.id}.jpg`,
  };
  return carDetails;
};

export const useCarDetails = () => {
  return useQuery({
    queryFn: () => fetchCarDetails(),
    queryKey: [CARS],
  });
};

export const useCarDetailsById = (id: string) => {
  return useQuery({
    queryFn: () => fetchCarDetailsById(id),
    queryKey: [CAR, id],
  });
};
