interface MainHeadingProps{
  title: string;
  subtitle: string;
}

export const MainHeading:React.FC<MainHeadingProps> = ({title, subtitle}) => {
  return (
    <div className="flex flex-col 2xl:gap-6 gap-4">
      <h3 className="2xl:text-[44px] text-4xl font-semibold 2xl:leading-[50px] leading-[42px]">{title}</h3>
      <p className="2xl:text-2xl text-lg 2xl:leading-7 leading-6">{subtitle}</p>
    </div>
  );
};
