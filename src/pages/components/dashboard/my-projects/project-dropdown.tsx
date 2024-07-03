import { Ellipsis, FilePenLine, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ProjectEditModal} from "./project-edit-modal";
import {ProjectDeleteModal} from "./project-delete-modal";

const ProjectDropDOwn = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none">
          <Ellipsis size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom">
          <div className="flex flex-col p-3">
            <ProjectEditModal />
            <div className="flex gap-2">
              <ProjectDeleteModal />
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProjectDropDOwn;
