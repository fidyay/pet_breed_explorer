import { THeight, TImage, TWeight } from "./shared";

export type TDogBreed = {
  weight: TWeight;
  height: THeight;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id?: string;
};

export type TDogBreedImgData = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: TDogBreed[];
};

export type TDogBreedWithImages = TDogBreed & { images: TImage };
