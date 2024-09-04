import { Button } from "@/components/_ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/_ui/dialog";
import { SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import { IdeaClarityScore } from "./components/idea-clarity-score";
import { EditIdeaClarity } from "./components/edit-idea-clarity";
import { useModal } from "@/utils/hooks";


export function IdeaClarityModal({ data }: { data: any }) {
  const [selectStep, setSelectStep] = useState(0)
  const modal = useModal()

  const content = [<IdeaClarityScore setSelectStep={setSelectStep} data={data} />, <EditIdeaClarity data={data} setSelectStep={setSelectStep} />]
  useEffect(() => {
    if ((data && !data?.ideaClarity)) {
      setSelectStep(1)
      modal.open()
    }
  }, [data])

  return (


    <Dialog open={(data && !data?.ideaClarity) ? true : modal.show} onOpenChange={modal.setShow} >
      <DialogTrigger asChild>
        <Button variant="outline-info" className="flex items-center">
          <h1>{data?.description || ''}</h1>
          {/* <span>{data?.data?.description || ''}</span> */}
          <SquarePen size="20" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]   pb-10 lg:px-20 md:px-10 px-4">
        {content[selectStep]}
        {/* <DialogClose asChild>
          <EditIdeaClarityModal data={data} />
        </DialogClose> */}
      </DialogContent>
    </Dialog>

  );
}
