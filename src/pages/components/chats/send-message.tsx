import { postMessageApi } from "@/api/http/messages";
import { Textarea } from "@/components/ui/textarea";
import { errorToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAppParams } from "@/utils/hooks";
import { postMessagesInitialValues } from "@/utils/initial-values";
import { useMutation } from "@tanstack/react-query";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SendMessageBox = () => {
  const { id } = useAppParams();

  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    mode: FORM_MODE,
    defaultValues: postMessagesInitialValues,
  });

  const mutation = useMutation({
    mutationFn: postMessageApi,
  });

  const onSubmitMessage = async (values: typeof postMessagesInitialValues) => {
    if (!values.content) return;
    const postData = {
      receiverId: id ?? "",
      content: values.content,
    };
    try {
      const res = await mutation.mutateAsync(postData);
      console.log("🚀 ~ onSubmitMessage ~ res:", res.data?.chatId);
      navigate(`/dashboard/chats/${res.data?.chatId}`);
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
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <Textarea {...field} placeholder="Write your message" />
        )}
      />
      <button className="border-none bg-none cursor-pointer">
        <SmilePlus size={20} />
      </button>
      <button className="border py-1  px-2 border-border flex justify-center items-center rounded-sm bg-primary">
        <Send size={24} />
      </button>
    </form>
  );
};
