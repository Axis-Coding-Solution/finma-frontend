import {
  ChatAsideBar,
  ChatContent,
  ChatHeader,
} from "@/pages/components/chats";

function ChatBoxPage() {
  return (
    <div className="grid grid-cols-12 gap-5 h-[82vh] overflow-hidden">
      <div className="col-span-8 h-full overflow-auto">
        <ChatHeader />
        <ChatContent />
      </div>
      <div className="col-span-4 h-full overflow-auto">
        <ChatAsideBar />
      </div>
    </div>
  );
}

export default ChatBoxPage;
