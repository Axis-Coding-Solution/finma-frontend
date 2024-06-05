import { ArrowConnerLeft } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export function EditIdeaClarityModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full justify-center flex mt-4">
          <Button variant="outline" className="md:w-1/2 w-auto ">
            <span className="md:text-sm text-xs">View and edit <br className="sm:hidden block" />evaluation model answers</span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] pb-4  pt-2 px-0">
          <Button
            variant="link"
            className="!p-0 flex items-center gap-2 absolute top-0 left-4"
          >
            <img src={ArrowConnerLeft} alt="" />
            <span>Back</span>
          </Button>
        <DialogHeader className="sticky md:mt-0 mt-6 top-0 left-0 w-full">
          <DialogTitle className="font-bold text-lg text-center ">
            Evaluation model answers
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-10 overflow-y-auto px-4">
          <div>
            <h4 className="font-semibold text-lg">1. The Problem</h4>
            <p className="text-sm">
              Do you have strong, credible evidence that the problem you are
              addressing exists and is significant?
            </p>
            <div className="mt-4">
              <Textarea showIcon={true} rows={6} className="bg-secondary" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">2. Solution</h4>
            <p className="text-sm">
              Has your solution been tested, and does it show clear evidence of
              effectively solving the problem?
            </p>
            <div className="mt-4">
              <Textarea showIcon={true} rows={6} className="bg-secondary" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">3. Targeted audience</h4>
            <p className="text-sm">
              Who is the specific group of people who are currently struggling
              with the problem your startup aims to solve?
            </p>
            <div className="mt-4">
              <Textarea showIcon={true} rows={6} className="bg-secondary" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">4. Competitors</h4>
            <p className="text-sm">
              Who are your direct competitors, and what makes your solution
              stand out?
            </p>
            <div className="mt-4">
              <Textarea showIcon={true} rows={6} className="bg-secondary" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
