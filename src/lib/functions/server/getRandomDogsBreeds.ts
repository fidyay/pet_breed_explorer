"use server";

import { serverEnvs } from "@/lib/utils/server";

// I didn't add here caching because we expect different random results every time
export default async function getRandomDogsBreeds() {
  const resp = await fetch(`${serverEnvs.DOGS_API_BASE_URL}/breeds`, {
    headers: {
      "x-api-key": serverEnvs.DOGS_API_KEY,
    },
  });

  return await resp.json();
}
