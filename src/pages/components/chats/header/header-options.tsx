import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, FilePenLine, Info} from "lucide-react";
import { DeleteChatModal } from "../delete-chat-modal";
import { EditChatModal } from "../edit-chat-modal";

const HeaderOptions = () => {
  return (
    <div className="flex text-center gap-5">
      <div className="content-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none">
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="gap-2 px-1">
              <FilePenLine size={14} />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 px-1">
              <Info size={14} />
              Info
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <EditChatModal/>
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
