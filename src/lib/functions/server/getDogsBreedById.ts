"use server";

import { TDogBreed, TDogBreedWithImages, TImage } from "@/lib/types";
import fetchDogsApi from "./fetchDogsApi";

export default async function getDogsBreedById(
  id: TDogBreed["id"]
): Promise<TDogBreedWithImages> {
  const [dogData, imagesData] = await Promise.all([
    fetchDogsApi<TDogBreed>(`breeds/${id}`),
    fetchDogsApi<TImage[]>(`images/search?breed_ids=${id}&limit=25`),
  ]);

  return { ...dogData, images: imagesData };
}
