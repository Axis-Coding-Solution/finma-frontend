import { useParams } from "react-router-dom";

function ChatTopBar() {
    const { expert } = useParams();
  return (
    <div className="p-4 shadow-lg text-2xl sticky top-0 left-0 w-full bg-background font-bold">Chat With {expert}</div>
  )
}

export default ChatTopBar