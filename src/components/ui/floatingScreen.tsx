import { useState } from "react";
import Draggable from "react-draggable";
import {
  ChatsHeader,
  ChatsContent,
  SendMessageBox,
} from "@/pages/components/chats";
import { MessageCircle } from "lucide-react";
function FloatingScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const toggleChat = () => {
    if (isOpen) {
      setPosition({ x: 0, y: 0 });
    }
    setIsOpen(!isOpen);
  };
  return (
    <Draggable
      position={position}
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="p-3 bg-[#FFB500] text-black rounded shadow-lg"
          >
            <MessageCircle />
          </button>
        )}
        {isOpen && (
          <div className="w-[500px] bg-white rounded shadow-lg flex flex-col p-1">
            <div className="text-black flex items-center justify-between p-3 rounded gap-2 ">
              {/* <span>Messenger</span> */}
              <ChatsHeader />
              <button onClick={toggleChat} className="text-sm font-bold">
                ✕
              </button>
            </div>
            <div className="custom-scrollbar-warning flex-1 overflow-y-auto max-h-40">
              <ChatsContent />
            </div>
            <SendMessageBox />
          </div>
        )}
      </div>
    </Draggable>
  );
}
export default FloatingScreen;
