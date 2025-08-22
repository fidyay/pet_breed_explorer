import NextLink from "next/link";
import { Button } from "./shadcn";
import { LucideArrowRight } from "lucide-react";

type TProps = {
  href: string;
};

export const ReadMoreButton: React.FC<TProps> = ({ href }) => {
  return (
    <Button asChild>
      <NextLink href={href}>
        Read more <LucideArrowRight />
      </NextLink>
    </Button>
  );
};
