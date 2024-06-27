import { postMessageApi } from "@/api/http/messages";
import { errorToast } from "@/utils";
import { FORM_MODE } from "@/utils/constants";
import { useAppNavigation, useAppParams } from "@/utils/hooks";
import { postMessagesInitialValues } from "@/utils/initial-values";
import { useMutation } from "@tanstack/react-query";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { NavigateFunction } from "react-router-dom";

export const SendMessageBox = () => {
  const { id } = useAppParams();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: postMessagesInitialValues,
    // resolver: yupResolver(userQuestionarySchema),
  });

  const mutation = useMutation({
    mutationFn: postMessageApi,
  });

  const onSubmitMessage = async (values: typeof postMessagesInitialValues) => {
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

  console.log("🚀 ~ SendMessageBox ~ errors:", errors);

  return (
    <form onSubmit={handleSubmit(onSubmitMessage)}>
      <div className="flex sticky bottom-0 left-0 gap-1  w-full bg-background">
        <div className="flex items-center border border-gray-300 rounded-sm p-2 w-full">
          <button className="border-none bg-none cursor-pointer">
            <Paperclip size={20} />{" "}
          </button>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Write a Message"
                className="flex-1 border-none ml-2 outline-none"
              />
            )}
          />
          <button className="border-none bg-none cursor-pointer">
            <SmilePlus size={20} />
          </button>
        </div>

        <button className="border py-1  px-2 border-border flex justify-center items-center rounded-sm bg-primary">
          <Send size={24} />
        </button>
      </div>
    </form>
  );
};
