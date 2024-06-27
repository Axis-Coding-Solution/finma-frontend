import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
} from "@/pages/components/chats";

import { MainHeading } from "@/pages/components/common";

function ChatBoxPage() {
  return (
    <>
      <MainHeading heading="Chats" />
      <ChatsSidebar />
      <ChatsHeader />
      <ChatsContent />
    </>
  );
}
export default ChatBoxPage;
