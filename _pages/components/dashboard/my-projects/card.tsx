import { Avatar } from "@/components/_ui/avatar";
import { CornerDownRight } from "lucide-react";
import ProjectDropdownModal from "./project-dropdown";
import { Link } from "react-router-dom";
import { userAvatar1Image } from "@/assets/images";

const ProjectCard = (props: any) => {
  return (
    <>
      <div className="bg-accent flex flex-col gap-5  w-full p-5 rounded-xl">
        <div className="flex justify-between">
          <Avatar
            className="object-cover"
            image={props.logoImage || userAvatar1Image}
            size="lg"
          />
          <ProjectDropdownModal name={props.name} id={props.id} />
        </div>
        <div>
          <h1 className="text-lg font-bold">{props.name}</h1>
          <h1 className="text-xs text-muted-foreground">{props.bio}</h1>
        </div>
        <Link to={`/dashboard/my-projects/${props.id}`}>
          <div className="flex gap-1 justify-end text-xs">
            <h1 className="underline">Go to Project</h1>
            <CornerDownRight size={14} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
