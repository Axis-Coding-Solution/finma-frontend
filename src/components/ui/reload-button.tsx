import { RefreshCcw } from "lucide-react";
import { useState } from "react";

interface ReloadButtonProps {
  refresh?: () => Promise<void>;
}

export const ReloadButton = ({ refresh }: ReloadButtonProps) => {
  const [reload, setReload] = useState(false);
  const handleReload = async () => {
    setReload(true);
    try {
      await refresh?.();
    } finally {
      setTimeout(() => {
        setReload(false);
      }, 2000);
    }
  };

  return (
    <button onClick={handleReload} className="cursor-pointer">
      <RefreshCcw
        size={20}
        className={`text-info ${reload ? "animate-spin" : ""}`}
      />
    </button>
  );
};
