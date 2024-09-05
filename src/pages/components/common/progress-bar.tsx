import React from "react";

interface ProgressBarProps {
  value: string;
  icon: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, icon }) => {
  return (
    <div className="w-32 bg-background rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full relative"
        style={{ width: `${value}%` }}
      >
        {icon && (
          <span className="absolute -top-3 -right-1 text-lg ">{icon}</span>
        )}
      </div>
    </div>
  );
};
