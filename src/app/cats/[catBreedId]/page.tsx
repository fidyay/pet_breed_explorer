"use server";

import { getCatsBreedById } from "@/lib/functions/server";

export default async function Page({
  params,
}: {
  params: Promise<{ catBreedId: string }>;
}) {
  const { catBreedId } = await params;

  const catBreedData = await getCatsBreedById(catBreedId);

  console.log(catBreedData);

  return <div>{JSON.stringify(catBreedData)}</div>;
}
