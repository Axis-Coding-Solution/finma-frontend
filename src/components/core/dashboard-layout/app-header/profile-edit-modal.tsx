import { useAddStatusMutation } from "@/api/hooks/dashboard";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/_ui/dialog";
import { Button, FloatingInput, Label } from "@/components/ui";
import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileEditModalProps {
  userStatus: OptionType;
  userData: UserData;
}

const ProfileEditModal = ({
  userStatus,
  userData,
}: ProfileEditModalProps) => {
  const [status, setStatus] = useState<OptionType | null>(null);
  const [stage, setStage] = useState<OptionType | null>(null);
  const queryClient = useQueryClient();
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
      <DialogContent className="2xl:p-[52px] p-8 flex flex-col 2xl:gap-10 gap-6">
        <div className="flex items-center gap-6">
     
          <div className="w-full">
            <Label htmlFor="selectStatus">Status</Label>
            <Select value={status?.value} onValueChange={(value) => setStatus(statusOptions.find(option => option.value === value) || null)}>
              <SelectTrigger id="selectStatus">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="bg-info-light rounded 2xl:p-5 p-4 flex flex-col gap-6">
          <h6 className="text-info text-lg font-medium">Mentor</h6>
          <FloatingInput
            className="bg-transparent"
            type="text"
            value={`${userData.firstName} ${userData.lastName}`}
            label="Full name"
            readOnly
          />
          <FloatingInput
            className="bg-transparent"
            type="email"
            value={userData.email}
            label="Email"
            readOnly
          />
          <div className="pb-4">
            <Label htmlFor="selectStage">Entrepreneurial stage</Label>
            <Select value={stage?.value} onValueChange={(value) => setStage(stageOptions.find(option => option.value === value) || null)}>
              <SelectTrigger id="selectStage" className="bg-transparent">
                <SelectValue placeholder="Select Stage" />
              </SelectTrigger>
              <SelectContent>
                {stageOptions.map((item) => (
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
