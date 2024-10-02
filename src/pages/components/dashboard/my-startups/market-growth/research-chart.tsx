import { cn } from "@/utils";

function formatNumber(num: number) {
  if (num < 100) return num.toString();
  if (num < 1_000_00) return (num / 1000).toFixed(1) + "k";
  if (num < 1_000_000_00) return (num / 1_000_000).toFixed(1) + "m";
  if (num < 1_000_000_000_00) return (num / 1_000_000_000).toFixed(1) + "B";
  return (num / 1_000_000_000_00).toFixed(1) + "T";
}

const roundToTwoDecimalPlaces = (number: number) => {
  const factor = Math.pow(10, 2);
  return Math.round(number * factor) / factor;
};

export const MarketResearchChart = ({
  reloadChart,
  data = {},
}: {
  data: any;
  reloadChart: any;
}) => {
  const samPercentage = roundToTwoDecimalPlaces(
    (Number(data?.sam) / data?.tam) * 100
  );

  const somPercentage = roundToTwoDecimalPlaces(
    (Number(data?.som) / data?.tam) * 100
  );

  return (
    <div className="2xl:size-[280px] size-[230px] relative flex justify-center items-end">
      <div className="size-full absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#9AE179] overflow-hidden">
        <div className={cn(data?.tam && "animate-zoom-out")}>
          <div className="absolute 2xl:top-8 top-4 left-1/2 -translate-x-1/2 flex flex-col text-center text-foreground">
            <span className="2xl:text-[10px] text-[8px]">TAM</span>
            <span className="2xl:text-2xl text-base font-medium -mt-1">
              {data?.tam ? formatNumber(data.tam) : ""}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ width: `${samPercentage}%`, height: `${samPercentage}%` }}
        className={cn(
          "transition-[width_height] duration-300 ease-in-out absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#BDF4A3] overflow-hidden",
          samPercentage > 0 && reloadChart ? "animate-zoom-out" : ""
        )}
      >
        <div className="absolute 2xl:top-8 top-4 left-1/2 -translate-x-1/2 flex flex-col text-center text-foreground">
          <span className="2xl:text-[10px] text-[8px]">SAM</span>
          <span className="2xl:text-xl text-base font-medium -mt-1">
            {data?.sam ? formatNumber(data.sam) : ""}
          </span>
        </div>
      </div>
      <div
        className={cn(
          "transition-[width_height] duration-300 ease-in-out absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-background overflow-hidden",
          somPercentage > 0 && reloadChart ? "animate-zoom-out" : ""
        )}
        style={{ width: `${somPercentage}%`, height: `${somPercentage}%` }}
      >
        <div className="absolute 2xl:top-8 top-4 left-1/2 -translate-x-1/2 flex flex-col text-center text-foreground">
          <span className="2xl:text-[10px] text-[8px]">SOM</span>
          <span className="2xl:text-lg text-base font-medium -mt-1">
            {data?.som ? formatNumber(data.som) : ""}
          </span>
        </div>
      </div>
    </div>
  );
};
