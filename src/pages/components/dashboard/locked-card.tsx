import lockImg from "@/assets/svgs/locked.svg";
type PropType = {
  title: string;
};

function LockedCard({ title }: PropType) {
  return (
    <div className="p-4 bg-background rounded-xl border border-border text-foreground">
      <div className="font-semibold flex items-center justify-between gap-2">
        <h6 className="text-xl ">{title}</h6>
        <span className="bg-yellow-500 rounded-full px-2 py-1 text-sm">
          Beta
        </span>
      </div>
      <div className="flex items-end justify-between gap-2 mt-8">
        <span className=" font-medium text-lg mb-4">Score is locked</span>
        <img src={lockImg} alt="" />
      </div>
    </div>
  );
}

export default LockedCard;
