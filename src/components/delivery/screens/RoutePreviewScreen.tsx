import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, TriangleAlert } from "lucide-react";
import { SlideToStart } from "../SlideToStart";
import { MapboxMap } from "../../ui/MapboxMap";

interface RoutePreviewScreenProps {
  onBack: () => void;
  onStartRoute: () => void;
  /** Optional callback invoked when the user chooses to report an incident */
  onReport?: () => void;
}

export function RoutePreviewScreen({ onBack, onStartRoute, onReport }: RoutePreviewScreenProps) {
  const [showReportModal, setShowReportModal] = useState(false);
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#331fff] gap-[20px] items-center justify-end overflow-clip pb-0 pt-[4px] px-0 relative size-full to-[#3b3aff] via-50% via-[#4150fd]">
      {/* Header with 3 elements */}
      <div className="w-full max-w-[381px] px-[15px] pt-2 pb-0 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="bg-[rgba(255,255,255,0.24)] box-border flex items-center justify-center px-[13px] py-[5.2px] rounded-[130px] size-[44px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
          style={{ outline: '0.65px rgba(255, 255, 255, 0.56) solid', outlineOffset: '-0.65px' }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Title */}
        <h1 className="text-white font-['Nunito']">Vista Previa de Ruta</h1>

        {/* More Button (opens report modal) */}
        <button
          onClick={() => setShowReportModal(true)}
          className="bg-[rgba(255,255,255,0.24)] box-border flex items-center justify-center px-[13px] py-[5.2px] rounded-[130px] size-[44px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
          style={{ outline: '0.65px rgba(255, 255, 255, 0.56) solid', outlineOffset: '-0.65px' }}
        >
          <TriangleAlert className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Report incident modal */}
      {showReportModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowReportModal(false)}
        >
          <div
            className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Reportar incidencia"
          >
            <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Reportar incidencia?</h2>
            <p className="text-[#494949] text-center mb-6 font-['Nunito']">¿Deseas reportar una incidencia al supervisor sobre esta entrega? Se enviará una notificación al supervisor y se añadirá una nota al informe del trayecto.</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onReport?.();
                  setShowReportModal(false);
                }}
                className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
              >
                Reportar incidencia
              </button>

              <button
                onClick={() => setShowReportModal(false)}
                className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
              >
                Seguir con el recorrido
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[10px] h-[757px] items-center overflow-clip relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 w-full my-[-25px] mx-[0px] px-[0px]  pr-[0px] pb-[0px] pl-[0px] mt-[-11px] mr-[0px] mb-[-29px] ml-[0px]">
        
        {/* Map and Content */}
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          {/* Map Preview */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-[566px] overflow-clip relative rounded-[20px] shrink-0 w-[381px]"
          >
            <MapboxMap 
              className="w-full h-full rounded-[20px]"
              startLat={25.6866}
              startLng={-100.3161}
              endLat={25.6898}
              endLng={-100.3089}
              interactive={false}
              showControls={false}
              showStyleSelector={false}
            />
          </motion.div>

          {/* Slide to Start */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="px-[5px] w-[381px]"
          >
            <SlideToStart onComplete={onStartRoute} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
