"use server";

import {
  getRandomDogsBreeds,
  getRandomCatsBreeds,
} from "@/lib/functions/server";
import { HomePageView } from "@/lib/views";
import { connection } from "next/server";

export default async function Home() {
  // I use it here to disable prerendering of this page as we expect different results every time
  await connection();

  const [catsBreeds, dogsBreeds] = await Promise.all([
    getRandomCatsBreeds(),
    getRandomDogsBreeds(),
  ]);

  return <HomePageView catsBreeds={catsBreeds} dogsBreeds={dogsBreeds} />;
}
