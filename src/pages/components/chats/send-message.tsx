// import { cn, errorToast } from "@/utils";
// import { FORM_MODE } from "@/utils/constants";
// import { useAppParams } from "@/utils/hooks";
// import { postMessagesInitialValues } from "@/utils/initial-values";
// import { Paperclip, Send, SmilePlus } from "lucide-react";
// import { Controller, useForm } from "react-hook-form";
// import { useHookstate } from "@hookstate/core";
// import { chatUserDataHook } from "@/store";
// import {
//   CHAT_MESSAGES_QUERY_KEY,
//   usePostMessages,
// } from "@/api/hooks/dashboard/messages";
// import { useQueryClient } from "@tanstack/react-query";
// import { useRef } from "react";
// import { useAuth } from "@/utils/hooks";
// import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
// import socket from "@/lib/socket.io";
// import { useMessagesStore } from "@/store/hooks";

// export const SendMessageBox = () => {
//   const postMessage = usePostMessages();
//   const chatUser = useHookstate(chatUserDataHook);
//   const { id: chatId } = useAppParams();
//   const receiverUser = chatUser.get();
//   const queryClient = useQueryClient();
//   const auth = useAuth();
//   const getChatUser = chatUser.get();
//   const textAreaRef = useRef<HTMLDivElement>(null);
//   const { pushMessage } = useMessagesStore()
//   const {
//     control,
//     handleSubmit,
//     getFieldState,
//     reset: resetForm,

//   } = useForm({
//     mode: FORM_MODE,
//     defaultValues: postMessagesInitialValues,
//   });
//   const onSubmitMessage = async (values: typeof postMessagesInitialValues) => {
//     if (!values.content) return;
//     const postData = {
//       senderId: auth?.user._id,
//       receiverId: getChatUser.id ?? "",
//       content: values.content,
//     };
//     try {
//       socket.emit(SOCKET_ENUMS.POST_MESSAGE, postData);
//       resetForm(postMessagesInitialValues);
//       pushMessage({
//         ...postData,
//         position: "right",
//         createdAt: new Date(),
//       });
//     try {
//       const postData = {
//         receiverId: receiverUser.id ?? "",
//         chatId: chatId,
//         content: values.content,
//       };

//       await postMessage.mutateAsync(postData);

//       resetForm({
//         content: "",
//         receiverId: "",
//       });

//       if (textAreaRef.current) textAreaRef.current.textContent = "";
//       queryClient.invalidateQueries({
//         queryKey: [CHAT_MESSAGES_QUERY_KEY],
//       });
//     } catch (error: any) {
//       errorToast(error.message);
//     }
//   };
//   return (
//     <form
//       className="flex items-center  gap-3 w-full"
//       onSubmit={handleSubmit(onSubmitMessage)}
//     >
//       <button className="border-none bg-none cursor-pointer">
//         <Paperclip size={20} />
//       </button>
//       <div className="w-full relative flex items-top p-1 border border-muted-foreground rounded py-2">
//         <Controller
//           name="content"
//           control={control}
//           render={({ field }) => (
//             <>
//               <div
//                 ref={textAreaRef}
//                 className="peer pl-4 w-full bg-card outline-none max-h-48 overflow-auto custom-scrollbar-warning resize-none"
//                 onInput={(e) => field.onChange(e.currentTarget.innerText)}
//                 onBlur={field.onBlur}
//                 contentEditable
//               />
//               <span
//                 className={cn(
//                   "absolute top-2 ms-4 pointer-events-none text-muted-foreground",
//                   field.value && "hidden"
//                 )}
//               >
//                 Type your message...
//               </span>
//             </>
//           )}
//         />
//       </div>
//       <button type="button" className="border-none bg-none cursor-pointer">
//         <SmilePlus size={20} />
//       </button>
//       <button
//         className="border py-2  px-3 border-border flex justify-center items-center rounded-sm bg-secondary-dark"
//         type="submit"
//       >
//         <Send size={24} />
//       </button>
//     </form>
//   );
// };
// }

import { cn, errorToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAppParams } from "@/utils/hooks";
import { postMessagesInitialValues } from "@/utils/initial-values";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useHookstate } from "@hookstate/core";
import { chatUserDataHook } from "@/store";
import { useRef, useState } from "react";
import { useAuth } from "@/utils/hooks";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
import socket from "@/lib/socket.io";
import { useMessagesStore } from "@/store/hooks";
import EmojiMessage from "./content/emoji-message";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import FileMessage from "./content/file-message";

export const SendMessageBox = () => {
  const chatUser = useHookstate(chatUserDataHook);
  const { id: chatId } = useAppParams();
  const receiverUser = chatUser.get();
  const auth = useAuth();
  const textAreaRef = useRef<HTMLDivElement>(null);
  const { pushMessage } = useMessagesStore();
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
    getValues,
  } = useForm({
    mode: FORM_MODE,
    defaultValues: postMessagesInitialValues,
  });

  console.log("attachedFile", attachedFile);

  const onSubmitMessage = async (values: typeof postMessagesInitialValues) => {
    if (!values.content) return;

    const postData = {
      senderId: auth?.user.id,
      receiverId: receiverUser.id ?? "",
      content: values.content,
      chatId,
      file: attachedFile,
    };

    try {
      socket.emit(SOCKET_ENUMS.POST_MESSAGE, JSON.stringify(postData));
      pushMessage({
        ...postData,
        position: "right",
        createdAt: new Date(),
      });

      resetForm(postMessagesInitialValues);
      if (textAreaRef.current) {
        textAreaRef.current.textContent = "";
      }
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  const handleFileChange = (file: File) => {
    setAttachedFile(file);
  };
  const addEmoji = (emoji: any) => {
    const values = getValues();
    setValue("content", values.content + emoji.native);
    if (textAreaRef.current) {
      textAreaRef.current.textContent = values.content + emoji.native;
    }
  };

  return (
    <form
      className="flex items-center gap-3 w-full"
      onSubmit={handleSubmit(onSubmitMessage)}
    >
      <TooltipProvider>
        <Tooltip delayDuration={150}>
          <TooltipTrigger asChild>
            <div>
              <Paperclip size={26} />
            </div>
          </TooltipTrigger>
          <TooltipContent className="rounded-sm w-auto p-4">
            <FileMessage
              onFileSelect={handleFileChange}
              senderId={auth?.user.id}
              receiverId={receiverUser.id ?? ""}
              chatId={chatId}
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="w-full relative flex items-top p-1 border border-muted-foreground rounded py-2">
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <>
              <div
                ref={textAreaRef}
                className="peer pl-4 w-full bg-card outline-none max-h-48 overflow-auto custom-scrollbar-warning resize-none"
                onInput={(e) => field.onChange(e.currentTarget.innerText)}
                onBlur={field.onBlur}
                contentEditable
              />
              <span
                className={cn(
                  "absolute top-2 ms-4 pointer-events-none text-muted-foreground",
                  field.value && "hidden"
                )}
              >
                Type your message...
              </span>
            </>
          )}
        />
      </div>

      <TooltipProvider>
        <Tooltip delayDuration={150}>
          <TooltipTrigger asChild>
            <SmilePlus size={32} />
          </TooltipTrigger>
          <TooltipContent className="rounded-sm min-w-[200px] p-4 relative">
            <EmojiMessage addEmoji={addEmoji} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <button
        className="border py-2 px-3 border-border flex justify-center items-center rounded-sm bg-secondary-dark"
        type="submit"
      >
        <Send size={24} />
      </button>
    </form>
  );
};
