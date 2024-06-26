import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { CheckCheck } from "lucide-react";

export const LeftMessage = ({ message, index, position }: any) => {

  const container = position === "left" ? "justify-start" : "justify-end";
  const background = position === "left" ? "bg-muted" : "bg-primary";
  const check = position === "left" ? "none" : "d-flex";
  
  return (
    <div className={`flex  ${container}`} key={index}>
      <div className="flex gap-2 items-end mb-2   ">
        {message.sender && <Avatar image={userAvatar2Image} />}
        <div
          className={`px-5 py-2  border border-border ${background}`}
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: message.receiver ? "0px" : "20px",
            borderBottomLeftRadius: "0px",
          }}
        >
          <h1>{message.content}</h1>
          <p className=" flex justify-end gap-1 items-center  text-[11px] pt-[2px] text-muted-foreground ">
            {message.time}

            <CheckCheck size={16} className={`text-white ${check} `} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftMessage;
