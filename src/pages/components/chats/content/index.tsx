import { useEffect, useRef } from "react";
import { TextMessage } from "./text-message";
import { useAppParams } from "@/utils/hooks";
import { useGetMessagesByChatId } from "@/api/hooks/messages/messages";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NoMessages } from "./no-messages";
import { useMessagesStore } from "@/store/hooks";

function checkElementOverflow(element: HTMLDivElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export const ChatsContent = () => {
  const { id = "" } = useAppParams();
  const { data } = useGetMessagesByChatId(id);
  const { getChat, setChat } = useMessagesStore();

  const chat = getChat();

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data) {
      setChat(data);
    }
  }, [data]);

  useEffect(() => {
    const container = contentRef.current;

    if (container) {
      const isOverflown = checkElementOverflow(container);
      if (!isOverflown) container.classList.add("justify-end");
      else if (container.scrollTop == 0) {
        const scrollHeight = container.scrollHeight;
        container.scrollTo({
          top: scrollHeight,
        });
      }
    }
  }, []);

  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getMessageApi(id);
  //       setData(result.data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };

  //   if (id) {
  //     fetchData();
  //   }
  // }, [id]);

  // const { expert } = useParams<{
  //   description?: string;
  //   expert: keyof typeof expertImages;
  // }>();

  // const avatarImage = expertImages[expert!];

  return (
    <ScrollArea className="px-3 h-full">
      <div
        ref={contentRef}
        className="flex-1 flex flex-col px-5 py-2 overflow-y-auto h-auto"
      >
        {chat?.length === 0 && <NoMessages />}
        {chat?.map((message: any, index: string) => (
          <TextMessage
            message={message}
            index={index}
            position={message.sender ? "right" : "left"}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
