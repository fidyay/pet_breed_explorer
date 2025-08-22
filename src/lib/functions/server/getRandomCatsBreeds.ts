"use server";

import { TCatBreed } from "@/lib/types";
import { serverEnvs } from "@/lib/utils/server";

// I didn't add here caching because we expect different random results every time
export default async function getRandomCatsBreeds(): Promise<TCatBreed[]> {
  const resp = await fetch(`${serverEnvs.CATS_API_BASE_URL}/breeds?limit=10`, {
    headers: {
      "x-api-key": serverEnvs.CATS_API_KEY,
    },
  });

  return await resp.json();
}
