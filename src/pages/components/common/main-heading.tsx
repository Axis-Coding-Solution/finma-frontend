type PropTypes = {
  heading: string;
  paragraph?: string;
};

export const MainHeading = ({ heading, paragraph }: PropTypes) => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl leading-tight font-bold">
        {heading}
      </h1>
      {paragraph && <p className="mt-1">{paragraph}</p>}
    </div>
  );
};
