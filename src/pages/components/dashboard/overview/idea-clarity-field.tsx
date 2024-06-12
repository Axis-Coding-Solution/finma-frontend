import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { Edit } from "lucide-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

type PropsType = {
  index: number;
  title: string;
  name: "problem" | "solution" | "targetedAudience" | "competitors";
  detail: string;
  value: string;
  register: UseFormRegister<{
    problem: string;
    solution: string;
    targetedAudience: string;
    competitors: string;
  }>;
};
export const IdeaClarityField = ({
  index,
  title,
  detail,
  register,
  name,
  value,
}: PropsType) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography variant="h4">{`${index}. ${title}`}</Typography>
        <Typography variant="p">{detail}</Typography>
      </div>
      {show ? (
        <>
          <Textarea showIcon {...register(name)} rows={6} />
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" type="button" onClick={toggleShow}>
              Cancel
            </Button>
            <Button variant="default" type="button" onClick={toggleShow}>
              Save
            </Button>
          </div>
        </>
      ) : (
        <div className="p-3 flex justify-between items-start w-full h-32 bg-accent rounded-lg">
          <p>{value}</p>
          <Button
            variant="flat-success"
            type="button"
            size="icon"
            onClick={toggleShow}
          >
            <Edit />
          </Button>
        </div>
      )}
    </div>
  );
};
