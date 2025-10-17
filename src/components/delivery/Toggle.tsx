import { motion } from "motion/react";

interface ToggleProps {
  options: [string, string];
  selected: number;
  onChange: (index: number) => void;
}

export function Toggle({ options, selected, onChange }: ToggleProps) {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-full flex gap-3 px-[4px] py-[1px] mx-[0px] my-[30px]">
      {options.map((option, index) => (
        <motion.button
          key={index}
          onClick={() => onChange(index)}
          className={`
            flex-1 py-2 px-13 rounded-full text-center
            transition-all duration-200 text-sm font-['Nunito']
            ${selected === index 
              ? "bg-white text-black text-small" 
              : "bg-transparent text-black text-small"
            }
          `}
          whileTap={{ scale: 0.98 }}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}
