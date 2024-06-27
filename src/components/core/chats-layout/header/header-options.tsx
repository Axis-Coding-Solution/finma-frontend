import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, FilePenLine, Info } from "lucide-react";
import { DeleteChatModal } from "../../../../pages/components/chats/delete-chat-modal";
import { EditChatModal } from "../../../../pages/components/chats/edit-chat-modal";

const HeaderOptions = () => {
  return (
    <div className="flex text-center gap-5">
      <div className="content-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none">
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col ">
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <FilePenLine size={14} />
                Edit
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2" >
                <Info size={14} />
                Info
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <EditChatModal />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DeleteChatModal  />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default HeaderOptions;
