import { useMemo } from "react";
import { TCatBreedWithImages, TDogBreedWithImages } from "../types";
import {
  LucideBaby,
  LucideBone,
  LucideComponent,
  LucideFolderPen,
  LucideMapPinHouse,
  LucideRuler,
  LucideWeight,
} from "lucide-react";
import { cn } from "../utils/client";

type TInfoSectionData = {
  icon: React.ReactNode;
  name: string;
  value: string;
};

type TProps = {
  breed: TCatBreedWithImages | TDogBreedWithImages;
  className?: string;
};

export const BreedInfoSections: React.FC<TProps> = ({ breed, className }) => {
  const infoSectionsData = useMemo(() => {
    const infoSectionsData: TInfoSectionData[] = [];

    if ("life_span" in breed && breed.life_span) {
      infoSectionsData.push({
        icon: <LucideBaby />,
        name: "Life span",
        value: breed.life_span,
      });
    }

    if ("weight" in breed && breed.weight) {
      infoSectionsData.push({
        icon: <LucideWeight />,
        name: "Weight",
        value: `${breed.weight.metric} kg`,
      });
    }

    if ("alt_names" in breed && breed.alt_names) {
      infoSectionsData.push({
        icon: <LucideFolderPen />,
        name: "Alternative names",
        value: breed.alt_names,
      });
    }

    if ("height" in breed && breed.height) {
      infoSectionsData.push({
        icon: <LucideRuler />,
        name: "Height",
        value: `${breed.height.metric} cm`,
      });
    }

    if ("origin" in breed && breed.origin) {
      infoSectionsData.push({
        icon: <LucideMapPinHouse />,
        name: "Origin",
        value: breed.origin,
      });
    }

    if ("breed_group" in breed && breed.breed_group) {
      infoSectionsData.push({
        icon: <LucideComponent />,
        name: "Breed group",
        value: breed.breed_group,
      });
    }

    if ("bred_for" in breed && breed.bred_for) {
      infoSectionsData.push({
        icon: <LucideBone />,
        name: "Bred for",
        value: breed.bred_for,
      });
    }

    return infoSectionsData;
  }, [breed]);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {infoSectionsData.map((section) => {
        return (
          <div key={section.name}>
            <div className="flex items-center gap-1">
              {section.icon} <p className="font-bold">{section.name}:</p>
            </div>
            <p>{section.value}</p>
          </div>
        );
      })}
    </div>
  );
};
