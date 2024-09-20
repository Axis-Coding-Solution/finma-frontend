import { CgSpinner } from "@/assets/icons";

export const FetchLoader = () => {
  return (
    <div className="w-full h-96 flex flex-col gap-5 justify-center items-center">
      <CgSpinner className="animate-spin size-10" />
      <span className="text-xl">Loading Data...</span>
    </div>
  );
};
