import { LogoAvatar } from "@/assets/svgs";

interface StartupData {
  data: {
    name: string;
    industry: any;
    logo: any;
  };
}

export const StartuptitleBar = ({ data }: StartupData) => {
  return (
    <div className="bg-background px-6 py-4 shadow rounded flex 2xl:flex-1 flex-wrap items-start  2xl:gap-10 gap-4 justify-between">
      {/* Page title  */}
      <div className="">
        <div className="flex items-center gap-3">
          <img src={data?.logo || LogoAvatar} className="w-16" />
          <div className="flex flex-col gap-1">
            <h4 className="2xl:text-[28px] leading-0 text-lg font-semibold text-foreground capitalize">
              {data?.name}
            </h4>
            <p className="text-base text-muted-text">{data?.industry?.label}</p>
          </div>
        </div>
      </div>
      {/* Validate name  */}
      <div className="flex gap-2 max-w-[270px]">
        <div className="min-w-2 h-2 rounded-full bg-green mt-2"></div>
        <span className="text-muted-foreground 2xl:text-base text-sm leading-6">
          Validated by{" "}
          <span className="text-info">
            Allan Durr, Thomas Dalle, Heather Marx
          </span>{" "}
          on 20 Aug 2023
        </span>
      </div>
      {/* Status  */}
      <div className="">
        <div className="flex flex-col gap-2">
          <h6 className="text-primary-disabled text-base">Status</h6>
          <div className="max-w-max bg-secondary py-1 px-6 text-foreground 2xl:text-lg text-sm rounded">
            0/200 Tasks Completed
          </div>
        </div>
      </div>
      {/* Team  */}
      <div className="">
        <div className="flex flex-col gap-2">
          <h6 className="text-primary-disabled text-base">Team</h6>
          <div className="flex items-center -space-x-2 overflow-visible">
            <div className="border border-border bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              AG
            </div>
            <div className="border border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
            <div className="border border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
            <div className="border border-border bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
