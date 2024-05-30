import {
  ChatAsideBar,
  ChatContent,
  ChatHeader,
  SendMessageBox,
} from "@/pages/components/chats";

function ChatBoxPage() {
  return (
    <div className="h-full">
      <ChatHeader />
      <div className="h-full grid grid-cols-12  gap-5">
        <div className="col-span-8">
          <ChatContent />
        </div>
        <div className="col-span-4">
          <ChatAsideBar />
        </div>
      </div>
      <SendMessageBox />
    </div>
  );
}

export default ChatBoxPage;
