import { BreedsList, CatBreedCard, DogBreedCard } from "../components";
import { TCatBreed, TDogBreed } from "../types";

type TProps = {
  catsBreeds: TCatBreed[];
  dogsBreeds: TDogBreed[];
};

export const HomePageView: React.FC<TProps> = ({ catsBreeds, dogsBreeds }) => {
  return (
    <div className="sm:p-6 p-4 flex flex-col gap-6">
      <BreedsList title="Cats">
        {catsBreeds.map((breed) => (
          <CatBreedCard breed={breed} key={breed.id} />
        ))}
      </BreedsList>
      <BreedsList title="Dogs">
        {dogsBreeds.map((breed) => (
          <DogBreedCard breed={breed} key={breed.id} />
        ))}
      </BreedsList>
    </div>
  );
};
