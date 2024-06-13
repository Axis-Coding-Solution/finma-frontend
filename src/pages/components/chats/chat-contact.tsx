import { Avatar } from "@/components/ui/avatar";
import { Check } from "lucide-react";

type PropsTypes = {
  avatar: string;
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
          <Avatar image={avatar} size="md" />
          <div>
            <h6 className="text-foreground text-base font-semibold">{name}</h6>
            <span className="text-muted-foreground text-sm font-normal">
              {designation}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Check size="20" className="text-success" />
          <span>{lastReceived}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-muted-foreground text-base">{message}</p>
        <span className="w-8 h-8 flex items-center justify-center rounded-full text-white text-sm bg-success">
          {newCount}
        </span>
      </div>
    </div>
  );
};
