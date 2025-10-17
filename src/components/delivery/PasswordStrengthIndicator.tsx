import { motion } from "motion/react";

interface PasswordStrengthIndicatorProps {
  strength: "weak" | "medium" | "strong";
}

export function PasswordStrengthIndicator({ strength }: PasswordStrengthIndicatorProps) {
  const getStrengthConfig = () => {
    switch (strength) {
      case "weak":
        return {
          width: "11%",
          color: "#D27B7B",
          text: "Débil",
          message: "Tu contraseña no es lo suficientemente segura aún"
        };
      case "medium":
        return {
          width: "50%",
          color: "#E8A74F",
          text: "Media",
          message: "Tu contraseña es aceptable, pero puede ser más fuerte"
        };
      case "strong":
        return {
          width: "62.5%",
          color: "#7BD289",
          text: "Fuerte",
          message: "Tu contraseña es segura"
        };
    }
  };

  const config = getStrengthConfig();

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full h-1 bg-[#DCDCDC] rounded-full relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: config.width }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: config.color }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#898989] text-sm font-['Nunito'] text-[12px]">
          {config.message}
        </span>
        <span className="text-sm font-['Nunito']" style={{ color: config.color }}>
          {config.text}
        </span>
      </div>
    </div>
  );
}
