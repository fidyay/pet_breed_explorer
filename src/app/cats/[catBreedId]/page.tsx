"use server";

import { AnimalBreedDetailed } from "@/lib/components";
import { getCatsBreedById } from "@/lib/functions/server";

export default async function Page({
  params,
}: {
  params: Promise<{ catBreedId: string }>;
}) {
  const { catBreedId } = await params;

  const catBreedData = await getCatsBreedById(catBreedId);

  return <AnimalBreedDetailed breed={catBreedData} />;
}
