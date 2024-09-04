import { Fragment } from "react";
import { timelineContent } from "./timeline-component/data";
import {
  StartupTimelineCard,
  StartupTimelinePillar,
} from "./timeline-component";

export const StartupTimeline = () => {
  return (
    <div className="flex flex-col [&>div>*]:-mt-20 w-full my-4">
      {timelineContent.map((item: any, key: any) => {
        return (
          <Fragment key={key}>
            <div className="w-full grid grid-cols-[1fr_auto_1fr] 2xl:gap-x-10 gap-x-6 items-center mx-auto">
              {item.direction === "right" ? (
                <StartupTimelineCard
                  idx={key}
                  to={item.to}
                  heading={item.heading}
                  subHeading={item.subHeading}
                  detail={item.detail}
                  image={item.image}
                  direction={item.direction}
                  totalTask={item.totalTask}
                  completedTask={item.completedTask}
                />
              ) : (
                <div></div>
              )}
              <StartupTimelinePillar />
              {item.direction === "left" ? (
                <StartupTimelineCard
                  idx={key}
                  to={item.to}
                  heading={item.heading}
                  subHeading={item.subHeading}
                  detail={item.detail}
                  image={item.image}
                  direction={item.direction}
                  totalTask={item.totalTask}
                  completedTask={item.completedTask}
                />
              ) : (
                <div></div>
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
