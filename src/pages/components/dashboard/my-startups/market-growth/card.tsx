import { MarketResearchCardEditModal } from "./research-edit-modal";
import { MarketGrowthChart } from "./growth-chart";
import { MarketResearchChart } from "./research-chart";
import { MarketGrowthCardEditModal } from "./growth-edit-modal";
import { ReloadButton } from "@/components/ui";
import { useState } from "react";

interface MarketGrowthProps {
  heading: string;
  graphHeading: string;
  image: string;
  type: any;
  data: any;
}

export const MarketGrowthCard: React.FC<MarketGrowthProps> = ({
  heading,
  graphHeading,
  image,
  type,
  data,
}) => {
  const [reloadChart,setReloadChart] = useState(false)
  return (
    <div className="bg-info-light 2xl:p-8  p-4 rounded grid grid-cols-12 md:gap-10 gap-6 items-stretch">
      <div className="md:order-1 order-2 md:col-span-9 col-span-12 bg-background 2xl:p-8  p-4 rounded flex sm:flex-row flex-col 2xl:gap-24 md:gap-12 gap-6 items-center justify-between">
        <div className="flex flex-col gap-4 justify-between h-full w-full">
          <h4 className="2xl:text-[32px] md:text-2xl text-xl font-semibold text-foreground capitalize">
            Market {heading}
          </h4>
          <div className="2xl:text-2xl text-base 2xl:leading-7 leading-5 text-foreground border-b border-muted-foreground pb-2 ">
            <span className="text-muted-text">{data?.description ?? "Edit to start"}</span>
          </div>
        </div>
        <div className="bg-background 2xl:min-w-[328px] sm:min-w-[260px] min-w-full 2xl:h-[378px] h-[300px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
          <div className="flex items-center justify-between 2xl:gap-4 gap-2">
            <h6 className="uppercase 2xl:text-base text-sm font-medium ">
              Market {graphHeading}
            </h6>
            <ReloadButton  setReloadScore={setReloadChart} />
          </div>
          <div className="h-full">
            {type === "marketSize" ? (
              <MarketResearchChart reloadChart={reloadChart} data={data?.graphValues} />
            ) : (
              <MarketGrowthChart reloadChart={reloadChart} data={data?.graphValues} />
            )}
          </div>
        </div>
      </div>
      <div className="md:order-2 order-1 md:col-span-3 col-span-12 flex md:justify-end justify-start items-center relative">
        <div className="absolute top-0 right-0">
          {type === "marketSize" ? (
            <MarketResearchCardEditModal data={data} />
          ) : (
            <MarketGrowthCardEditModal data={data} />
          )}
        </div>
        <figure className="md:w-64 w-32">
          <img src={image} className="" alt="" />
        </figure>
      </div>
    </div>
  );
};
