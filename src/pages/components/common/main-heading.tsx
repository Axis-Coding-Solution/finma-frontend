type PropTypes = {
  heading: string;
  paragraph: string;
};

export const MainHeading = ({ heading, paragraph }: PropTypes) => {
  return (
    <div>
      <h1 className="text-[70px] font-bold">{heading}</h1>
      <p className="text-[16px]">{paragraph}</p>
    </div>
  );
};
