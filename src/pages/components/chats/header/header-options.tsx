import { Ellipsis, FilePenLine, Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditChatModal, DeleteChatModal } from "./modals";

const HeaderOptions = () => {
  return (
    <div className="flex text-center gap-5">
      <div className="content-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none">
            <Ellipsis className="mt-2"  />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col">
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <FilePenLine size={14} />
                Edit
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <Info size={14} />
                Info
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <EditChatModal />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DeleteChatModal />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default HeaderOptions;
