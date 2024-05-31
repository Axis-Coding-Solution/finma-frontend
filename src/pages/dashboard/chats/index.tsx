import {
  ChatAsideBar,
  ChatContent,
  ChatHeader,
} from "@/pages/components/chats";
import { cn } from "@/utils";
import { useState } from "react";

function ChatBoxPage() {
  const [showAside, setShowAside] = useState(false);

  const toggleAside = () => setShowAside(!showAside);

  return (
    <div className="grid grid-cols-12 gap-5 lg:h-[82.5vh] h-auto overflow-hidden">
      <div
        className={cn(
          "h-full overflow-auto lg:order-1 order-2",
          showAside ? "lg:col-span-8 col-span-12" : "lg:col-span-10  col-span-12"
        )}
      >
        <ChatHeader />
        <ChatContent />
      </div>
      <div
        className={cn(
          "h-full overflow-auto lg:order-2 order-1",
          showAside ? "lg:col-span-4 col-span-12" : "lg:col-span-2 col-span-12"
        )}
      >
        <ChatAsideBar showAside={showAside} toggleAside={toggleAside} />
      </div>
    </div>
  );
}

export default ChatBoxPage;
