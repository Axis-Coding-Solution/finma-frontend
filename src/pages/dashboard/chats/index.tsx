import { useParams } from "react-router-dom";

function ChatBoxPage() {
  const { expert } = useParams();
  return <div>Chat With {expert}</div>;
}

export default ChatBoxPage;
