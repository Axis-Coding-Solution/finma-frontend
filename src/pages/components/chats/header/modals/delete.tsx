import { Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/utils/hooks";
import { GET_CHATS_QUERY_KEY, useDeleteChat } from "@/api/hooks/dashboard";
import { useQueryClient } from "@tanstack/react-query";
import { errorToast, successToast } from "@/utils";
import { useNavigate, useParams } from "react-router-dom";

export const DeleteChatModal = () => {
  const { id: chatId } = useParams();
  const navigate = useNavigate();
  const modal = useModal();
  const { mutateAsync, isPending } = useDeleteChat();
  const queryClient = useQueryClient();
  async function deleteChat(id: string) {
    try {
      const response = await mutateAsync(id);
      queryClient.invalidateQueries({ queryKey: [GET_CHATS_QUERY_KEY] });
      modal.close();
      successToast(response?.message);
      navigate("/dashboard/chats", { replace: true });
    } catch (error: any) {
      errorToast(error);
    }
  }
  return (
    <Dialog modal={modal.show} onOpenChange={modal.setShow}>
      <DialogTrigger asChild>
        <div className="flex justify-start items-center gap-2 cursor-pointer px-2 mt-2 pb-2">
          <div className=" ">
            <Trash2 size={14} />
          </div>
          <h1 className="text-sm">Delete Chat</h1>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">
            Delete Selected massage(s)
          </DialogTitle>
        </DialogHeader>
        {/* <div className=""> */}
        {/* <div className="flex items-center space-x-2">
            <Checkbox id="deleteMe" />
            <label
              htmlFor="deleteMe"
              className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Delete for me
            </label>
          </div> */}
        {/* <div className="flex items-center space-x-2"> */}
        {/* <Checkbox id="deleteOther" /> */}
        <label
          htmlFor="deleteOther"
          className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Are you sure you want to Delete?
        </label>
        {/* </div> */}
        {/* </div> */}
        <div className="flex items-center justify-between gap-4">
          <Button disabled={isPending} variant="outline" className="w-full">
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => deleteChat(chatId as any)}
          >
            <Trash size="20" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
