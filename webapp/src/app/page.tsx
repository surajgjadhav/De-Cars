import BannerCard from "@/components/BannerCard";
import ExploreCarButton from "@/components/ExploreCarButton";
import GridLayout from "@/components/GridLayout";
import Tag from "@/components/Tag";
import Image from "next/image";
import Banner1 from "../../public/banner-1.jpg";
import Banner2 from "../../public/banner-2.png";
import Banner3 from "../../public/banner-3.jpg";

export default function Home() {
  return (
    <GridLayout className="gap-6">
      <h1 className="col-span-full font-gravitas-one text-7xl text-center">
        Vintage Cars
      </h1>
      <div className="col-span-full">
        <BannerCard>
          <GridLayout>
            <div className="col-span-9">
              <Image
                src={Banner1}
                alt="banner image"
                width={500}
                className="rounded"
              />
            </div>
            <div className="col-span-3 flex flex-col gap-4 items-start justify-between">
              <div className="flex flex-col gap-4 items-start">
                <Tag title="Feature" />
                <div className="text-3xl">
                  Own History, Securely and Transparently.
                </div>
              </div>
              <ExploreCarButton
                className="!px-8 !py-4 self-end"
                useIconOnly={true}
              />
            </div>
          </GridLayout>
        </BannerCard>
      </div>

      <div className="col-span-4">
        <div className="min-h-full flex flex-col justify-around items-start">
          <div className="font-gravitas-one text-8xl">Unique Cars</div>
          <ExploreCarButton className="!p-4 " />
        </div>
      </div>
      <div className="col-span-4" />
      <div className="col-span-4">
        <BannerCard>
          <div className="flex flex-col gap-2 items-start">
            <Tag title="Feature" />
            <div className="text-lg">
              Your Gateway to Classic Rides, Backed by the Blockchain.
            </div>
            <Image src={Banner2} alt="banner image" className="rounded" />
          </div>
        </BannerCard>
      </div>

      <div className="col-span-4 text-lg text-stone-600">
        Timeless designs, legendary journeys, and unmatched charm. Experience
        the elegance of vintage, reimagined for you.
      </div>
      <div className="col-span-4 text-lg text-stone-600">
        Vintage is not just a style; it&apos;s a way of celebrating the
        craftsmanship and spirit of another time.
      </div>
      <div className="col-span-4 text-lg text-stone-600">
        Some cars whisper luxury, but vintage cars roar elegance. Stand out with
        a classic that’s built to last forever.
      </div>

      <div className="col-span-4">
        <Image src={Banner3} alt="banner image" className="rounded" />
      </div>
      <div className="col-span-4 font-gravitas-one text-7xl flex items-center text-center">
        Best Cars
      </div>
      <div className="col-span-4 text-xl flex items-center">
        These cars don&apos;t just take you places—they take you back in time.
        Own a story, not just a ride.
      </div>
    </GridLayout>
  );
}
