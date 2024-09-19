import React from "react";
import { MarketResearchCardEditModal } from "./research-edit-modal";
import { MarketGrowthChart } from "./growth-chart";
import { MarketResearchChart } from "./research-chart";
import { MarketGrowthCardEditModal } from "./growth-edit-modal";
import { ReloadButton } from "@/components/ui";

interface MarketGrowthProps {
  heading: string;
  subHeading: string;
  detail: string;
  market: string;
  image: string;
  chart: string;
  modal: string;
  data: any;
}

export const MarketGrowthCard: React.FC<MarketGrowthProps> = ({
  heading,
  market,
  image,
  chart,
  modal,
  data,
}) => {
  return (
    <div className="bg-info-light 2xl:p-8  p-4 rounded grid grid-cols-12 md:gap-10 gap-6 items-stretch">
      <div className="md:order-1 order-2 md:col-span-9 col-span-12 bg-background 2xl:p-8  p-4 rounded flex sm:flex-row flex-col 2xl:gap-24 md:gap-12 gap-6 items-center justify-between">
        <div className="flex flex-col justify-between h-full w-full">
          <h4 className="2xl:text-[32px] text-2xl font-semibold text-foreground capitalize">
            Market {heading}
          </h4>
          <div className="2xl:text-2xl text-base 2xl:leading-7 leading-5 text-foreground border-b border-muted-foreground pb-2 ">
            <span className="text-muted-text">{data?.question}</span>
          </div>
        </div>
        <div className="bg-background 2xl:min-w-[328px] min-w-[260px] 2xl:h-[378px] h-[300px] rounded shadow-lg 2xl:p-6 p-4  flex flex-col 2xl:gap-8 gap-6">
          <div className="flex items-center justify-between 2xl:gap-4 gap-2">
            <h6 className="uppercase 2xl:text-base text-sm font-medium ">
              Market {market}
            </h6>
            {chart === "research" ? <ReloadButton /> : <ReloadButton />}
          </div>
          <div className="h-full">
            {chart === "research" ? (
              <MarketResearchChart />
            ) : (
              <MarketGrowthChart />
            )}
          </div>
        </div>
      </div>
      <div className="md:order-2 order-1 md:col-span-3 col-span-12 flex md:justify-end justify-start items-center relative">
        <div className="absolute top-0 right-0">
          {modal === "research" ? (
            <MarketResearchCardEditModal  data={data}  />
          ) : (
            <MarketGrowthCardEditModal  data={data} />
          )}
        </div>
        <figure className="md:w-64 w-32">
          <img src={image} className="" alt="" />
        </figure>
      </div>
    </div>
  );
};
