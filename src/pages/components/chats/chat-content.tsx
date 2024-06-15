import MessageImg from "@/assets/images/message-img.png";
import { SendMessageBox } from "./send-message";
import {
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";
import { Avatar } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";
// import MessageImg from "@/assets/images/message1.png";
const expertImages = {
  "Salama M.": userAvatar2Image,
  "Jim Smith.": userAvatar3Image,
  "Vivan Violet": userAvatar4Image,
  "Jackie Jess": userAvatar5Image,
  // Add more mappings as needed
  };
export const ChatContent = () => {
  const { expert } = useParams<{
    description?: string;
    expert: keyof typeof expertImages;
  }>();
  const avatarImage = expertImages[expert!];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-end">
        <Avatar image={avatarImage} />
        <div className="border border-border rounded-xl w-full max-w-[80%] p-5">
          <h1 className="text-2xl">Initiatives.</h1>
          <ul className="list-disc list-inside">
            <h1 className="text-xl">Operational Risks</h1>
            <li>
              Risk: Disruptions to our operations, such as employee turnover,
              supply chain
            </li>
            <li>issues, or</li>
            <li>
              technical failures, could disrupt business continuity and impact
              customer
            </li>
            <li>satisfaction.</li>
            <li>
              Mitigation Strategy: We develop contingency plans and redundancies
              to mitigate
            </li>
            <li>the impact</li>
          </ul>
          <p>
            of potential disruptions, such as cross-training employees,
            diversifying suppliers, and implementing backup systems and
            processes. We also maintain open communication channels and foster a
            culture of resilience and adaptability within our team to respond
            effectively to unexpected challenges.
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <Avatar image={avatarImage} />
        <div className="border border-border rounded-xl p-5 w-full max-w-[80%]">
          <h1>
            Hi! I want to share additional analytics on your case. You can find
            all the necessary files below. Please feel free to ask anything you
            don't understand.
          </h1>
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <Avatar image={avatarImage} />
        <div className="max-w-[80%] w-max inline-block">
          <div className="border-border px-5 py-5 border rounded-xl flex items-center gap-2">
            <img src={MessageImg} />
            <div className="flex flex-col  justify-center item-center">
              <h1>Presentation</h1>
              <h1>775.4 KB</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <Avatar image={avatarImage} />
        <div className="max-w-[80%] w-max border-border px-5 py-5 flex gap-2 border rounded-xl ">
          <img src={MessageImg} />
          <div className="flex flex-col justify-center item-center">
            <h1>Analysis</h1>
            <h1>129.2 KB</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[80%] w-max rounded-xl"></div>
      <div className="flex justify-end">
        <div className="bg-primary w-[20%] p-2 h-10 rounded-xl">
          <h1>Thank You 😊</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-t border-gray-300 w-[46%] mt-3"></div>
        <h1 className="text-sm">Today</h1>
        <div className="border-t border-gray-300 w-[46%] mt-3"></div>
      </div>

      <div className="flex justify-end ">
        <div className="bg-primary w-[40%] p-2 h-10 rounded-xl">
          <h1>Hello Salama! How are you?</h1>
        </div>
      </div>
      <SendMessageBox />
    </div>
  );
};
