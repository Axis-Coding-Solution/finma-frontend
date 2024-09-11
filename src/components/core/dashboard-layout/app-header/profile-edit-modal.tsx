import { useAddStatusMutation } from "@/api/hooks/dashboard";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/_ui/dialog";
import { Avatar, Button, FloatingInput, Label } from "@/components/ui";
import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { Camera, Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LogoAvatar } from "@/assets/svgs";

const statusOptions = [
  { value: "building1", label: "Building a new Feature" },
  { value: "building2", label: "Building a new feature 2" },
  { value: "building3", label: "Building a new feature 3" },
];
const stageOptions = [
  { value: "stage1", label: "Startup Builder" },
  { value: "stage2", label: "Startup Builder 1" },
  { value: "stage3", label: "Startup Builder 2" },
];

type OptionType = { value: string; label: string };

const ProfileEditModal = ({
  userStatus,
  userData,
}: {
  userStatus: OptionType;
  userData: any;
}) => {
  const [status, setStatus] = useState<OptionType | null>(null);
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);

  const modal = useModal();

  const { mutateAsync, isPending } = useAddStatusMutation();

  useEffect(() => {
    if (userStatus) setStatus(userStatus);
  }, [userStatus]);

  const onSubmitHandler = async () => {
    try {
      const res = await mutateAsync({ status: status?.value });
      queryClient.invalidateQueries({ queryKey: ["/statuses/user"] });
      successToast(res.message);
      modal.close();
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const handleOpenInputBox = () => {
    inputRef.current?.click();
  };

  return (
    <Dialog modal={modal.show} onOpenChange={modal.setShow}>
      <DialogTrigger asChild>
        <span
          role="button"
          className="min-w-8 h-8 flex justify-center items-center bg-secondary-dark/40 rounded-full p-1"
        >
          <Pencil size={18} className="text-success-dark" />
        </span>
      </DialogTrigger>
      <DialogContent className=" 2xl:p-[52px] p-8 flex flex-col 2xl:gap-10 gap-6">
        <div className="flex items-center gap-6">
          <input type="file" ref={inputRef} className="hidden" />
          <div
            role="button"
            onClick={handleOpenInputBox}
            className="2xl:min-w-24 min-w-20  2xl:h-24 h-20 relative"
          >
            <Avatar
              image={LogoAvatar}
              className="2xl:min-w-24 min-w-20  2xl:h-24 h-20"
            />
            <div className="2xl:w-10 2xl:h-10 w-8 h-8 flex justify-center items-center  rounded-full bg-background absolute bottom-0 right-0">
              <Camera className="text-success-dark" />
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="selectStatus">Status</Label>
            <Select>
              <SelectTrigger id="selectStatus">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="bg-info-light rounded  2xl:p-5 p-4  flex flex-col gap-6">
          <h6 className="text-info text-lg font-medium">Mentor</h6>
          <FloatingInput
            className="bg-transparent"
            type="text"
            value={`${userData?.firstName}  ${userData?.lastName}`}
            label="Full name"
            readOnly
          />
          <FloatingInput
            className="bg-transparent"
            type="email"
            value={userData?.email}
            label="Email"
            readOnly
          />
          <div className="pb-4">
            <Label htmlFor="selectStage">Entrepreneurial stage</Label>
            <Select>
              <SelectTrigger id="selectStage" className="bg-transparent">
                <SelectValue placeholder="Select Stage" />
              </SelectTrigger>
              <SelectContent>
                {stageOptions.map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 2xl:mt-10 mt-6">
          <DialogClose asChild>
            <Button disabled={isPending} variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="w-full"
            disabled={isPending}
            onClick={onSubmitHandler}
          >
            Update
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProfileEditModal;
