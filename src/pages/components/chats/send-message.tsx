import { cn, errorToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAppParams } from "@/utils/hooks";
import { postMessagesInitialValues } from "@/utils/initial-values";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useHookstate } from "@hookstate/core";
import { chatUserDataHook } from "@/store";
import { useEffect, useRef, useState } from "react";
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
  const [isSending, setIsSending] = useState(false);
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
  const convertFileToBase64 = (attachedFile: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString().split(",")[1];
        if (base64String) {
          resolve(base64String);
        } else {
          reject(new Error("Failed to convert file to base64."));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(attachedFile);
    });
  };

  // const onSubmitMessage = async (values :any) => {
  //   if (!values.content && !attachedFile) return;
  //   if (isSending) return;
  //   setIsSending(true);

  //   try {
  //     let base64File = null;
  //     if (attachedFile) {
  //       base64File = await convertFileToBase64(attachedFile);
  //     }
  //     const postData = {
  //       senderId: auth?.user.id,
  //       receiverId: receiverUser.id ?? "",
  //       content: values.content,
  //       chatId,
  //       file: {
  //         buffer: base64File,
  //         fileName: attachedFile?.name,
  //         mimetype: attachedFile?.type,
  //       },
  //     };
  //     socket.emit(SOCKET_ENUMS.POST_MESSAGE, JSON.stringify(postData));

  //     resetForm(postMessagesInitialValues);
  //     if (textAreaRef.current) {
  //       textAreaRef.current.textContent = "";
  //     }
  //     setAttachedFile(null);
  //   } catch (error : any) {
  //     errorToast(error.message);
  //   } finally {
  //     setIsSending(false);
  //   }
  // };
  const onSubmitMessage = async (values: any) => {
    console.log("values", values);
    if (isSending || (!values.content && !attachedFile)) return;
    setIsSending(true);
    try {
      let base64File = null;
      if (attachedFile) {
        base64File = await convertFileToBase64(attachedFile);
      }
      const postData = {
        senderId: auth?.user.id,
        receiverId: receiverUser.id ?? "",
        content: values.content,
        chatId,
        file: {
          buffer: base64File,
          fileName: attachedFile?.name,
          mimetype: attachedFile?.type,
        },
      };
      console.log("Sending message:", postData);
      socket.emit(SOCKET_ENUMS.POST_MESSAGE, JSON.stringify(postData));
      resetForm(postMessagesInitialValues);
      if (textAreaRef.current) {
        textAreaRef.current.textContent = "";
      }
      setAttachedFile(null);
    } catch (error: any) {
      errorToast(error.message);
    } finally {
      setIsSending(false);
    }
  };
  const handleFileChange = (file: File) => {
    setAttachedFile(file);

    let previewHTML = "";

    if (file.type.startsWith("image/")) {
      previewHTML = `
        <div id="text-area-image-preview" style="position: relative; width: 30%; height: auto;">
          <img 
            src="${URL.createObjectURL(file)}" 
            style="width: 100%; height: 100%; object-fit: cover;" 
            alt="selected_image" 
          />
          <button 
            id="remove-file-btn" 
            style="position: absolute; top: 5px; right: 5px; background: black; color: white; border: none; border-radius: 50%; cursor: pointer; padding: 2px 6px;"
          >
            &times;
          </button>
        </div>
      `;
    } else if (file.type.startsWith("video/")) {
      previewHTML = `
        <div id="text-area-video-preview" style="position: relative; width: 30%; height: auto;">
          <video 
            src="${URL.createObjectURL(file)}" 
            style="width:100%;height:50%" 
          ></video>
          <button 
            id="remove-file-btn" 
            style="position: absolute; top: 5px; right: 5px; background: black; color: white; border: none; border-radius: 50%; cursor: pointer; padding: 2px 6px;"
          >
            &times;
          </button>
        </div>
      `;
    } else if (file.type.startsWith("application/")) {
      previewHTML = `
        <div id="text-area-doc-preview" style="position: relative; width:50%; height: auto; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
          <span>${file.name}</span>
          <button 
            id="remove-file-btn" 
            style="position: absolute; top: 5px; right: 5px; background:black; color: white; border: none; border-radius: 50%; cursor: pointer; padding: 2px 6px;"
          >
            &times;
          </button>
        </div>
      `;
    }

    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = previewHTML;
      const removeButton = textAreaRef.current.querySelector("button");
      if (removeButton) {
        removeButton.addEventListener("click", () => {
          removeAttachedFile();
        });
      }
    }
  };

  const removeAttachedFile = () => {
    setAttachedFile(null);
    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = "";
    }
  };

  const addEmoji = (emoji: any) => {
    const values = getValues();
    setValue("content", values.content + emoji.native);
    if (textAreaRef.current) {
      textAreaRef.current.textContent = values.content + emoji.native;
    }
  };
  useEffect(() => {
    const handleReceiveMessage = (data: any) => {
      console.log("Received data:", data);
      const obj = {
        ...data,
        position: "right",
      };
      pushMessage(obj);
    };

    socket.on(SOCKET_ENUMS.CU_RECEIVE_MESSAGE, handleReceiveMessage);

    return () => {
      socket.off(SOCKET_ENUMS.CU_RECEIVE_MESSAGE, handleReceiveMessage);
    };
  }, [pushMessage]);

  return (
    <form
      className="flex items-center gap-3 w-full"
      onSubmit={handleSubmit(onSubmitMessage)}
    >
      <TooltipProvider>
        <Tooltip delayDuration={150}>
          <TooltipTrigger asChild>
            <div>
              <Paperclip size={26} onClick={(e) => e.preventDefault()} />
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
                  (field.value || attachedFile) && "hidden"
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
        disabled={isSending}
      >
        {/* <Send size={24} /> */}
        {isSending ? "Sending..." : <Send size={24} />}
      </button>
    </form>
  );
};
