"use server";

import { TCatBreed } from "@/lib/types";
import {
  API_CACHE_TIME,
  MAX_BREEDS_TO_QUERY,
  serverEnvs,
} from "@/lib/utils/server";
import { sampleSize } from "lodash";

// I did caching for 1 day so I'll optimize this query by using cache data and it will only run once per 24 hours
export default async function getRandomCatsBreeds(): Promise<TCatBreed[]> {
  const resp = await fetch(`${serverEnvs.CATS_API_BASE_URL}/breeds`, {
    headers: {
      "x-api-key": serverEnvs.CATS_API_KEY,
    },
    next: {
      revalidate: API_CACHE_TIME,
    },
  });

  return sampleSize(await resp.json(), MAX_BREEDS_TO_QUERY);
}
