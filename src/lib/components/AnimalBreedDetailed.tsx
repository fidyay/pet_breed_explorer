import { TCatBreedWithImages, TDogBreedWithImages } from "../types";
import { BackButton } from "./BackButton";
import { BreedPhotosCarousel } from "./BreedPhotosCarousel";

type TProps = {
  breed: TCatBreedWithImages | TDogBreedWithImages;
  emptyArrFallbackLink: string;
};

// shared props: name, height, weight, temperament, life_span, images

export const AnimalBreedDetailed: React.FC<TProps> = ({
  breed,
  emptyArrFallbackLink,
}) => {
  return (
    <div className="flex flex-col">
      <BackButton href="/" />
      <BreedPhotosCarousel
        images={breed.images}
        emptyArrFallbackLink={emptyArrFallbackLink}
      />
    </div>
  );
};
