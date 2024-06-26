import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SquarePen, Trash } from "lucide-react";
const statusOptions = [
  { label: "Building a new feature", value: "Building a new feature" },
  { label: "Proofing the concept", value: "Proofing the concept" },
  { label: "interviewing customers", value: "interviewing customers" },
  { label: "Designing new XP", value: "Designing new XP" },
];
const StatusModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-start items-center gap-2 cursor-pointer px-2 mt-2 ">
            <div className=" ">
              <span>
                <SquarePen size={16} />
              </span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-left">Status Update</DialogTitle>
          </DialogHeader>
          <label
            htmlFor="deleteMe"
            className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Are you sure you want to delete chat?
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Building a new feature" />
            </SelectTrigger>
            <SelectContent side="bottom">
              {statusOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
            <Button variant="default" className="w-full">
              <Trash size="20" />
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default StatusModal;
