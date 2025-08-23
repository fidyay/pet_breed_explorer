import { TCatBreed } from "../types";
import { AnimalBreedCard } from "./AnimalBreedCard";

type TProps = {
  breed: TCatBreed;
};

export const CatBreedCard: React.FC<TProps> = ({ breed }) => {
  return (
    <AnimalBreedCard
      breedName={breed.name}
      breedDescription={breed.temperament}
      readMoreLink={`/cats/${breed.id}`}
      imgSrc={breed.image?.url ?? "/unknown_cat.png"}
    />
  );
};
