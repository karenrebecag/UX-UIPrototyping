import { motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputProps {
  type?: "email" | "password" | "text";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: boolean;
  focused?: boolean;
}

export function Input({ 
  type = "text", 
  placeholder = "", 
  value = "",
  onChange,
  label,
  error = false,
  focused = false
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(focused);

  const borderColor = error 
    ? "border-2 border-[#EC3E55]" 
    : isFocused 
      ? "border border-[#3629FF]" 
      : "border border-[#C0C0C0]";

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-sm font-['Nunito'] text-black">
          {label}
        </label>
      )}
      <motion.div 
        className={`
          bg-white rounded-full px-3.5 py-4 
          flex items-center justify-between gap-2.5
          ${borderColor}
          transition-all duration-200
        `}
        initial={false}
        animate={{ scale: isFocused ? 1.01 : 1 }}
      >
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent outline-none text-sm font-['Nunito'] text-black placeholder:text-[#A1A1A1]"
        />
        {type === "password" && (
          <button 
            onClick={() => setShowPassword(!showPassword)}
            className="w-6 h-6 flex items-center justify-center flex-shrink-0"
            type="button"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-black" />
            ) : (
              <Eye className="w-5 h-5 text-black" />
            )}
          </button>
        )}
      </motion.div>
    </div>
  );
}
