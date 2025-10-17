import { motion } from "motion/react";

interface ProgressBarProps {
  progress: number; // 0-100
  variant?: "yellow" | "blue";
}

export function ProgressBar({
  progress,
  variant = "yellow",
}: ProgressBarProps) {
  const fillColor =
    variant === "yellow"
      ? "bg-gradient-to-r from-[#F8FD00] to-[#FBFF4B]"
      : "bg-gradient-to-r from-[#3629FF] to-[#0C68E1]";

  const totalBars = 33;
  const activeBars = Math.floor((progress / 100) * totalBars);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute left-px top-px h-[58px] ${fillColor} rounded-[38px]`}
    />
  );
}

export function PasswordStrengthIndicator({
  strength,
}: {
  strength: "weak" | "medium" | "strong";
}) {
  const widths = {
    weak: "11%",
    medium: "53%",
    strong: "62%",
  };

  const colors = {
    weak: "bg-[#D27B7B]",
    medium: "bg-[#DCA760]",
    strong: "bg-[#7BD289]",
  };

  const labels = {
    weak: "Débil",
    medium: "Media",
    strong: "Fuerte",
  };

  const textColors = {
    weak: "text-[#D27B7B]",
    medium: "text-[#DCA760]",
    strong: "text-[#7BD289]",
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative w-full h-1 bg-[#DCDCDC] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: widths[strength] }}
          className={`absolute left-0 top-0 h-full ${colors[strength]} rounded-l-full`}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-['Nunito'] text-[#898989]">
          {strength === "weak" &&
            "Tu contraseña no es lo suficientemente segura aún"}
          {strength === "medium" &&
            "Tu contraseña es medianamente segura"}
          {strength === "strong" && "Tu contraseña es segura"}
        </span>
        <span
          className={`text-sm font-['Nunito'] ${textColors[strength]}`}
        >
          {labels[strength]}
        </span>
      </div>
    </div>
  );
}