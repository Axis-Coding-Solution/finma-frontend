import PerfectScrollBar from "react-perfect-scrollbar";
import { SendMessageBox } from "../send-message";
import { TextMessage } from "./text-message";
import { chatRoomData } from "@/lib/data";

export const ChatsContent = () => {
  // const [data, setData] = useState(null);
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
    <div className={`flex flex-col gap-2 `}>
      <PerfectScrollBar>
        <div className="flex flex-col px-5   h-[25rem] ">
          {chatRoomData.map((message, index) => (
            <TextMessage
              message={message}
              index={index}
              position={message.sender ? "right" : "left"}
            />
          ))}
        </div>
      </PerfectScrollBar>
      <SendMessageBox />
    </div>
  );
};
