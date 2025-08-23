import { Card, CardDescription, CardHeader, CardTitle } from "./shadcn";
import NextImage from "next/image";
import NextLink from "next/link";

type TProps = {
  imgSrc: string;
  breedName: string;
  breedDescription: string;
  readMoreLink: string;
};

export const AnimalBreedCard: React.FC<TProps> = ({
  imgSrc,
  breedName,
  breedDescription,
  readMoreLink,
}) => {
  return (
    <Card className="p-0 overflow-hidden hover:bg-accent hover:text-accent-foreground">
      <NextLink href={readMoreLink} className="flex flex-col gap-6">
        <div className="relative h-64 w-full">
          <NextImage
            className="object-cover"
            fill
            src={imgSrc}
            alt={breedName}
          />
        </div>
        <div className="pb-6 pt-0 flex flex-col gap-6">
          <CardHeader>
            <CardTitle>{breedName}</CardTitle>
            <CardDescription>{breedDescription}</CardDescription>
          </CardHeader>
        </div>
      </NextLink>
    </Card>
  );
};
