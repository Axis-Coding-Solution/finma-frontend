import { useAddStatusMutation } from "@/api/hooks/dashboard";
import { Button } from "@/components/_ui/button";
import { ReactCreatableSelect } from "@/components/_ui/creatable-select";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/_ui/dialog";
import { Label } from "@/components/_ui/label";
import { errorToast, successToast } from "@/utils";
import { useModal } from "@/utils/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { SquarePen } from "lucide-react";
import { useEffect, useState } from "react";

const statusOptions = [
  { label: "💡 Brainstorming Ideas", value: "💡 Brainstorming Ideas" },
  { label: "🔍 Proofing the Concept", value: "🔍 Proofing the Concept" },
  { label: "📅 Updating the Roadmap", value: "📅 Updating the Roadmap" },
  { label: " 🌐 Exploring New Markets", value: " 🌐 Exploring New Markets" },
  { label: "💬 Chatting with Mentors", value: "💬 Chatting with Mentors" },
  { label: "📝 Writing User Stories", value: "📝 Writing User Stories" },
  { label: "🎨 Designing a New XP", value: "🎨 Designing a New XP" },
  { label: "🔧 Building a New Feature", value: "🔧 Building a New Feature" },
  {
    label: "🚧 Building the Infrastructure",
    value: "🚧 Building the Infrastructure",
  },
  { label: "💻 Hard Coding in...", value: "💻 Hard Coding in..." },
  { label: "🛠️ Fixing Bugs", value: "🛠️ Fixing Bugs" },
  { label: "🛡️ Securing the Backend", value: "🛡️ Securing the Backend" },
  { label: "🚀 Preparing for Launch", value: "🚀 Preparing for Launch" },
  { label: "🎯 Hitting Milestones", value: "🎯 Hitting Milestones" },
  { label: "🛒 Enhancing Checkout Flow", value: "🛒 Enhancing Checkout Flow" },
  { label: "📣 Spreading the Word", value: "📣 Spreading the Word" },
  { label: "👥 Networking Away", value: "👥 Networking Away" },
  { label: "🤝 Making Deals", value: "🤝 Making Deals" },
  { label: "🎤 Interviewing Customers", value: "🎤 Interviewing Customers" },
  { label: "📈 Analyzing User Data", value: "📈 Analyzing User Data" },
  { label: "📅 Planning the Roadmap", value: "📅 Planning the Roadmap" },
];

type OptionType = { value: string; label: string };

const StatusModal = ({ userStatus }: { userStatus: OptionType }) => {
  const [status, setStatus] = useState<OptionType | null>(null);
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
      errorToast(error.messsage);
    }
  };

  return (
    <Dialog modal={modal.show} onOpenChange={modal.setShow}>
      <DialogTrigger asChild>
        <span role="button">
          <SquarePen size={14} className="text-muted-foreground" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Add your status</DialogTitle>
        </DialogHeader>

        <div>
          <Label>Status</Label>
          <ReactCreatableSelect
            options={statusOptions}
            value={status}
            onChange={(e: any) => setStatus(e)}
            placeholder="Select from list or type a new one"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <DialogClose asChild>
            <Button disabled={isPending} variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="default"
            className="w-full"
            disabled={isPending}
            onClick={onSubmitHandler}
          >
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default StatusModal;
