import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatContactItem } from "./contact-item";
import { useGetChats } from "@/api/hooks/dashboard";
import { EmptyMessage } from "@/assets/icons/empty-message";

export const ChatsSidebar = () => {
  const { data = {}, isPending } = useGetChats();
  const { data: chats } = data;

  return (
    <div className="h-full flex flex-col gap-5">
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
      <div className="h-full rounded-lg bg-accent py-5 px-3">
        {!isPending &&
          chats?.map((item: any, index: number) => (
            <ChatContactItem item={item} key={index} />
          ))}
        <div className="inline-flex flex-col gap-5 items-center justify-center w-full">
          <EmptyMessage />
          <span className="text-sm text-center">
            Start chatting with innovators and your chats will appear here
          </span>
          <Button variant="default">Browse the Innovators</Button>
        </div>
      </div>
    </div>
  );
};
