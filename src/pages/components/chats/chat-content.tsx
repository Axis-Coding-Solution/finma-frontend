import { SendMessageBox } from "./send-message";
import { userAvatar2Image } from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { chatRoomData } from "@/lib/data";
import ScrollBar from "react-perfect-scrollbar";

export const ChatContent = () => {
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
      <ScrollBar>
        <div className="flex flex-col px-5   h-[25rem] ">
          {chatRoomData.map((message, index) => (
            <div
              className={`flex  ${
                message.sender ? "justify-start" : "justify-end"
              } `}
              key={index}
            >
              <div className="flex gap-2 items-end mb-2">
                {message.sender === true && <Avatar image={userAvatar2Image} />}
                <div
                  className="px-5 py-2  min-w-[13rem]  max-w-[70%]"
                  style={{
                    border: "2px solid #E2E8F0",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: "0px",
                  }}
                >
                  <h1>{message.content}</h1>
                  <p className="text-end text-[11px] pt-[2px] text-muted-foreground ">
                    {message.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollBar>
      <SendMessageBox />
    </div>
  );
};
