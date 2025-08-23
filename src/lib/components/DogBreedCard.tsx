import { TDogBreed } from "../types";
import { AnimalBreedCard } from "./AnimalBreedCard";

type TProps = {
  breed: TDogBreed;
};

export const DogBreedCard: React.FC<TProps> = ({ breed }) => {
  const breedImgUrl = breed.reference_image_id
    ? `/api/dogs/images/${breed.reference_image_id}`
    : "/unknown_dog.png";

  return (
    <AnimalBreedCard
      breedName={breed.name}
      breedDescription={breed.temperament}
      readMoreLink={`/dogs/${breed.id}`}
      imgSrc={breedImgUrl}
    />
  );
};
