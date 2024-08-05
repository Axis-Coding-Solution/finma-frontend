import event2 from "@/assets/images/event-pic.png";
import event1 from "@/assets/images/event-pic-1.png";
import event from "@/assets/images/event-pic-2.png";
const IdeaClarity = () => {
  return (
    <div className="">
      <h1 className="text-6xl text-yellow-400">
        Launch your startup in 3 steps
      </h1>
      <div className="flex justify-center items-center gap-5 mt-5 ">
        <div className="bg-[#B2EF95] border-1 rounded-md p-5 h-full w-full">
          <div className="flex justify-center items-center">
            <img src={event}  />
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white p-2 border-1 rounded-md">
              Submit your startup idea
            </button>
          </div>
        </div>

        <div className="bg-[#B2EF95] border border-gray-300 rounded-md h-full w-full">
          <div className="mt-3">
            <div className="flex justify-center items-center">
              <img src={event1} className="w-72 h-52" />
            </div>
          </div>
          <div className="flex justify-center items-center p-5">
            <button className="bg-white p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-center">
              Create a profile
            </button>
          </div>
        </div>

        <div className="bg-[#B2EF95] border-1 rounded-md p-5 h-full w-full">
          <div className="flex justify-center items-center">
            <img src={event2}  />
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white p-2 border-1 rounded-md ">
              Build & launch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarity;
