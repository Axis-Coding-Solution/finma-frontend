import {
  ChatAsideBar,
  ChatContent,
  ChatHeader,
  SendMessageBox,
} from "@/pages/components/chats";

function ChatBoxPage() {
  return (
    <div>
      <ChatHeader />
      <div className="h-full flex flex-col gap-5">
        <div className="flex-grow w-8/12">
          <ChatContent />
          <ChatAsideBar />
        </div>
        <SendMessageBox />
      </div>
    </div>
  );
}

export default ChatBoxPage;
