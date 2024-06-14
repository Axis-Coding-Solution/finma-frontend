import { Avatar } from "@/components/ui/avatar";
import { Check } from "lucide-react";

type PropsTypes = {
  avatar:any;
  name: string;
  designation: string;
  message: string;
  lastReceived: string;
  newCount: number;
};
export const ChatContact = ({
  name,
  designation,
  avatar,
  lastReceived,
  message,
  newCount,
}: PropsTypes) => {
  return (
    <div className="px-4 py-2">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* {console.log(avatar)} */}
          <Avatar image={avatar} size="md" />
          <div>
            <h6 className="text-foreground 2xl:text-xl text-base font-semibold">{name}</h6>
            <span className="text-muted-foreground 2xl:text-base text-xs whitespace-nowrap font-normal">
              {designation}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Check size="20" className="text-success" />
          <span className="whitespace-nowrap 2xl:text-base text-xs">{lastReceived}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-muted-foreground 2xl:text-lg text-sm w-[80%]">{message}</p>
        <span className="2xl:w-8 2xl:h-8 w-6 h-6 flex items-center justify-center rounded-full text-white 2xl:text-sm text-xs bg-success">
          {newCount}
        </span>
      </div>
    </div>
  );
};
