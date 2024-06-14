import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleX, Ellipsis, FilePenLine, Info, Trash2 } from "lucide-react";

const HeaderOptions = () => {
  return (
    <div className="flex text-center gap-5">
        <div>

      <span className="text-sm">
        <span className="font-bold">4 Projects</span> of expertise
      </span>
      </div>
      <div className="content-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none">
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="gap-2"><FilePenLine size={14} />Edit</DropdownMenuItem>
          <DropdownMenuItem className="gap-2"> <Info size={14}/>Info</DropdownMenuItem>
          <DropdownMenuItem className="gap-2"> <CircleX size={14} />Clear Chat History</DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-red-600"> <Trash2 size={14}/>Delete Chat</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderOptions;
