import { cn } from "@/lib/utils/client";

type TProps = {
  children: string;
  className?: string;
};

export function TypographyH1({ children, className }: TProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
}
