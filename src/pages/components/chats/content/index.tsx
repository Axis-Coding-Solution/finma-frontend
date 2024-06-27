import { useEffect, useRef } from "react";
import { TextMessage } from "./text-message";
import { chatRoomData } from "@/lib/data";

function checkElementOverflow(element: HTMLDivElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

export const ChatsContent = () => {
  // const [data, setData] = useState(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (container) {
      const isOverflown = checkElementOverflow(container);
      if (!isOverflown) container.classList.add("justify-end");
      else {
        const scrollHeight = container.scrollHeight;
        container.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
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

  return (
    <div
      ref={contentRef}
      className="flex-1 flex flex-col px-5 py-2 overflow-y-auto"
    >
      {chatRoomData.map((message, index) => (
        <TextMessage
          message={message}
          index={index}
          position={message.sender ? "right" : "left"}
        />
      ))}
    </div>
  );
};
