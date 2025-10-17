import { motion } from "motion/react";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export function Checkbox({ checked = false, onChange, label }: CheckboxProps) {
  return (
    <motion.button
      onClick={() => onChange?.(!checked)}
      className="flex items-center gap-1 cursor-pointer"
      whileTap={{ scale: 0.95 }}
    >
      <div className={`
        w-3 h-3 rounded-sm flex items-center justify-center
        transition-colors duration-200
        ${checked ? "bg-[#3629FF]" : "bg-white border border-[#C0C0C0]"}
      `}>
        {checked && <Check className="w-2 h-2 text-white" strokeWidth={3} />}
      </div>
      {label && (
        <span className="text-sm font-['Nunito'] text-black">{label}</span>
      )}
    </motion.button>
  );
}
