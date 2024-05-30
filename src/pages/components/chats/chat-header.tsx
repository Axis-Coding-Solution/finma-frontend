import { useParams } from "react-router-dom";

export function ChatHeader() {
  const { expert } = useParams();
  return (
    <div className="p-4 text-2xl sticky top-0 left-0 w-full font-bold">
      Chat With {expert}
    </div>
  );
}
