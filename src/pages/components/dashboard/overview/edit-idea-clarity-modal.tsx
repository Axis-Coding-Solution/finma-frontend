import { ArrowConnerLeft } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";

export function EditIdeaClarityModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full justify-center flex mt-4">
          <Button variant="outline" className="md:w-1/2 w-auto ">
            <span className="md:text-sm text-xs">
              View and edit <br className="sm:hidden block" />
              evaluation model answers
            </span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <Button
          variant="link"
          className="!p-0 flex items-center gap-2 absolute top-5 left-5"
        >
          <img src={ArrowConnerLeft} alt="" />
          <span>Back</span>
        </Button>
        <DialogHeader>
          <DialogTitle className="text-center">
            Evaluation model answers
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-10 px-4">
          <div>
            <Typography variant="h4">1. The Problem</Typography>
            <Typography variant="p">
              Do you have strong, credible evidence that the problem you are
              addressing exists and is significant?
            </Typography>
            <p className="text-sm"></p>
            <div className="mt-4">
              <Textarea showIcon rows={6} />
            </div>
          </div>
          <div>
            <Typography variant="h4">2. Solution</Typography>
            <Typography variant="p">
              Has your solution been tested, and does it show clear evidence of
              effectively solving the problem?
            </Typography>
            <div className="mt-4">
              <Textarea showIcon rows={6} />
            </div>
          </div>
          <div>
            <Typography variant="h4">3. Targeted audience</Typography>
            <Typography variant="p">
              Who is the specific group of people who are currently struggling
              with the problem your startup aims to solve?
            </Typography>
            <div className="mt-4">
              <Textarea showIcon rows={6} />
            </div>
          </div>
          <div>
            <Typography variant="h4">4. Competitors</Typography>
            <Typography variant="p">
              Who are your direct competitors, and what makes your solution
              stand out?
            </Typography>
            <div className="mt-4">
              <Textarea showIcon rows={6} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
