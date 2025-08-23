"use server";

import { getDogsBreedById } from "@/lib/functions/server";

export default async function Page({
  params,
}: {
  params: Promise<{ dogBreedId: string }>;
}) {
  const { dogBreedId: dogBreedIdStr } = await params;

  const dogBreedId = Number(dogBreedIdStr);

  const dogBreedData = await getDogsBreedById(dogBreedId);

  console.log(dogBreedData);

  return <div>{JSON.stringify(dogBreedData)}</div>;
}
