import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatContact } from "./chat-contact";
import { useGetChats } from "@/api/hooks/dashboard";
import { EmptyMessage } from "@/assets/icons/empty-message";

export const ChatSidebar = () => {
  const { data } = useGetChats();

  // console.log(data);
  // useEffect(() => {
  //   if (data) {
  //     setId(data.data.map((item) => item._id));
  //   }
  // }, [data]);

  return (
    <div className="px-1 h-full  " >
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
      <div className="mt-4">
        <Input type="text" />
      </div>
      <div className="divide-y divide-border h-full rounded-2xl bg-accent py-4 mt-4">
        {data?.data &&
          data.data.map((item: any, index: number) => (
            <ChatContact item={item} key={index} />
          ))}
        <div className="flex flex-col gap-3 justify-center h-full items-center">
          <EmptyMessage />
          <span className=" w-[232px] text-[14px] text-center ">
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
