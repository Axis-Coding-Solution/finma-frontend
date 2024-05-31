import { Paperclip, Send, SmilePlus } from "lucide-react";

export const SendMessageBox = () => {
  return (
    <div className="flex gap-1 pb-10">
      <div className="flex justify-between w-[60%] rounded-sm h-10 px-3 py-2 border border-border">
        <div className="flex gap-2 ">
          <Paperclip size={20} />
          <h1>Write a Message</h1>
        </div>
        <div>
          <SmilePlus size={20} />
        </div>
      </div>
      <div className="border py-1  px-2 border-border flex justify-center items-center rounded-sm bg-primary">
        <Send size={24} />
      </div>
    </div>
  );
};
