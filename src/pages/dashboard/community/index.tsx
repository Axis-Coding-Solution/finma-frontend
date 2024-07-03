import { Pagination } from "@/components/ui/pagination";
import { SearchInput } from "@/components/ui/search-input";
import { MainHeading } from "@/pages/components/common";
import {
  CommunityCard,
  CommunityFilter,
} from "@/pages/components/dashboard/community";

const renderRight = <span>256 Members</span>;


function CommunityPage() {
  return (
    <div className="flex flex-col gap-8">
      <MainHeading heading="Community" renderRight={renderRight} />
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
        <CommunityFilter />
        <SearchInput />
      </div>
      <div className="flex flex-col gap-4">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  );
}

export default CommunityPage;
