"use server";

import { TCatBreed } from "@/lib/types";
import { MAX_BREEDS_TO_QUERY } from "@/lib/utils/server";
import { sampleSize } from "lodash";
import fetchCatsApi from "./fetchCatsApi";

export default async function getRandomCatsBreeds(): Promise<TCatBreed[]> {
  const data = await fetchCatsApi<TCatBreed[]>("breeds");

  return sampleSize(data, MAX_BREEDS_TO_QUERY);
}
