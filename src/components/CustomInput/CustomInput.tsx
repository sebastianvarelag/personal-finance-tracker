import { EyeIcon, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { CustomInputProps } from "./CustomInput.types";
import { useState } from "react";

export function CustomInput(props: CustomInputProps) {

  const { label, id, placeholder, type, className, onChange } = props;
  
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="my-4">
      <label htmlFor={id}>{label}</label>
      { type === "password" 
          ? (
            <div className="relative">
              <Input id={id} placeholder={placeholder} className={`w-full ${className}`} type={showPassword ? "text" : "password"} onChange={onChange} />
              {
                showPassword ? 
                <EyeOff className="absolute right-3 top-4 h-5 w-5 text-gray-400 cursor-pointer" onClick={handleShowPassword} />
                :
                <EyeIcon className="absolute right-3 top-4 h-5 w-5 text-gray-400 cursor-pointer" onClick={handleShowPassword} />
              }
            </div>
          )
          : (<Input id={id} placeholder={placeholder} className={`w-full ${className}`} type={type} onChange={onChange} />)
      }
    </div>
  )
}
