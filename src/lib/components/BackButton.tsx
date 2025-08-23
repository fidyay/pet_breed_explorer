import { LucideArrowLeft } from "lucide-react";
import { Button } from "./shadcn";
import NextLink from "next/link";

type TProps = {
  href: string;
  className?: string;
};

export const BackButton: React.FC<TProps> = ({ href, className }) => {
  return (
    <Button variant="ghost" asChild className={className}>
      <NextLink href={href}>
        <LucideArrowLeft />
        Back
      </NextLink>
    </Button>
  );
};
