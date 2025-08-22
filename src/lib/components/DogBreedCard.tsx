import { TDogBreed } from "../types";
import { clientEnvs } from "../utils/client";
import { AnimalBreedCard } from "./AnimalBreedCard";

type TProps = {
  breed: TDogBreed;
};

export const DogBreedCard: React.FC<TProps> = ({ breed }) => {
  const breedImgUrl = `${clientEnvs.NEXT_PUBLIC_DOGS_IMAGES_BASE_URL}/${breed.reference_image_id}.jpg`;

  return (
    <AnimalBreedCard
      breedName={breed.name}
      breedDescription={breed.temperament}
      readMoreLink={`/dogs/${breed.id}`}
      imgSrc={breedImgUrl}
    />
  );
};
