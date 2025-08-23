import { cn } from "@/lib/utils/client";

type TProps = {
  children: string;
  className?: string;
};

export function TypographyP({ children, className }: TProps) {
  return (
    <h1 className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </h1>
  );
}
