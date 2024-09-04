import { cn } from "@/utils";

interface StartupTimelineCardProps {
  idx: number;
  heading: string;
  subHeading: string;
  detail: string;
  image: string;
  completedTask: string;
  totalTask: string;
  direction: string;
}

export const StartupTimelineCard: React.FC<StartupTimelineCardProps> = ({
  idx,
  heading,
  subHeading,
  detail,
  image,
  completedTask,
  totalTask,
  direction,
}) => {
  return (
    <div className={cn("relative", idx === 0 && "!mt-0")}>
      <div className="bg-info-light 2xl:p-5 p-4 rounded w-full">
        <div className="bg-background rounded 2xl:py-5 py-4 2xl:px-3 px-2">
          <h4 className="text-foreground 2xl:text-[32px] text-2xl font-semibold mb-2">
            {heading}
          </h4>
          <span className="text-muted-text 2xl:text-lg text-sm 2xl:leading-6 leading-5">
            {subHeading}
          </span>
          <div className="flex items-start gap-4">
            <span className="text-muted-text 2xl:text-lg text-sm 2xl:leading-6 leading-5">
              {detail}
            </span>
            <figure className="2xl:min-w-48 2xl:h-48 min-w-32 h-32">
              <img src={image} className="w-full h-full" alt="" />
            </figure>
          </div>
          <div>
            <div
              className={cn(
                "py-1 2xl:px-6 px-4 text-foreground rounded-full max-w-max 2xl:text-lg text-sm bg-secondary",
                totalTask === completedTask
                  ? "bg-secondary-dark"
                  : "bg-secondary"
              )}
            >
              {totalTask === completedTask
                ? "Tasks Completed"
                : `${completedTask} / ${totalTask} Tasks Completed`}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-secondary w-10 h-6 absolute top-1/2 ${
          direction == "right" ? "-right-10" : "-left-10"
        } transform -translate-y-1/2 `}
      ></div>
    </div>
  );
};
