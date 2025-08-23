import { BreedInfoSections, BreedPhotosCarousel } from "../components";
import { BackButton } from "../components/BackButton";
import { TypographyH1, TypographyP } from "../components/shadcn";
import { TCatBreedWithImages, TDogBreedWithImages } from "../types";

type TProps = {
  breed: TCatBreedWithImages | TDogBreedWithImages;
  emptyArrFallbackLink: string;
};

export const AnimalBreedDetailedView: React.FC<TProps> = ({
  breed,
  emptyArrFallbackLink,
}) => {
  return (
    <div className="flex flex-col">
      <BackButton href="/" className="self-start mb-1" />
      <div className="flex justify-center">
        <BreedPhotosCarousel
          images={breed.images}
          emptyArrFallbackLink={emptyArrFallbackLink}
        />
      </div>

      <TypographyH1 className="mt-6">{breed.name}</TypographyH1>

      <BreedInfoSections breed={breed} className="mt-6" />

      <TypographyP>{breed.temperament}</TypographyP>
      {"description" in breed ? (
        <TypographyP>{breed.description}</TypographyP>
      ) : null}
    </div>
  );
};
