import {
  ChatsSidebar,
  ChatsHeader,
  ChatsContent,
} from "@/pages/components/chats";

import { MainHeading } from "@/pages/components/common";
import { useAppParams } from "@/utils/hooks";

function ChatBoxPage() {
  const { id } = useAppParams();

  return (
    <>
      <MainHeading heading="Chats" />
      <ChatsSidebar />
      {id && (
        <div>
          <ChatsHeader />
          <ChatsContent />
        </div>
      )}
      <div className="h-full flex justify-center items-center  ">
        No Messages here Yet
      </div>
    </>
  );
}
export default ChatBoxPage;
