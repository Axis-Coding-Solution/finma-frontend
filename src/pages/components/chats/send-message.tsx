import { Paperclip, Send, SmilePlus } from "lucide-react";

export const SendMessageBox = () => {
  return (
    <div className="flex sticky bottom-0 left-0 gap-1  w-full bg-background">
      <div className="flex items-center border border-gray-300 rounded-sm p-2 w-full">
        <button className="border-none bg-none cursor-pointer">
          <Paperclip size={20} />{" "}
        </button>
        <input
          type="text"
          placeholder="Write a Message"
          className="flex-1 border-none ml-2 outline-none"
        />
        <button className="border-none bg-none cursor-pointer">
          <SmilePlus size={20} />
        </button>
      </div>

      <div className="border py-1  px-2 border-border flex justify-center items-center rounded-sm bg-primary">
        <Send size={24} />
      </div>
    </div>
  );
};
