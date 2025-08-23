"use server";

import { TCatBreed, TCatBreedWithImages, TImage } from "@/lib/types";
import fetchCatsApi from "./fetchCatsApi";

export default async function getCatsBreedById(
  id: TCatBreed["id"]
): Promise<TCatBreedWithImages> {
  const [catData, imagesData] = await Promise.all([
    fetchCatsApi<TCatBreed>(`breeds/${id}`),
    fetchCatsApi<TImage[]>(`images/search?breed_ids=${id}&limit=25`),
  ]);

  return { ...catData, images: imagesData };
}
