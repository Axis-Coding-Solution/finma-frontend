import { useEffect, useRef } from "react";
import { TextMessage } from "./text-message";
import { useAppParams, useAppState } from "@/utils/hooks";
import { useGetMessagesByChatId } from "@/api/hooks/messages/messages";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NoMessages } from "./no-messages";
import io from "socket.io-client";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";

function checkElementOverflow(element: HTMLDivElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export const ChatsContent = () => {
  const { id = "" } = useAppParams();

  const { data: messages } = useGetMessagesByChatId(id);

  const socket = io("http://localhost:3000");

  console.log("renders");

  // const [data, setData] = useState(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

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
    <div
      ref={contentRef}
      className="flex-1 flex flex-col px-5 py-2 overflow-y-auto h-full"
    >
      <ScrollArea className="px-3 h-full">
        {messages?.length === 0 && <NoMessages />}
        {messages?.map((message: any, index: string) => (
          <TextMessage
            message={message}
            index={index}
            position={message.sender ? "right" : "left"}
          />
        ))}
      </ScrollArea>
    </div>
  );
};
