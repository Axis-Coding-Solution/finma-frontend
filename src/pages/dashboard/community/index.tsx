import { useGetCommunity } from "@/api/hooks/dashboard";
import { Pagination } from "@/components/_ui/pagination";
import { SearchInput } from "@/components/ui/search-input";
import { CommunityTypes } from "@/definitions/types";
import { FetchLoader, MainHeading } from "@/pages/components/common";
import {
  CommunityCard,
  CommunityFilter,
} from "@/pages/components/dashboard/community";
import { useState } from "react";

// const RenderRight = ({ members }: { members: number }) => (
//   <span>{members} Members</span>
// );

function CommunityPage() {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetCommunity(currentPage, filter);

  const total = data?.pagination?.total ?? 0;
  const totalPages = data?.pagination?.totalPages;
  return (
    <div className="flex flex-col gap-8">
      <MainHeading
        title="Community"
        // renderRight={<RenderRight members={total} />}
      />
      <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-4">
        <CommunityFilter filter={filter} setFilter={setFilter} />
        <SearchInput />
      </div>
      {isLoading && <FetchLoader noMessage={false} />}
      {!isLoading && (
        <div className="flex flex-col gap-4">
          {data?.community?.length ? (
            data?.community.map((item: CommunityTypes) => (
              <CommunityCard key={item.id} {...item} />
            ))
          ) : (
            <p className="py-20 flex justify-center items-center capitalize">
              Data not found for {filter}.
            </p>
          )}
        </div>
      )}
      <div>
        <Pagination
          total={total}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default CommunityPage;
