import { useEffect, useRef, useState } from "react";
import { TextMessage } from "./text-message";
import { useAppParams } from "@/utils/hooks";
import { useGetMessagesByChatId } from "@/api/hooks/dashboard/messages";
import { ScrollArea } from "@/components/_ui/scroll-area";
import { NoMessages } from "./no-messages";
import { useMessagesStore } from "@/store/hooks";
import socket from "@/lib/socket.io";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
import { getMessageBYChatIdApi } from "@/api/http";
import { useParams } from "react-router-dom";

function checkElementOverflow(element: HTMLDivElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export const ChatsContent = () => {
  // const [data, setData] = useState();
  const { id = "" } = useAppParams();
  const { data: chatMessages } = useGetMessagesByChatId(id);
  // const { getChat, setChat, pushMessage } = useMessagesStore();

  const contentRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (data) {
  //     setChat(data);
  //   }
  // }, [data]);

  useEffect(() => {
    //   socket.on(SOCKET_ENUMS.RECEIVE_MESSAGE, (data) => {
    //     const obj = {
    //       ...data,
    //       position: "right",
    //     };
    //     pushMessage(obj);
    //   });
    const container = contentRef.current;

    if (container && chatMessages?.length > 0) {
      const isOverflown = checkElementOverflow(container);
      if (!isOverflown) container.classList.add("justify-end");
      else if (container.scrollTop == 0) {
        const scrollHeight = container.scrollHeight;
        container.scrollTo({
          top: scrollHeight,
        });
      }
    }
  }, [contentRef.current, chatMessages?.length > 0]);

  // <ScrollArea className="px-3 h-full">
  return (
    <div
      ref={contentRef}
      className="flex-1 flex flex-col px-5 py-5 overflow-y-auto custom-scrollbar-warning"
    >
      {chatMessages?.length === 0 && <NoMessages />}
      {chatMessages?.map((message: any, index: number) => (
        <TextMessage
          message={message}
          index={index}
          position={message.position}
        />
      ))}
    </div>
  );
};
{
  /* </ScrollArea> */
}
