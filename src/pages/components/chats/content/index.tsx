import { useEffect, useRef } from "react";
import { TextMessage } from "./text-message";
import { chatRoomData } from "@/lib/data";
import { useAppParams } from "@/utils/hooks";
import { useGetMessagesByChatId } from "@/api/hooks/messages/messages";
import { ScrollArea } from "@/components/ui/scroll-area";

function checkElementOverflow(element: HTMLDivElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export const ChatsContent = () => {
  const { id = "" } = useAppParams();

  // const [data, setData] = useState(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = contentRef.current;

    if (container) {
      const isOverflown = checkElementOverflow(container);
      if (!isOverflown) container.classList.add("justify-end");
      else if (container.scrollTop === 0) {
        const scrollHeight = container.scrollHeight;
        container.scrollTo({
          top: scrollHeight,
        });
      }
    }
  }, []);
  // // const [error, setError] = useState(null);

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

  const { data: messages } = useGetMessagesByChatId(id);

  return (
    <ScrollArea className="w-full px-3">
      <div
        ref={contentRef}
        className="flex-1 w-full flex flex-col px-5 py-2 overflow-y-auto"
      >
        {messages?.map((message: any, index: string) => (
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
