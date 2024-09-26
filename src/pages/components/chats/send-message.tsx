import { errorToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAuth } from "@/utils/hooks";
import { postMessagesInitialValues } from "@/utils/initial-values";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
import { useMessagesStore } from "@/store/hooks";
import socket from "@/lib/socket.io";
import { useHookstate } from "@hookstate/core";
import { chatUserDataHook } from "@/store";

export const SendMessageBox = () => {
  const chatUser = useHookstate(chatUserDataHook);
  const getChatUser = chatUser.get();
  const auth = useAuth();
  const { pushMessage } = useMessagesStore();

  const { control, handleSubmit, reset } = useForm({
    mode: FORM_MODE,
    defaultValues: postMessagesInitialValues,
  });

  const onSubmitMessage = async (values: typeof postMessagesInitialValues) => {
    if (!values.content) return;
    const postData = {
      senderId: auth?.user._id,
      receiverId: getChatUser.id ?? "",
      content: values.content,
    };
    try {
      socket.emit(SOCKET_ENUMS.POST_MESSAGE, postData);
      reset(postMessagesInitialValues);
      pushMessage({
        ...postData,
        position: "right",
        createdAt: new Date(),
      });
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  return (
    <form
      className="flex items-center  gap-3 w-full"
      onSubmit={handleSubmit(onSubmitMessage)}
    >
      <button className="border-none bg-none cursor-pointer">
        <Paperclip size={20} />
      </button>
      <div className="border border-muted-foreground pl-4 p-1 py-2 rounded w-full ">
      <Controller
        name="content"
        control={control}
        render={({ field }) => <div className="w-full bg-card outline-none  max-h-48 overflow-auto custom-scrollbar-warning resize-none" contentEditable {...field} />}
      />
      </div>
      <button className="border-none bg-none cursor-pointer" >
        <SmilePlus size={20} />
      </button>
      <button className="border py-2  px-3 border-border flex justify-center items-center rounded-sm bg-secondary-dark" type="submit" >
        <Send size={24} />
      </button>
    </form>
  );
};
