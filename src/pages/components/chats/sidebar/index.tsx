import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatContactItem } from "./contact-item";
import { useGetChats } from "@/api/hooks/dashboard";
import { EmptyMessage } from "@/assets/icons/empty-message";

export const ChatsSidebar = () => {
  const { data = {}, isPending } = useGetChats();
  const { data: chats } = data;

  return (
    <div className="sticky left-0 top-0 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="dark" rounded>
          All
        </Button>
        <Button variant="outline" size="sm">
          Experts
        </Button>
        <Button variant="outline" size="sm">
          Innovators
        </Button>
      </div>
      <Input type="text" />
      <div className="divide-y divide-border h-full rounded-lg bg-accent py-2">
        {!isPending &&
          chats?.map((item: any, index: number) => (
            <ChatContactItem item={item} key={index} />
          ))}
        <div className="flex flex-col gap-3 justify-center h-full items-center">
          <EmptyMessage />
          <span className="text-[14px] text-center">
            Start chatting with innovators and your chats will appear here
          </span>
          <Button variant="default" className="mt-4">
            Browse the Innovators
          </Button>
        </div>
      </div>
    </div>
  );
};
