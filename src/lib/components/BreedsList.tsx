import { TypographyH1 } from "./shadcn";

type TProps = {
  title: string;
  children: React.ReactNode[];
};

export const BreedsList: React.FC<TProps> = ({ title, children }) => {
  return (
    <div>
      <TypographyH1 className="mb-4">{title}</TypographyH1>
      <div className="flex gap-6 flex-col sm:flex-row flex-wrap items-stretch">
        {children}
      </div>
    </div>
  );
};
