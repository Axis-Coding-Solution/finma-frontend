import { useGetCommunity } from "@/api/hooks/dashboard";
import { CgSpinner } from "@/assets/icons";
import { Pagination } from "@/components/_ui/pagination";
import { SearchInput } from "@/components/_ui/search-input";
import { CommunityTypes } from "@/definitions/types";
import { MainHeading } from "@/_pages/components/common";
import {
  CommunityCard,
  CommunityFilter,
} from "@/_pages/components/dashboard/community";

const RenderRight = ({ members }: { members: number }) => (
  <span>{members} Members</span>
);

function CommunityPage() {
  const { data, isLoading } = useGetCommunity();
  const total = data?.length ?? 0;
  return (
    <div className="flex flex-col gap-8">
      <MainHeading
        heading="Community"
        renderRight={<RenderRight members={total} />}
      />
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
        <CommunityFilter />
        <SearchInput />
      </div>
      {isLoading && (
        <div className="w-full h-96 flex flex-col gap-5 justify-center items-center">
          <CgSpinner className="animate-spin size-10" />
          <span className="text-xl">Loading Data...</span>
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col gap-4">
          {data?.map((item: CommunityTypes) => (
            <CommunityCard key={item.id} {...item} />
          ))}
        </div>
      )}
      {/* <div className="flex flex-col gap-4">
        {communityOptions?.map((item :any) => (
          <CommunityCard key={item.id} {...item} />
        ))}
      </div> */}
      <div>
        <Pagination total={total} />
      </div>
    </div>
  );
}

export default CommunityPage;
