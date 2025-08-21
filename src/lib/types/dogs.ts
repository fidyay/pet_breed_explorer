import { THeight, TWeight } from "./shared";

export type TDogBreed = {
  weight: TWeight;
  height: THeight;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
};
