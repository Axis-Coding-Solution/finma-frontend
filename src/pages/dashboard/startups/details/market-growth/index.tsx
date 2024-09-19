import {
  useGetMarketResearchByProjectId,
  useGetStartupById,
} from "@/api/hooks/dashboard";
import { GoBack } from "@/pages/components/common";
import { StartupTitleBar } from "@/pages/components/dashboard/my-startups";
import { MarketGrowthCard } from "@/pages/components/dashboard/my-startups/market-growth";
import { MarketGrowthContent } from "@/pages/components/dashboard/my-startups/market-growth/data";
import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";

const StartupMarketGrowthPage = () => {
  const params = useParams();
  const startupId = params.id;
  const { data } = useGetStartupById(String(startupId));
  const { data: marketData } = useGetMarketResearchByProjectId(
    String(startupId)
  );

  return (
    <div className="flex flex-col 2xl:gap-10 gap-6">
      {/* back Button  */}
      <GoBack />

      {/* Breadcrumb  */}
      <div className="flex items-center 2xl:gap-3 gap-1 2xl:text-2xl text-base font-medium text-foreground">
        <span className="text-muted-foreground">My Startups</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span className="text-muted-foreground">{data?.name}</span>
        <ChevronRight size={20} className="text-muted-foreground" />
        <span>Market Growth</span>
      </div>

      {/* Title Card  */}
      <StartupTitleBar data={data} />

      {/* Idea Validation Card  */}
      <div className="flex flex-col 2xl:gap-10 gap-6">
        {MarketGrowthContent &&
          MarketGrowthContent.map((item, idx: number) => (
            <MarketGrowthCard
              data={
                marketData &&
                marketData?.find((el: any) => el.type === item.type)
              }
              type={item.type}
              key={idx}
              heading={item.heading}
              graphHeading={item.graphHeading}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default StartupMarketGrowthPage;
