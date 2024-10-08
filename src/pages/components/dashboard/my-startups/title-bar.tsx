import { LogoAvatar } from "@/assets/svgs";
import { Avatar } from "@/components/ui";
import { TeamMembersDropdown } from "./team-members";
import { cn } from "@/utils";
import { useParams } from "react-router-dom";
import { useGetStartupStatus } from "@/api/hooks/dashboard";

export const StartupTitleBar = ({ data, type }: any) => {
  const { id: projectId } = useParams();
  const { data: status } = useGetStartupStatus({
    id: projectId as string,
    type: type,
  });
  console.log("qwerty", status);
  return (
    <div className="bg-background px-6 py-4 shadow rounded flex 2xl:flex-1 flex-wrap items-center  2xl:gap-10 gap-4 justify-between">
      {/* Page title  */}
      <div className="">
        <div className="flex items-center gap-3">
          <Avatar
            className="object-cover 2xl:w-16 w-14 2xl:h-16 h-14"
            image={data?.logo || LogoAvatar}
          />
          <div className="flex flex-col gap-1">
            <h4 className="2xl:text-[28px] leading-0 text-lg font-semibold text-foreground capitalize">
              {data?.name}
            </h4>
            <p className="2xl:text-base text-sm text-muted-text 2xl:-mt-0 -mt-2">
              {data?.industry?.label}
            </p>
          </div>
        </div>
      </div>
      {/* Validate name  */}
      <div className="flex gap-2 max-w-[270px] ">
        <div className="min-w-2 h-2 rounded-full bg-green mt-[6px]"></div>
        <span className="text-muted-foreground 2xl:text-base text-sm 2xl:leading-6 leading-5">
          Created by <span className="text-info">{data?.user?.fullName}</span>{" "}
          on {data?.createdAt}
        </span>
      </div>
      {/* Status  */}
      <div className="">
        <div className="flex flex-col gap-2">
          <h6 className="text-primary-disabled text-base">Status</h6>
          <div
            className={cn(
              "max-w-max py-1 px-6 text-foreground 2xl:text-lg text-sm rounded",
              status?.count === 2 ? "bg-secondary-dark" : "bg-secondary"
            )}
          >
            {status?.count === 2
              ? "Tasks Completed"
              : `${status?.count ?? 0} / 2 Tasks Completed`}
          </div>
        </div>
      </div>
      {/* Team  */}
      <div className="">
        <TeamMembersDropdown type="startup" id={data?.id} />
      </div>
    </div>
  );
};
