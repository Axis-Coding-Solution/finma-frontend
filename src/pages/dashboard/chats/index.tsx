import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
  SendMessageBox,
} from "@/pages/components/chats";

import { MainHeading } from "@/pages/components/common";
import { useAppParams, useAuth } from "@/utils/hooks";
import socket from "@/lib/socket.io";
import { useEffect } from "react";
import { SOCKET_ENUMS } from "@/utils/constants/socket-enums";
import { NoMessages } from "@/pages/components/chats/content/no-messages";

function ChatBoxPage() {
  const { id } = useAppParams();
  const auth = useAuth();

  let RenderContent = null;

  useEffect(() => {
    socket.emit(SOCKET_ENUMS.JOIN, auth?.user.id);
  }, [auth?.user]);

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
      <MainHeading title="Chats" />
      <div className="flex gap-5 items-stretch max-h-[calc(100vh-11rem)] h-full">
        <ChatsSidebar />
        <RenderContent />
      </div>
    </>
  );
}
export default ChatBoxPage;
