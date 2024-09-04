import { ReactNode } from "react";

type PropTypes = {
  heading: string;
  paragraph?: string;
  renderRight?: ReactNode;
};

export const MainHeading = ({ heading, paragraph, renderRight }: PropTypes) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl md:text-4xl leading-tight font-bold">
          {heading}
        </h1>
        {paragraph && <p className="mt-1">{paragraph}</p>}
      </div>
      {renderRight}
    </div>
  );
};
