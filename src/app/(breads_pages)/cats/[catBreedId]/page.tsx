"use server";

import { getCatsBreedById } from "@/lib/functions/server";
import { AnimalBreedDetailedView } from "@/lib/views";

export default async function Page({
  params,
}: {
  params: Promise<{ catBreedId: string }>;
}) {
  const { catBreedId } = await params;

  const catBreedData = await getCatsBreedById(catBreedId);

  return (
    <AnimalBreedDetailedView
      breed={catBreedData}
      emptyArrFallbackLink="/unknown_cat.png"
    />
  );
}
