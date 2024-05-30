import ChatDisplayBox from "@/pages/components/chats/chat-display-box";
import ChatInputMassage from "@/pages/components/chats/input-massage";
import ChatSideBar from "@/pages/components/chats/side-bar";
import ChatTopBar from "@/pages/components/chats/top-bar";

function ChatBoxPage() {
  return (
    <div>
      <ChatTopBar />
      <div className=" grid grid-cols-12">
        <div className="col-span-9">
          <ChatDisplayBox/>
        </div>
        <div className="col-span-3">
          <ChatSideBar/>
        </div>
      </div>
      <ChatInputMassage/>
    </div>
  );
}

export default ChatBoxPage;
