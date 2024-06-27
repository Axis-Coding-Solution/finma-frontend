import { Button } from "@/components/ui/button";

function ExpertsPublicViewPage() {
  return (
    <div className="container bg-white rounded-xl p-20">
      <div className="flex justify-center item-center gap-20">
        <div>
          <h1>Experts Public View</h1>
        </div>
        <div>
          <Button variant="outline">Go back to Profile set up</Button>
        </div>
      </div>
    </div>
  );
}

export default ExpertsPublicViewPage;
