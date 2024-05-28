type PropTypes = {
  heading: string;
  paragraph: string;
};

export const MainHeading = ({ heading, paragraph }: PropTypes) => {
  return (
    <div>
      <h1 className="text-6xl leading-snug font-bold">{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
