interface MainHeadingProps{
  title: string;
  subtitle: string;
}

export const MainHeading:React.FC<MainHeadingProps> = ({title, subtitle}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-4xl font-medium">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
