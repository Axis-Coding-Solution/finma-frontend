import { Button } from "@/components/ui/button";
import { ChatContactItem } from "./contact-item";
import { useGetChats } from "@/api/hooks/dashboard";
import { EmptyMessage } from "@/assets/icons/empty-message";
import { ScrollArea } from "@/components/_ui/scroll-area";
import { useAppParams } from "@/utils/hooks";
import { Search } from "lucide-react";
import { cn } from "@/utils";
import { useState } from "react";

const types = [
  { label: "All", value: "" },
  { label: "Innovators", value: "innovator" },
  { label: "Experts", value: "expert" },
];
export const ChatsSidebar = ({ onLinkClick }: { onLinkClick: any }) => {
  const [filter, setFilter] = useState({type: "", search: ""});
  const { id: chatId } = useAppParams();
  const { data = {}, isPending } = useGetChats(filter);
  const { data: chats } = data;

  return (
    <div className="2xl:max-w-96 md:max-w-72 w-full 2xl:p-4 p-2 rounded bg-secondary">
      <div className=" w-full flex flex-col gap-5 bg-white 2xl:p-4 p-2 rounded h-full">
        <div className="flex items-center gap-2">
          {types.map((item) => (
            <Button
              variant={item.value == filter.type ? "dark" : "outline"}
              size="sm"
              rounded
              onClick={() => setFilter((prev)=> ({...prev, type: item.value }))}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div>
          <div className="relative flex items-center">
            <input
              type="search"
              placeholder="Search"
              value={filter.search}
              onChange={(e) => setFilter((prev) => ({ ...prev, search: e.target.value }))}
              className={cn(
                "transition peer flex w-auto rounded-md ring-1 ring-[#4D4D4D] bg-transparent text-[#6a6a6a] pl-10 md:pr-5 py-2  pr-3 file:bg-transparent md:text-sm text-xs file:text-sm file:font-medium placeholder:text-[#6a6a6a] focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed  "
              )}
            />
            <Search
              size={16}
              className="transition peer-focus:text-ring text-[#6A6A6A] absolute left-2"
            />
          </div>
        </div>
        {/* <Input type="text" /> */}
        <div className="overflow-y-auto bg-accent custom-scrollbar-secondary">
          <ScrollArea className="overflow-y-auto">
            {!isPending &&
              chats?.map((item: any, index: number) => (
                <ChatContactItem
                  item={item}
                  key={index}
                  chatId={chatId}
                  onLinkClick={onLinkClick}
                />
              ))}
            {isPending ||
              (!chats && (
                <div className="inline-flex flex-col gap-5 items-center justify-center w-full">
                  <EmptyMessage />
                  <span className="text-sm text-center">
                    Start chatting with innovators and your chats will appear
                    here
                  </span>
                  <Button>Browse the Innovators</Button>
                </div>
              ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
