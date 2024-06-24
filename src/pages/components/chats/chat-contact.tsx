import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

type PropsTypes = {
  avatar: any;
  name: string;
  designation: string;
  message: string;
  lastReceived: string;
  newCount?: number;
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
    <div className="px-4 py-2 cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="w-1/2 flex items-center gap-4 truncate">
          <Avatar image={avatar} size="md" />
          <div>
            <h6 className="text-foreground 2xl:text-xl text-base font-semibold">
              {name}
            </h6>
            <span className="text-muted-foreground 2xl:text-base text-xs whitespace-nowrap font-normal">
              {designation}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Check size="20" className="text-success" />
          <span className="whitespace-nowrap 2xl:text-base text-xs">
            {lastReceived}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-muted-foreground 2xl:text-lg text-sm w-[80%]">
          {message}
        </p>
        {newCount && <Badge variant="success">{newCount}</Badge>}
      </div>
    </div>
  );
};
