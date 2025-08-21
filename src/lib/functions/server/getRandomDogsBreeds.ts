"use server";

import { TDogBreed } from "@/lib/types";
import { serverEnvs } from "@/lib/utils/server";

// I didn't add here caching because we expect different random results every time
export default async function getRandomDogsBreeds(): Promise<TDogBreed[]> {
  const resp = await fetch(`${serverEnvs.DOGS_API_BASE_URL}/breeds?limit=10`, {
    headers: {
      "x-api-key": serverEnvs.DOGS_API_KEY,
    },
  });

  return await resp.json();
}
