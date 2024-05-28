import { Link, Outlet } from "react-router-dom";

function IdeaClarityPage() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* Sidebar  */}
      <div className="col-span-3">
        <ul className="text-[#181818] font-medium text-lg flex flex-col gap-4">
          <Link to="/">
            <li className="bg-background px-6 py-3 rounded-md">
              Idea clarity
            </li>
          </Link>
          <Link to="/">
            <li className="bg-transparent px-6 py-3 rounded-md flex justify-between items-center gap-4 hover:bg-background text-[#8D8D8D] hover:text-black">
              Scalability analysis
              <span className="bg-[#FFB500] text-xs text-black rounded-full px-2 py-1">Beta</span>
            </li>
          </Link>
          <Link to="/">
            <li className="bg-transparent px-6 py-3 rounded-md flex justify-between items-center gap-4 hover:bg-background text-[#8D8D8D] hover:text-black">
              Product singularity
              <span className="bg-[#FFB500] text-xs text-black rounded-full px-2 py-1">Beta</span>
            </li>
          </Link>
          <Link to="/">
            <li className="bg-transparent px-6 py-3 rounded-md flex justify-between items-center gap-4 hover:bg-background text-[#8D8D8D] hover:text-black">
              Customer validation
              <span className="bg-[#FFB500] text-xs text-black rounded-full px-2 py-1">Beta</span>
            </li>
          </Link>
          <Link to="/">
            <li className="bg-transparent px-6 py-3 rounded-md flex justify-between items-center gap-4 hover:bg-background text-[#8D8D8D] hover:text-black">
              Founders’ ability
              <span className="bg-[#FFB500] text-xs text-black rounded-full px-2 py-1">Beta</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* Content  */}
      <div className="col-span-9 bg-background rounded-lg p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default IdeaClarityPage;
