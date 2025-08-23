"use server";

import { TCatBreed } from "@/lib/types";
import { API_CACHE_TIME, serverEnvs } from "@/lib/utils/server";

// I did caching for 1 day so I'll optimize this query by using cache data and it will only run once per 24 hours
export default async function getCatsBreedById(
  id: TCatBreed["id"]
): Promise<TCatBreed> {
  const [dataResp, imagesResp] = await Promise.all([
    fetch(`${serverEnvs.CATS_API_BASE_URL}/breeds/${id}`, {
      headers: {
        "x-api-key": serverEnvs.CATS_API_KEY,
      },
      next: {
        revalidate: API_CACHE_TIME,
      },
    }),
    fetch(`${serverEnvs.CATS_API_BASE_URL}/images/search?breed_ids=${id}`, {
      headers: {
        "x-api-key": serverEnvs.CATS_API_KEY,
      },
      next: {
        revalidate: API_CACHE_TIME,
      },
    }),
  ]);

  return { ...(await dataResp.json()), images: await imagesResp.json() };
}
