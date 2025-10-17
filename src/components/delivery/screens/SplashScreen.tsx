import { motion } from "motion/react";
import { Logo } from "../Logo";
import { Button } from "../Button";

interface SplashScreenProps {
  onContinue: () => void;
}

export function SplashScreen({ onContinue }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center justify-center gap-10 px-8 py-20"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.2 
        }}
      >
        <Logo />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-1 items-center"
      >
        <h1 className="text-white text-center text-[32px] font-['Inter'] font-medium leading-tight">
          Entregas seguras y eficientes
        </h1>
        <p className="text-[#C0C0C0] text-center text-sm font-['Nunito']">
          Tu herramienta para gestionar rutas diarias
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-[327px] flex flex-col gap-3.5"
      >
        <Button variant="secondary" onClick={onContinue}>
          Iniciar Sesión
        </Button>
        <Button variant="outline" onClick={onContinue}>
          Registrarme
        </Button>
      </motion.div>
    </motion.div>
  );
}
