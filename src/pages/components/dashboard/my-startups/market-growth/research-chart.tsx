export const MarketResearchChart = () => {
  return (
    <div className="relative">
      <div className="2xl:w-[280px] 2xl:h-[280px] w-[230px] h-[230px]  rounded-full bg-[#9AE179] relative">
        <div className="absolute 2xl:top-8 top-4 left-1/2 -translate-x-1/2 flex flex-col text-center text-foreground">
          <span className="2xl:text-[10px] text-[8px]">TAM</span>
          <span className="2xl:text-2xl text-base font-medium -mt-1">
            $4.5B
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2  w-[70%] h-[70%] rounded-full bg-[#BDF4A3]">
        <div className="absolute 2xl:top-8 top-4 left-1/2 -translate-x-1/2 flex flex-col text-center text-foreground">
          <span className="2xl:text-[10px] text-[8px]">SAM</span>
          <span className="2xl:text-2xl text-base font-medium -mt-1">
            $4.5B
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2  w-[40%] h-[40%] rounded-full bg-background">
        <div className="absolute 2xl:top-8 top-4 left-1/2 -translate-x-1/2 flex flex-col text-center text-foreground">
          <span className="2xl:text-[10px] text-[8px]">SOM</span>
          <span className="2xl:text-2xl text-base font-medium -mt-1">
            $4.5B
          </span>
        </div>
      </div>
    </div>
  );
};
