import { ReactNode } from "react";

type PropTypes = {
  title: string;
  subtitle?: string;
  renderRight?: ReactNode;
};

export const HeadingButton   = ({ title, subtitle, renderRight }: PropTypes) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <h1 className="2xl:text-[38px] text-2xl leading-tight font-semibold">
          {title}
        </h1>
        {subtitle && <p className="text-muted-text border-l-2 border-muted-foreground pl-2 2xl:text-2xl font-medium text-base">{subtitle}</p>}
      </div>
      {renderRight}
    </div>
  );
};
