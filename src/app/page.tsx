"use server";

import {
  getRandomDogsBreeds,
  getRandomCatsBreeds,
} from "@/lib/functions/server";
import { connection } from "next/server";

export default async function Home() {
  // I use it here to disable prerendering of this page as we expect different results every time
  await connection();

  const [catsBreeds, dogsBreeds] = await Promise.all([
    getRandomCatsBreeds(),
    getRandomDogsBreeds(),
  ]);

  return (
    <div>
      <h1>Cats</h1>
      <p>{JSON.stringify(catsBreeds)}</p>
      <h1>Dogs</h1>
      <p>{JSON.stringify(dogsBreeds)}</p>
    </div>
  );
}
