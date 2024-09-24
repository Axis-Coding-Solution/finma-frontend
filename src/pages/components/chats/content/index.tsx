import { useEffect, useRef } from "react";
import { TextMessage } from "./text-message";
import { useAppParams } from "@/utils/hooks";
import { useGetMessagesByChatId } from "@/api/hooks/messages/messages";
import { ScrollArea } from "@/components/_ui/scroll-area";
import { NoMessages } from "./no-messages";
import { useMessagesStore } from "@/store/hooks";
import socket from "@/lib/socket.io";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";

function checkElementOverflow(element: HTMLDivElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export const ChatsContent = () => {
  const { id = "" } = useAppParams();
  const { data } = useGetMessagesByChatId(id);
  const { getChat, setChat, pushMessage } = useMessagesStore();

  const chat = getChat();

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data) {
      setChat(data);
    }
  }, [data]);

  useEffect(() => {
    socket.on(SOCKET_ENUMS.RECEIVE_MESSAGE, (data) => {
      const obj = {
        ...data,
        position: "right",
      };
      pushMessage(obj);
    });
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
        {chat?.map((message: any, index: number) => (
          <TextMessage
            message={message}
            index={index}
            position={message.position == "right" ? "right" : "left"}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
