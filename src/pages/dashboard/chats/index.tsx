import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
  SendMessageBox,
} from "@/pages/components/chats";
import { NoMessages } from "@/pages/components/chats/content/no-messages";

import { MainHeading } from "@/pages/components/common";
import { useAppParams } from "@/utils/hooks";
import socket from "@/lib/socket.io";
import { useEffect } from "react";

function ChatBoxPage() {
  const { id } = useAppParams();

  let RenderContent = null;

  useEffect(() => {
    socket.emit("hello", "Hello World!");
  }, []);

  if (!id) RenderContent = NoMessages;
  else {
    RenderContent = () => (
      <div className="h-full w-full flex flex-col gap-2">
        <ChatsHeader />
        <ChatsContent />
        <SendMessageBox />
      </div>
    );
  }

  return (
    <>
      <MainHeading heading="Chats" />
      <div className="flex gap-5 items-stretch max-h-[calc(100vh-11rem)] h-full">
        <ChatsSidebar />
        <RenderContent />
      </div>
    </>
  );
}
export default ChatBoxPage;
