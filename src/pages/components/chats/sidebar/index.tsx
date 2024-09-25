import { Button } from "@/components/ui/button";
import { ChatContactItem } from "./contact-item";
import { useGetChats } from "@/api/hooks/dashboard";
import { EmptyMessage } from "@/assets/icons/empty-message";
import { ScrollArea } from "@/components/_ui/scroll-area";
import { SearchBar } from "../../common";

export const ChatsSidebar = () => {
  const { data = {}, isPending } = useGetChats();
  console.log("chats Data",data)
  const { data: chats } = data;

  return (
    <div className="max-w-72 w-full flex flex-col gap-5 bg-white 2xl:p-6 p-4 rounded">
      <div className="flex items-center gap-2">
        <Button variant="dark" size="sm" rounded>
          All
        </Button>
        <Button variant="outline" size="sm" rounded>
          Innovators
        </Button>
        <Button variant="outline" size="sm" rounded>
          Experts
        </Button>
      </div>
      <div>
        <SearchBar />
      </div>
      {/* <Input type="text" /> */}
      <div className="overflow-y-auto  bg-accent custom-scrollbar-secondary">
        <ScrollArea className="overflow-y-auto  px-1 ">
          {!isPending &&
            chats?.map((item: any, index: number) => (
              <ChatContactItem item={item} key={index} />
            ))}
          {isPending ||
            (!chats && (
              <div className="inline-flex flex-col gap-5 items-center justify-center w-full">
                <EmptyMessage />
                <span className="text-sm text-center">
                  Start chatting with innovators and your chats will appear here
                </span>
                <Button>Browse the Innovators</Button>
              </div>
            ))}
        </ScrollArea>
      </div>
    </div>
  );
};
