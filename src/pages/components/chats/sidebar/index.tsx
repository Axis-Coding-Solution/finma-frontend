import { Button } from "@/components/ui/button";
import { ChatContactItem } from "./contact-item";
import { useGetChats } from "@/api/hooks/dashboard";
import { EmptyMessage } from "@/assets/icons/empty-message";
import { ScrollArea } from "@/components/_ui/scroll-area";
import { useAppParams } from "@/utils/hooks";
import { SearchInput } from "@/components/ui/search-input";

export const ChatsSidebar = ({ onLinkClick }: { onLinkClick: any }) => {
  const { id: chatId } = useAppParams();
  const { data = {}, isPending } = useGetChats();
  const { data: chats } = data;

  return (
    <div className="2xl:max-w-96 md:max-w-72 w-full 2xl:p-4 p-2 rounded bg-secondary">
      <div className=" w-full flex flex-col gap-5 bg-white 2xl:p-4 p-2 rounded h-full">
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
          <SearchInput />
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
