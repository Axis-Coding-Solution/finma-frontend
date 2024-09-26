import { errorToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAppParams, useAuth } from "@/utils/hooks";
import { postMessagesInitialValues } from "@/utils/initial-values";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
import { useMessagesStore } from "@/store/hooks";
import socket from "@/lib/socket.io";
import { useHookstate } from "@hookstate/core";
import { chatUserDataHook } from "@/store";
import {
  CHAT_MESSAGES_QUERY_KEY,
  usePostMessages,
} from "@/api/hooks/dashboard/messages";
import { useQueryClient } from "@tanstack/react-query";

export const SendMessageBox = () => {
  const postMessage = usePostMessages();
  const chatUser = useHookstate(chatUserDataHook);
  const { id: chatId } = useAppParams();
  const receiverUser = chatUser.get();
  const queryClient = useQueryClient();
  // const auth = useAuth();
  // const { pushMessage } = useMessagesStore();

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    mode: FORM_MODE,
    defaultValues: postMessagesInitialValues,
  });

  const onSubmitMessage = async (values: typeof postMessagesInitialValues) => {
    // if (!values.content) return;
    // const postData = {
    //   senderId: auth?.user._id,
    //   receiverId: getChatUser.id ?? "",
    //   content: values.content,
    // };
    // try {
    //   socket.emit(SOCKET_ENUMS.POST_MESSAGE, postData);
    //   reset(postMessagesInitialValues);
    //   pushMessage({
    //     ...postData,
    //     position: "right",
    //     createdAt: new Date(),
    //   });
    try {
      const postData = {
        receiverId: receiverUser.id ?? "",
        chatId: chatId,
        content: values.content,
      };

      const res = await postMessage.mutateAsync(postData);

      console.log(res);
      queryClient.invalidateQueries({ queryKey: [CHAT_MESSAGES_QUERY_KEY] });
      resetForm();
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
          render={({ field }) => (
            <div
              ref={field.ref}
              className="w-full bg-card outline-none  max-h-48 overflow-auto custom-scrollbar-warning resize-none"
              onInput={(e) => field.onChange(e.currentTarget.innerText)}
              onBlur={field.onBlur}
              contentEditable
            />
          )}
        />
      </div>
      <button className="border-none bg-none cursor-pointer">
        <SmilePlus size={20} />
      </button>
      <button
        className="border py-2  px-3 border-border flex justify-center items-center rounded-sm bg-secondary-dark"
        type="submit"
      >
        <Send size={24} />
      </button>
    </form>
  );
};
