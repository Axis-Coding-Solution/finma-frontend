import {
  Avatar,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

export const AvatarGroup = (props: any) => {
  return props?.team?.length > 0 ? (
    props?.team?.map((item: any, index: number) => (
      <TooltipProvider>
        <Tooltip delayDuration={150}>
          <TooltipTrigger>
            <div
              key={index}
              className={`border ${
                index % 2 === 0 ? "bg-[#FEA946]" : "bg-[#00569E]"
              } 2xl:min-w-10 2xl:h-10 min-w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase hover:-translate-y-1 duration-300 transition-all`}
            >
              {item.name}
            </div>
          </TooltipTrigger>
          <TooltipContent  className="rounded-sm min-w-[200px] p-4 relative">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Avatar image={item.profilePicture} size="sm" />
                <span className="text-foreground text-base font-medium">
                  {item.fullName}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 mt-1">
                <span className="text-foreground text-xs font-medium">Status:</span>
                <span className="text-muted-text text-xs font-normal">{item.status ?? "No Status"}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-foreground text-xs font-medium">Entrepreneur Type:</span>
                <span className="text-muted-text text-xs font-normal">{item.entrepreneurType ?? "No Entrepreneur Type"}</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ))
  ) : (
    <p className="2xl:text-base text-sm text-center text-muted">No team</p>
  );
};
