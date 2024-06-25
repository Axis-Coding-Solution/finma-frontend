import PerfectScrollbar from "react-perfect-scrollbar";
import { ChatContent, ChatHeader } from "@/pages/components/chats";
import { ChatSidebar } from "@/pages/components/chats/chat-sidebar";
import { MainHeading } from "@/pages/components/common";
import { useState } from "react";

function ChatBoxPage() {

  const [chatId,setChatId]=useState()
  console.log("🚀 ~ ChatBoxPage ~ chatId:", chatId)
  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-112px)]  overflow-hidden">
      <div className="col-span-12">
        <MainHeading heading="Chats" />
      </div>
      <div className="xl:col-span-4 lg:col-span-5 col-span-12 h-full overflow-auto">
        <PerfectScrollbar>
          <ChatSidebar setId={setChatId} />
        </PerfectScrollbar>
      </div>
      <div className="col-span-8 h-full flex flex-col gap-2 overflow-auto">
        <PerfectScrollbar>
          <ChatHeader />
          <ChatContent id={chatId} />
        </PerfectScrollbar>
      </div>
    </div>
  );
}
export default ChatBoxPage;
