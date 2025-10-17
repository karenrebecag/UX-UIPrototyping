import { motion } from "motion/react";
import { useState } from "react";
import { Delete } from "lucide-react";

interface OTPInputProps {
  length?: number;
  onComplete?: (code: string) => void;
}

export function OTPInput({ length = 4, onComplete }: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleKeyPress = (key: string) => {
    if (key === "⌫") {
      // Backspace: remove last digit
      const lastFilledIndex = otp.findIndex(digit => digit === "");
      const indexToDelete = lastFilledIndex === -1 ? length - 1 : Math.max(0, lastFilledIndex - 1);
      const newOtp = [...otp];
      newOtp[indexToDelete] = "";
      setOtp(newOtp);
    } else if (key !== ".") {
      // Add digit to first empty position
      const emptyIndex = otp.findIndex(digit => digit === "");
      if (emptyIndex !== -1) {
        const newOtp = [...otp];
        newOtp[emptyIndex] = key;
        setOtp(newOtp);
        
        // Check if complete
        if (newOtp.every(digit => digit !== "") && onComplete) {
          setTimeout(() => onComplete(newOtp.join("")), 300);
        }
      }
    }
  };

  return (
    <>
      <div className="w-full px-[15px]">
        <div className="flex gap-3 w-full justify-center">
          {otp.map((digit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-[59px] h-[59px] flex-none bg-white rounded-full shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(255,255,255,0.56)] flex items-center justify-center"
            >
              <span className="text-[28px] font-['Nunito'] text-black leading-[39.20px]">
                {digit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 w-full">
        <NumericKeypad onKeyPress={handleKeyPress} />
      </div>
    </>
  );
}

export function NumericKeypad({ onKeyPress }: { onKeyPress: (key: string) => void }) {
  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "⌫"]
  ];

  const getKeyLabel = (key: string) => {
    const labels: Record<string, { main: string; sub: string }> = {
      "1": { main: "1", sub: "" },
      "2": { main: "2", sub: "ABC" },
      "3": { main: "3", sub: "DEF" },
      "4": { main: "4", sub: "GHI" },
      "5": { main: "5", sub: "JKL" },
      "6": { main: "6", sub: "MNO" },
      "7": { main: "7", sub: "PQRS" },
      "8": { main: "8", sub: "TUV" },
      "9": { main: "9", sub: "WXYZ" },
      "0": { main: "0", sub: "" }
    };
    return labels[key] || { main: key, sub: "" };
  };

  return (
    <div className="w-full bg-[#E2E6F0] rounded-t-[20px]">
      <div className="grid grid-cols-3 gap-3 px-[15px] py-[20px] content-start">
        {keys.flat().map((key, index) => {
          const { main, sub } = getKeyLabel(key);
          const isEmpty = key === ".";
          const isBackspace = key === "⌫";
          
          return (
            <motion.button
              key={index}
              whileTap={{ scale: isEmpty ? 1 : 0.95 }}
              onClick={() => !isEmpty && onKeyPress(key)}
              className={`
                w-full h-[46.75px] flex flex-col items-center justify-center
                ${isEmpty ? "bg-transparent" : "bg-white"}
                rounded-lg
              `}
            >
              {isBackspace ? (
                <Delete className="w-6 h-6 text-black" />
              ) : isEmpty ? null : (
                <div className="w-[26px] flex flex-col items-center">
                  <span className="text-center text-[20px] font-['Nunito'] font-medium uppercase text-black leading-none">
                    {main}
                  </span>
                  {sub && (
                    <span className="text-center text-[10px] font-['Nunito'] font-medium uppercase text-black leading-none">
                      {sub}
                    </span>
                  )}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Export a presentational OTP display so parent components can position the circles separately
export function OTPDisplay({ otp }: { otp: string[] }) {
  return (
    <div className="w-full px-[15px]">
      <div className="flex gap-3 w-full justify-center">
        {otp.map((digit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-[59px] h-[59px] flex-none bg-white rounded-full shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(255,255,255,0.56)] flex items-center justify-center"
          >
            <span className="text-[28px] font-['Nunito'] text-black leading-[39.20px]">
              {digit}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
