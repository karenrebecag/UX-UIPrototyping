import { motion } from "motion/react";
import { ChevronRight, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "transparent";
  onClick?: () => void;
  disabled?: boolean;
  icon?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  icon = false,
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#3629FF] to-[#0C68E1] text-white shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]",
    secondary:
      "bg-white text-black shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]",
    outline:
      "bg-[rgba(255,255,255,0.24)] text-white border border-[rgba(255,255,255,0.56)]",
    transparent:
      "bg-transparent text-black border border-[#C0C0C0]",
  };

  return (
    <div style={{ paddingBottom: icon ? "8px" : "0px" }}>
      <motion.button
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        onClick={onClick}
        disabled={disabled}
        className={`
          w-full px-4 py-4 mt-4 rounded-full 
          flex items-center justify-center gap-2
          transition-all duration-200
          ${variants[variant]}
          ${disabled ? "opacity-35 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
      >
        <span className="font-['Nunito'] text-sm">
          {children}
        </span>
        {icon && <ChevronRight className="w-4 h-4" />}
      </motion.button>
    </div>
  );
}

interface IconButtonProps {
  icon: "go" | "next" | "location";
  variant?: "active" | "inactive";
  onClick?: () => void;
}

export function IconButton({
  icon,
  variant = "inactive",
  onClick,
}: IconButtonProps) {
  const isActive = variant === "active";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`
        w-11 h-11 rounded-full p-2.5 flex items-center justify-center
        shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]
        ${
          isActive
            ? "bg-gradient-to-r from-[#F8FD00] to-[#FBFF4B]"
            : "bg-transparent border border-[rgba(255,255,255,0.56)]"
        }
      `}
    >
      <ArrowUpRight
        className={`w-5 h-5 ${isActive ? "text-black" : "text-[#424040]"}`}
      />
    </motion.button>
  );
}