import BannerCard from "@/components/BannerCard";
import GridLayout from "@/components/GridLayout";
import Image from "next/image";
import Banner6 from "../../../../public/banner-6.jpg";
import CarList from "@/app/(user)/marketplace/components/CarList";

export default function Marketplace() {
  return (
    <GridLayout className="gap-6">
      <h1 className="col-span-full font-gravitas-one text-4xl text-center">
        Marketplace
      </h1>

      <div className="col-span-full">
        <BannerCard>
          <GridLayout>
            <div className="col-span-8 flex flex-col gap-4 justify-center">
              <div className="text-xl md:text-6xl font-bold">
                Drive the dream, relive the past.
              </div>
            </div>
            <div className="col-span-4 flex justify-end">
              <Image src={Banner6} alt="banner image" className="rounded-xl" />
            </div>
          </GridLayout>
        </BannerCard>
      </div>

      <CarList />
    </GridLayout>
  );
}
