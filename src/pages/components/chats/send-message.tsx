import MessageBoxIcon from "@/assets/images/image-box-icon.png";
import MessageBoxEmoji from "@/assets/images/message-icon-emoji.png";
import SendMessageIcon from "@/assets/images/send-message-icon.png";

export const SendMessageBox = () => {
  return (

    <div className="flex gap-1 pb-10">
    <div className="flex justify-between w-[60%] rounded-sm h-10 px-3 py-2 border border-border">
      <div className="flex gap-2 ">
        <img src={MessageBoxIcon} className="w-6 h-6" />

        <h1>Write a Message</h1>
      </div>
      <div>
        <img src={MessageBoxEmoji} className="w-6 h-6" />
      </div>
    </div>
    <div className="border p-2 border-border flex justify-center items-center rounded-sm bg-primary">

      <img src={SendMessageIcon} className="w-6 h-6"/>
    </div>
    </div>
  );
};
