"use server";

import { getDogsBreedById } from "@/lib/functions/server";
import { AnimalBreedDetailedView } from "@/lib/views";

export default async function Page({
  params,
}: {
  params: Promise<{ dogBreedId: string }>;
}) {
  const { dogBreedId: dogBreedIdStr } = await params;

  const dogBreedId = Number(dogBreedIdStr);

  const dogBreedData = await getDogsBreedById(dogBreedId);

  return (
    <AnimalBreedDetailedView
      breed={dogBreedData}
      emptyArrFallbackLink="/unknown_dog.png"
    />
  );
}
