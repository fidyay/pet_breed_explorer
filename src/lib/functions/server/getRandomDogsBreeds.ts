"use server";

import { TDogBreed } from "@/lib/types";
import { MAX_BREEDS_TO_QUERY } from "@/lib/utils/server";
import { sampleSize } from "lodash";
import fetchDogsApi from "./fetchDogsApi";

export default async function getRandomDogsBreeds(): Promise<TDogBreed[]> {
  const data = await fetchDogsApi<TDogBreed[]>("breeds");

  return sampleSize(data, MAX_BREEDS_TO_QUERY);
}
