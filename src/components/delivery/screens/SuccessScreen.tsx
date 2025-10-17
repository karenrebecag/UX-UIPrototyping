import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { Button } from "../Button";

interface SuccessScreenProps {
  onContinue: () => void;
}

export function SuccessScreen({ onContinue }: SuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full h-full flex flex-col items-center justify-center gap-8 px-8 py-20"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: 0.2 
        }}
      >
        <CheckCircle className="w-12 h-12 text-white" strokeWidth={2} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-1 items-center"
      >
        <h1 className="text-white text-center text-[32px] font-['Inter'] font-medium leading-tight">
          ¡Todo listo!
        </h1>
        <p className="text-[#C0C0C0] text-center text-sm font-['Nunito']">
          Bienvenido, comencemos con tus entregas
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-[327px]"
      >
        <Button variant="secondary" onClick={onContinue}>
          Continuar
        </Button>
      </motion.div>
    </motion.div>
  );
}
