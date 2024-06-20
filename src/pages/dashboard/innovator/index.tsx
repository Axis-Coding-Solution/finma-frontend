import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Leeshaun from "@/assets/images/Lee Shaun.png";
import WilsonSmith from "@/assets/images/Wilson Smith.png";
import EmilyCoen from "@/assets/images/Emily Coen.png";
import GragoryStan from "@/assets/images/Gragory Stan.png";
import VivienJess from "@/assets/images/Vivien Jess.png";
import Table from "@/components/ui/table";

const data = [
  {
    name: "Lee Shaun",
    image: Leeshaun,
    projects: ["Project name"],
    risks: ["Medium risk"],
  },
  {
    name: "Wilson Smith",
    image: WilsonSmith,
    projects: ["Project name", "Project name", "Project name", "Project name"],
    risks: ["Medium risk", "Low risk", "High risk", "Medium risk"],
  },
  {
    name: "Emily Coen",
    image: EmilyCoen,
    projects: ["Project name", "Project name"],
    risks: ["High risk", "Low risk"],
  },
  {
    name: "Gragory Stan",
    image: GragoryStan,
    projects: ["Project name"],
    risks: ["Medium risk"],
  },

  {
    name: "Vivien Jess",
    image: VivienJess,
    projects: ["Project name"],
    risks: ["Low risk"],
  },
];

const InnovatorPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="dark" size="sm">
            Innovators
          </Button>
          <Button variant="outline" size="sm">
            Work with
          </Button>
        </div>
        <div>
          <Input />
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-auto">
        <Table data={data}/>
      </div>
      </div> 
  );
};

export default InnovatorPage;
