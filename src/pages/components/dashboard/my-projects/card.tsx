import { Avatar } from "@/components/ui/avatar";
import ProjectDropdownModal from "./project-dropdown";
import { LogoAvatar } from "@/assets/svgs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const statusVariant: any = {
  launched: "secondary",
  progress: "warning",
  closed: "info",
};

const ProjectCard = (props: any) => {
  const launched = "bg-secondary-dark/50 hover:bg-secondary-dark/80";
  const progress = "bg-secondary/70 hover:bg-secondary";
  const closed = "bg-light-gray hover:bg-gray-200";

  return (
    <Link
      to={props.id}
      className={`${
        props.status === "launched"
          ? launched
          : props.status === "progress"
          ? progress
          : closed
      }  rounded-[14px] 2xl:p-5 p-4  duration-300 ease-in-out`}
    >
      <div className="bg-background h-full w-full flex flex-col gap-3  p-3 rounded-[14px]">
        <div className="flex justify-between">
          <Avatar
            className="object-cover 2xl:min-w-16 2xl:h-16 min-w-12 h-12"
            image={props.logo || LogoAvatar}
          />
          <ProjectDropdownModal name={props.name} id={props.id} />
        </div>
        <div>
          <h1 className="2xl:text-[28px] text-xl font-semibold">
            {props.name}
          </h1>
          <h1 className="2xl:text-base text-sm text-muted-foreground">
            {props.industry}
          </h1>
        </div>
        <div
          className={`flex ${
            props.status && "justify-between"
          } justify-end items-center gap-2 2xl:mt-5 mt-2`}
        >
          {props.status && (
            <Badge variant={statusVariant[props.status]}>{props.status}</Badge>
          )}
          <div className="flex items-center relative -space-x-2">
            <div className="bg-[#FEA946] border border-border 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              AG
            </div>
            <div className="bg-[#00569E] border border-border 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
