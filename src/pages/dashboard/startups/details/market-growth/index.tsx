import { useGetProjectById } from "@/api/hooks/dashboard";
import { StartupTitleBar } from "@/pages/components/dashboard/my-startups";
import { MarketGrowthCard } from "@/pages/components/dashboard/my-startups/market-growth";
import { MarketGrowthContent } from "@/pages/components/dashboard/my-startups/market-growth/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const StartupMarketGrowthPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const startupId = params.id;

  const { data } = useGetProjectById(String(startupId));

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col 2xl:gap-10 gap-6">
      {/* back Button  */}
      <button
        onClick={handleBack}
        className="flex items-center 2xl:text-xl text-base font-medium text-foreground gap-2"
      >
        <ChevronLeft size={20} />
        Go Back
      </button>

      {/* Breadcrumb  */}
      <div className="flex items-center 2xl:gap-3 gap-2 2xl:text-2xl text-lg font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span className="text-muted-foreground">{data?.name}</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>Market Growth</span>
      </div>

      {/* Title Card  */}
      <div>
        <StartupTitleBar data={data} />
      </div>

      {/* Idea Validation Card  */}
      <div className="flex flex-col 2xl:gap-10 gap-6">
        {MarketGrowthContent &&
          MarketGrowthContent.map((item: any) => (
            <MarketGrowthCard
              heading={item.heading}
              subHeading={item.subHeading}
              detail={item.detail}
              market={item.market}
              image={item.image}
              chart={item.chart}
              modal={item.modal}
            />
          ))}
      </div>
    </div>
  );
};

export default StartupMarketGrowthPage;
