import { cn } from "@/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { forwardRef, useId, useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  type?: string;
}

export const FloatingInputPassword = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { type, className, label, labelProps, ...rest } = props;
    const [passwordShow, setPasswordShow] = useState(false);
    const id = useId();

    const togglePasswordShow= ()=>{
      setPasswordShow(prev=>!prev);
    }

    return (
      <div className="flex items-center relative w-full ">
        <input
          ref={ref}
          type={type === "password"?(passwordShow?"text":"password"):type}
          id={id}
          placeholder=""
          className={cn(
            "outline-none w-full peer py-2.5 px-1 placeholder:text-muted-foreground bg-background text-foreground border-b border-muted-foreground focus:border-foreground disabled:opacity-50 disabled:cursor-not-allowed read-only:opacity-70 read-only:cursor-not-allowed transition",
            className
          )}
          {...rest}
        />
        <label
          htmlFor={id}
          className="absolute px-1 origin-[0] scale-90 -translate-y-7 text-muted-text bg-background peer-focus:scale-90 peer-focus:-translate-y-7 peer-focus:text-muted-text peer-focus:bg-background peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-muted-foreground transition duration-150 pointer-events-none z-10"
          {...labelProps}
        >
          {label}
        </label>
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordShow}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
          >
            {passwordShow ? (
              <EyeIcon className="w-5 h-5 text-muted-foreground" />
            ) : (
              <EyeOffIcon className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        )}
      </div>
    );
  }
);
