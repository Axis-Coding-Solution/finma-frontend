import { Button } from "@/components/_ui/button";
import { Plus } from "lucide-react";

export const CommunityFilter = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button variant="dark" size="sm" rounded>
        All
      </Button>
      <Button variant="outline" size="sm" rounded>
        Innovators
      </Button>
      <Button variant="outline" size="sm" rounded>
        Experts
      </Button>
      <Button variant="outline" size="sm" rounded>
        Mentors
      </Button>
      <Button variant="outline-secondary" size="sm" rounded>
        <span>Add filter</span>
        <Plus />
      </Button>
    </div>
  );
};
