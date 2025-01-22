"use client";

import GridLayout from "@/components/GridLayout";
import ProfileInfo from "./components/ProfileInfo";

export default function Profile() {
  return (
    <GridLayout className="gap-6">
      <h1 className="col-span-full font-gravitas-one text-4xl text-center">
        Profile
      </h1>

      <ProfileInfo />
    </GridLayout>
  );
}
