"use server";

import { TDogBreed, TDogBreedImgData } from "@/lib/types";
import fetchDogsApi from "./fetchDogsApi";

export default async function getDogImageById(
  imageId: TDogBreed["reference_image_id"]
): Promise<TDogBreedImgData> {
  return await fetchDogsApi<TDogBreedImgData>(`images/${imageId}`);
}
