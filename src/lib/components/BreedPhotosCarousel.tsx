import * as React from "react";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn";
import { TImage } from "../types";
import NextImage from "next/image";
import { useMemo } from "react";

type TProps = {
  images: TImage[];
  emptyArrFallbackLink: string;
};

export const BreedPhotosCarousel: React.FC<TProps> = ({
  images,
  emptyArrFallbackLink,
}) => {
  // in case there are no images for this breed just show fallback image
  const imagesToUse: TImage[] = useMemo(() => {
    if (images.length) {
      return images;
    } else {
      return [{ height: 0, width: 0, id: "", url: emptyArrFallbackLink }];
    }
  }, [images, emptyArrFallbackLink]);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {imagesToUse.map((image, index) => (
          <CarouselItem key={image.id}>
            <Card className="py-0 overflow-hidden">
              <CardContent className="flex aspect-square items-center justify-center relative">
                <NextImage
                  className="object-cover"
                  fill
                  src={image.url}
                  alt={`Breed image №${index + 1}`}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
