import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { LogoSmall } from "../Logo";
import { OTPInput, OTPDisplay, NumericKeypad } from "../OTPInput";
import { Button } from "../Button";
import { unsplash_tool } from "../../../tools";

interface OTPScreenProps {
  onVerify: () => void;
  onBack?: () => void;
}

export function OTPScreen({ onVerify, onBack }: OTPScreenProps) {
  const [timeLeft, setTimeLeft] = useState(50);
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));

  const handleKeyPress = (key: string) => {
    if (key === "" || key === "" || key === "\u232b") {
      // backspace
      const lastFilledIndex = otp.findIndex((d) => d === "");
      const indexToDelete = lastFilledIndex === -1 ? otp.length - 1 : Math.max(0, lastFilledIndex - 1);
      const newOtp = [...otp];
      newOtp[indexToDelete] = "";
      setOtp(newOtp);
    } else if (key !== ".") {
      const emptyIndex = otp.findIndex((d) => d === "");
      if (emptyIndex !== -1) {
        const newOtp = [...otp];
        newOtp[emptyIndex] = key;
        setOtp(newOtp);
        if (newOtp.every((d) => d !== "")) {
          // small delay to mimic previous behavior
          setTimeout(() => onVerify(), 300);
        }
      }
    }
  };

  return (
    <div className="w-full h-full pt-1 bg-gradient-to-b from-[#331FFF] via-[#4150FD] to-[#3B3AFF] overflow-hidden rounded-[60px] flex flex-col justify-end items-center gap-5 relative">
      {/* Background Image */}
      <img
        src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/Jaring%201.png"
        alt=""
        className="absolute left-[116px] top-[-111px] w-[334px] h-[364px] opacity-60"
      />

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute left-4 top-12 z-20 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2} />
        </button>
      )}

      <div className="px-[15px] flex flex-col gap-[18px] relative z-10">
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <LogoSmall />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-1 relative"
          >
            <h2 className="w-full max-w-[289px] text-white text-[32px] font-['Inter'] font-medium leading-[44.80px]">
              Verifica tu identidad
            </h2>
            <p className="text-[#C0C0C0] text-sm font-['Nunito']">
              Ingresa el código de 4 dígitos enviado a tu número
              de
              <br />
              teléfono registrado
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full max-h-[70vh] pt-[20px] bg-white overflow-y-auto rounded-t-[40px] flex flex-col items-start pr-0 pb-0 pl-0">
        <div className="w-full flex flex-col items-center gap-3">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          ></motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full px-5 text-center"
          >
            <p className="text-sm font-['Nunito']">
              <span className="text-[#5C5C5C]">
                Código válido por 5 minutos. ¿No lo recibiste?
                <br />
              </span>
              <span className="text-[#1F61E9]">
                Envía uno nuevo en {timeLeft} segundos
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full flex flex-col items-stretch gap-4"
          >
            {/* OTP circles between text and button */}
            <div style={{ opacity: 1, transform: 'none' }} className="w-full">
              <OTPDisplay otp={otp} />
            </div>

            <div className="px-[20px]">
              <Button variant="primary" onClick={onVerify}>
                Verificar
              </Button>
            </div>

            {/* Numeric keypad below button, lifted 10px */}
            <div className="mt-12 w-full">
              <div className="w-full bg-[#E2E6F0] rounded-t-[20px] -mt-[10px]">
                <NumericKeypad onKeyPress={handleKeyPress} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}