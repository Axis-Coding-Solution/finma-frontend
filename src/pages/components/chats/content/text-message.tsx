import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/_ui/avatar";
import { CheckCheck, Check } from "lucide-react";

export const TextMessage = ({ message, index, position }: any) => {
  const container = position === "right" ? "justify-end" : "justify-start";
  const background = position === "right" ? "bg-secondary-dark" : "bg-muted";
  const check = position === "right" ? "flex" : "hidden";
  const checkColor =
    message.readAt && message.receivedAt
      ? "text-info"
      : " text-muted-foreground";

  return (
    <div className={`w-full flex  ${container}`}>
      <div className="max-w-[70%]" key={index}>
        <div className="flex gap-2 items-end mb-2">
          {message.sender && <Avatar image={userAvatar2Image} />}
          <div
            className={`px-5 py-2  border border-border ${background}`}
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: message.receiver ? "0px" : "20px",
              borderBottomLeftRadius: message.sender ? "0px" : "10px",
            }}
          >
            <h1>{message.content}</h1>
            <p className=" flex justify-end gap-1 items-center  text-[11px] pt-[2px] text-muted-foreground ">
              {message.time}
              {message.readAt ? (
                <CheckCheck size={17} className={` ${checkColor} ${check} `} />
              ) : (
                <Check
                  size={16}
                  className={` text-muted-foreground ${check} `}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
