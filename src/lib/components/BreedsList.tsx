import { TypographyH1 } from "./shadcn";

type TProps = {
  title: string;
  children: React.ReactNode[];
};

export const BreedsList: React.FC<TProps> = ({ title, children }) => {
  return (
    <div>
      <TypographyH1 className="mb-4">{title}</TypographyH1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
