import {
  ChatAsideBar,
  ChatContent,
  ChatHeader,
  SendMessageBox,
} from "@/pages/components/chats";

function ChatBoxPage() {
  return (
    <div className="grid grid-cols-12 gap-5 h-[82vh] overflow-hidden">
      <div className="col-span-8 h-full overflow-auto">
        <div className="sticky top-0 left-0">
          <ChatHeader />
        </div>
        <div>
          <ChatContent />
        </div>
        <div className="sticky bottom-0 left-0">
          <SendMessageBox />
        </div>
      </div>
      <div className="col-span-4 h-full overflow-auto">
        <ChatAsideBar />
      </div>
    </div>
  );
}

export default ChatBoxPage;
