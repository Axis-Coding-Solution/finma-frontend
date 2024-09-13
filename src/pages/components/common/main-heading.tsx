interface MainHeadingProps {
  title: string;
  subtitle?: string;
}

export const MainHeading: React.FC<MainHeadingProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col 2xl:gap-6 gap-2">
      <h3 className="2xl:text-[44px] text-3xl font-semibold 2xl:leading-[50px] leading-10 ">
        {title}
      </h3>
      {subtitle && (
        <p className="2xl:text-2xl text-base 2xl:leading-7 leading-5">
          {subtitle}
        </p>
      )}
    </div>
  );
};
