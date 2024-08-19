import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_ui/select";
import { SelectIcon } from "@radix-ui/react-select";
import { Rocket } from "lucide-react";

export const SelectProject = () => {
  return (
    <Select>
      <SelectTrigger>
        <div className="flex items-center gap-5">
          <SelectIcon>
            <Rocket className="h-6 w-6 text-muted-foreground group-hover:text-success" />
          </SelectIcon>
          <SelectValue placeholder="Select Project" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="proj-1">Project 1</SelectItem>
        <SelectItem value="proj-2">Project 2</SelectItem>
        <SelectItem value="proj-3">Project 3</SelectItem>
      </SelectContent>
    </Select>
  );
};
