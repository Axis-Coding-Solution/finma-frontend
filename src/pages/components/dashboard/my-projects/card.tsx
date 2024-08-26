import { Avatar } from "@/components/ui/avatar";
import ProjectDropdownModal from "./project-dropdown";
import { LogoAvatar } from "@/assets/svgs";
import { Badge } from "@/components/ui/badge";

const statusVariant: any = {
  Completed: "secondary",
  "In progress": "danger",
  "No started": "primary",
};

const ProjectCard = (props: any) => {
  const completed = "gradient-complete";
  const inProgress = "gradient-progress";
  const noStarted = "gradient-noStarted";

  return (
    <div
      className={`${
        props.status === "Completed"
          ? completed
          : props.status === "In progress"
          ? inProgress
          : noStarted
      }  2xl:rounded-[32px] rounded-3xl overflow-hidden pt-0.5`}
    >
      <div className="bg-background flex flex-col gap-3  w-full p-6 2xl:rounded-[32px] rounded-3xl ">
        <div className="flex justify-between">
          <Avatar
            className="object-cover 2xl:min-w-16 2xl:h-16 min-w-12 h-12"
            image={props.img || LogoAvatar}
          />
          <ProjectDropdownModal name="hello" id="10" />
        </div>
        <div>
          <h1 className="2xl:text-[28px] text-xl font-semibold">
            {props.name}
          </h1>
          <h1 className="2xl:text-base text-sm text-muted-foreground">
            {props.category}
          </h1>
        </div>
        <div className="flex justify-between items-center 2xl:mt-5 mt-2">
          <Badge variant={statusVariant[props.status]}>{props.status}</Badge>
          <div className="flex items-center relative">
            <div className="bg-[#FEA946] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              AG
            </div>
            <div className="bg-[#00569E] 2xl:min-w-10 2xl:h-10 w-8 h-8 2xl:text-base text-sm font-normal flex justify-center items-center rounded-full text-background uppercase">
              VH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
