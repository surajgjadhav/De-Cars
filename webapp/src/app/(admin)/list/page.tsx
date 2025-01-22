import GridLayout from "@/components/GridLayout";
import ListCars from "./components/ListCars";

export default function List() {
  return (
    <GridLayout className="gap-6">
      <h1 className="col-span-full font-gravitas-one text-4xl text-center">
        List Cars
      </h1>

      <ListCars />
    </GridLayout>
  );
}
