
import { Fragment } from "react";
import { timelineContent } from "./timeline-component/data";
import {
  StartupTimelineCard,
  StartupTimelinePillar,
} from "./timeline-component";

export const StartupTimeline = () => {
  return (
    <div className="flex flex-col [&>div>*]:-mt-20 w-full my-4">
      {timelineContent.map((event: any, key: any) => {
        return (
          <Fragment key={key}>
            <div className="w-full grid grid-cols-[1fr_auto_1fr] 2xl:gap-x-10 gap-x-6 items-center mx-auto">
              {event.direction === "right" ? (
                <StartupTimelineCard
                  idx={key}
                  heading={event.heading}
                  subHeading={event.subHeading}
                  detail={event.detail}
                  image={event.image}
                  direction={event.direction}
                  totalTask={event.totalTask}
                  completedTask={event.completedTask}
                />
              ) : (
                <div></div>
              )}
              <StartupTimelinePillar />
              {event.direction === "left" ? (
                <StartupTimelineCard
                  idx={key}
                  heading={event.heading}
                  subHeading={event.subHeading}
                  detail={event.detail}
                  image={event.image}
                  direction={event.direction}
                  totalTask={event.totalTask}
                  completedTask={event.completedTask}
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
