interface MainHeadingProps{
  title: string;
  subtitle: string;
}

export const MainHeading:React.FC<MainHeadingProps> = ({title, subtitle}) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[44px] font-medium">{title}</h3>
      <p className="text-2xl leading-7">{subtitle}</p>
    </div>
  );
};
