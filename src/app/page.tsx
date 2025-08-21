"use server";

import {
  getRandomDogsBreeds,
  getRandomCatsBreeds,
} from "@/lib/functions/server";

export default async function Home() {
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
