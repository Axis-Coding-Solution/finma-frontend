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
      <h3 className="2xl:text-[44px] 2xl:l xl:text-3xl text-xl font-semibold ">
        {title}
      </h3>
      {subtitle && (
        <p className="2xl:text-2xl md:text-base text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
};
