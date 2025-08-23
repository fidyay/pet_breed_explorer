"use server";

import { API_CACHE_TIME, serverEnvs } from "@/lib/utils/server";

// I did caching for 1 day so I'll optimize queries by using cache data and it will only run once per 24 hours
export default async function fetchCatsApi<T>(route: string): Promise<T> {
  const resp = await fetch(`${serverEnvs.CATS_API_BASE_URL}/${route}`, {
    headers: {
      "x-api-key": serverEnvs.CATS_API_KEY,
    },
    next: {
      revalidate: API_CACHE_TIME,
    },
  });

  return await resp.json();
}
