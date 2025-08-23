"use server";

import { AnimalBreedDetailed } from "@/lib/components";
import { getDogsBreedById } from "@/lib/functions/server";

export default async function Page({
  params,
}: {
  params: Promise<{ dogBreedId: string }>;
}) {
  const { dogBreedId: dogBreedIdStr } = await params;

  const dogBreedId = Number(dogBreedIdStr);

  const dogBreedData = await getDogsBreedById(dogBreedId);

  return (
    <AnimalBreedDetailed
      breed={dogBreedData}
      emptyArrFallbackLink="/unknown_dog.png"
    />
  );
}
