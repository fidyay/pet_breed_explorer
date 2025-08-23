import { LucideArrowLeft } from "lucide-react";
import { Button } from "./shadcn";
import NextLink from "next/link";

type TProps = {
  href: string;
};

export const BackButton: React.FC<TProps> = ({ href }) => {
  return (
    <Button variant="ghost" asChild>
      <NextLink href={href}>
        <LucideArrowLeft />
        Back
      </NextLink>
    </Button>
  );
};
