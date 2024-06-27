import { CircleX, Forward } from "lucide-react";
import {
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const EditChatModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-start items-center gap-2 cursor-pointer px-2">
          <div className="">
            <CircleX size={14} />
          </div>
          <h1 className="text-sm">Clear Chat History </h1>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Clear chat history</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Input className="Search" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deleteOther" />
            <Avatar image={userAvatar2Image} size="md" />
            <div className="flex flex-col">
              <label
                htmlFor="deleteOther"
                className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Salama M.
              </label>
              <label> Venture analyst</label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deleteOther" />
            <Avatar image={userAvatar3Image} size="md" />
            <div className="flex flex-col">
              <label
                htmlFor="deleteOther"
                className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Jim Smith
              </label>
              <label>Market intelligence</label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deleteOther" />
            <Avatar image={userAvatar4Image} size="md" />
            <div className="flex flex-col">
              <label
                htmlFor="deleteOther"
                className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Vivian Violet
              </label>
              <label>Business strategist</label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deleteOther" />
            <Avatar image={userAvatar5Image} size="md" />
            <div className="flex flex-col">
              <label
                htmlFor="deleteOther"
                className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Jackie Jess
              </label>
              <label>Market intelligence</label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
          <Button variant="default" className="w-full">
            <Forward size="20" />
            Forward
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
