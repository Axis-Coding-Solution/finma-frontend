import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export const CommunityFilter = ({ filter, setFilter }: any) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button
        onClick={() => setFilter("all")}
        size="sm"
        rounded
        variant={filter === "all" || !filter ? "dark" : "outline"}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter("innovators")}
        variant={filter === "innovators" ? "dark" : "outline"}
        size="sm"
        rounded
      >
        Innovators
      </Button>
      <Button
        onClick={() => setFilter("experts")}
        variant={filter === "experts" ? "dark" : "outline"}
        size="sm"
        rounded
      >
        Experts
      </Button>
      <Button
        onClick={() => setFilter("mentors")}
        variant={filter === "mentors" ? "dark" : "outline"}
        size="sm"
        rounded
      >
        Mentors
      </Button>
      <Button variant="disable" size="sm" rounded>
        <span>Add filter</span>
        <Plus />
      </Button>
    </div>
  );
};
