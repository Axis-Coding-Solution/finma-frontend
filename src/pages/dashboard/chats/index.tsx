import PerfectScrollbar from "react-perfect-scrollbar";
import { ChatContent, ChatHeader } from "@/pages/components/chats";
import { ChatSidebar } from "@/pages/components/chats/chat-sidebar";
import { MainHeading } from "@/pages/components/common";

function ChatBoxPage() {
  return (
    <div className="grid grid-cols-12 gap-6 h-screen  overflow-hidden">
      <div className="col-span-12">
        <MainHeading heading="Chats" />
      </div>
      <div className="xl:col-span-3 lg:col-span-5 col-span-12 h-screen overflow-auto">
        <PerfectScrollbar>
          <ChatSidebar />
        </PerfectScrollbar>
      </div>
      <div className="col-span-9 h-full  flex flex-col  gap-2 overflow-auto">
        <PerfectScrollbar>
          <ChatHeader />
          <ChatContent />
        </PerfectScrollbar>
      </div>
    </div>
  );
}
export default ChatBoxPage;
