import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../Button";

interface TruckVerificationScreenProps {
  onContinue: () => void;
  onReportIssue: () => void;
}

export function TruckVerificationScreen({ onContinue, onReportIssue }: TruckVerificationScreenProps) {
  const [showReportModal, setShowReportModal] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center justify-center gap-5 px-8 py-20"
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
        className="w-12 h-12 flex items-center justify-center"
      >
        <img 
          src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/checkmark%201.svg"
          alt="checkmark"
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-1 items-center"
      >
        <h1 className="text-white text-center text-[32px] font-['Inter'] font-medium leading-tight">
          Verifica el estado del vehículo
        </h1>
        <p className="text-[#C0C0C0] text-center text-sm font-['Nunito']">
          ¿Todo listo? Confirma para continuar. Si hay algún problema, repórtalo
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-[327px] flex flex-col gap-3"
      >
        <Button variant="secondary" onClick={onContinue}>
          Todo está listo, muéstrame la ruta
        </Button>
        <Button variant="outline" onClick={() => setShowReportModal(true)}>
          Reportar una incidencia
        </Button>
      </motion.div>

      {showReportModal && (
        <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowReportModal(false)}>
          <div className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">Reportar una incidencia</h2>
            <p className="text-[#494949] text-center mb-6 font-['Nunito']">Si necesitas reportar una incidencia, no podrás iniciar un nuevo trayecto hasta que tu supervisor te lo autorice.</p>

            <div className="flex flex-col gap-3">
              <button onClick={() => { setShowReportModal(false); onReportIssue(); }} className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Reportar incidencia</button>
              <button onClick={() => setShowReportModal(false)} className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Volver</button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
