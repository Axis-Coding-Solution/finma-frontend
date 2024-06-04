import { InputHTMLAttributes, forwardRef, useState } from "react";
import { EyeClose, EyeOpen } from "@/assets/svgs";
import { Input } from "./input";
import { Label } from "./label";

interface IPasswordInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInput>(
  ({ label, id, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
      <div className="relative">
        <Label htmlFor={id}>{label}</Label>
        <Input
          {...props}
          id={id}
          placeholder={placeholder}
          ref={ref}
          type={showPassword ? "text" : "password"}
        />
        <span
          className="absolute inset-y-0 right-4 top-8 flex items-center cursor-pointer"
          onClick={toggleShowPassword}
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <img src={EyeOpen} alt="Show password" key="eye-open" />
          ) : (
            <img src={EyeClose} alt="Hide password" key="eye-close" />
          )}
        </span>
      </div>
    );
  }
);
