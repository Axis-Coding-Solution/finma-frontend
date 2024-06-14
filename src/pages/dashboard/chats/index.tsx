import {
  ChatAsideBar,
  ChatContent,
  ChatHeader,
} from "@/pages/components/chats";
import {  ChatSidebar } from "@/pages/components/chats/chat-sidebar";
import { MainHeading } from "@/pages/components/common";
import { cn } from "@/utils";
import { useState } from "react";

function ChatBoxPage() {
  const [showAside, setShowAside] = useState(false);

  const toggleAside = () => setShowAside(!showAside);

  return (
    // <div className="grid grid-cols-12 gap-5 h-[calc(100vh-112px)]  overflow-hidden">
    //   <div
    //     className={cn(
    //       "h-full overflow-auto lg:order-1 order-2",
    //       showAside ? "lg:col-span-8 col-span-12" : "lg:col-span-10  col-span-12"
    //     )}
    //   >
    //     <ChatHeader />
    //     <ChatContent />
    //   </div>
    //   <div
    //     className={cn(
    //       "h-full overflow-auto lg:order-2 order-1",
    //       showAside ? "lg:col-span-4 col-span-12" : "lg:col-span-2 col-span-12"
    //     )}
    //   >
    //     <ChatAsideBar showAside={showAside} toggleAside={toggleAside} />
    //   </div>
    // </div>
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-112px)]  overflow-hidden">
      <div className="col-span-12">
        <MainHeading heading="Chats"/>
      </div>
      <div className="xl:col-span-4 lg:col-span-5 col-span-12 h-full overflow-auto">
        <ChatSidebar />
      </div>
      <div className="xl:col-span-8 lg:col-span-7 col-span-12 h-full overflow-auto">
        <ChatHeader />
        <ChatContent />
      </div>
    </div>
  );
}

export default ChatBoxPage;
