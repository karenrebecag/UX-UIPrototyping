import { motion, AnimatePresence } from "motion/react";
import { Aperture, ChevronLeft, TriangleAlert } from "lucide-react";
import { useState } from "react";

interface PhotoCaptureScreenProps {
  onPhotoTaken: () => void;
  onGoBack?: () => void;
  onAlert?: () => void;
}

export function PhotoCaptureScreen({ onPhotoTaken, onGoBack, onAlert }: PhotoCaptureScreenProps) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleGoBack = () => {
    setShowCancelModal(true);
  };

  const handleCancelRoute = () => {
    setShowCancelModal(false);
    onGoBack?.();
  };

  const handleContinueRoute = () => {
    setShowCancelModal(false);
  };
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      paddingTop: '4px', 
      background: 'linear-gradient(180deg, #331FFF 0%, #4150FD 50%, #3B3AFF 100%)', 
      overflow: 'hidden', 
      borderRadius: '60px', 
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
      alignItems: 'center', 
      gap: '20px', 
      display: 'inline-flex' 
    }}>
      {/* Header with navigation */}
      <div className="w-full max-w-[381px] px-[15px] pt-2 pb-0 flex items-center justify-between">
        <button 
          onClick={handleGoBack}
          className="bg-[rgba(255,255,255,0.24)] box-border flex items-center justify-center px-[13px] py-[5.2px] rounded-[130px] size-[44px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
          style={{ outline: 'rgba(255, 255, 255, 0.56) solid 0.65px', outlineOffset: '-0.65px' }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white font-['Nunito']">Finalizar Entrega</h1>
        <button
          onClick={() => setShowReportModal(true)}
          className="bg-[rgba(255,255,255,0.24)] box-border flex items-center justify-center px-[13px] py-[5.2px] rounded-[130px] size-[44px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
          style={{ outline: 'rgba(255, 255, 255, 0.56) solid 0.65px', outlineOffset: '-0.65px' }}
        >
          <TriangleAlert className="w-6 h-6 text-white" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          alignSelf: 'stretch',
          height: '757px',
          paddingTop: '15px',
          background: '#F1F1F1',
          overflow: 'hidden',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          display: 'flex'
        }}
      >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{
          alignSelf: 'stretch',
          paddingLeft: '15px',
          paddingRight: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          display: 'inline-flex'
        }}
      >
        <div style={{
          width: '299px',
          paddingRight: '31px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          display: 'flex'
        }}>
        
        </div>
      </motion.div>

      {/* Content */}
      <div style={{
        alignSelf: 'stretch',
        paddingLeft: '20px',
        paddingRight: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        display: 'flex'
      }}>
        {/* Instructions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            alignSelf: 'stretch',
            textAlign: 'center'
          }}
        >
          <div style={{
            color: '#2A2A2A',
            fontSize: '14px',
            fontFamily: 'Nunito',
            wordWrap: 'break-word',
            textAlign: 'center'
          }}>
            <span style={{ fontWeight: '700' }}>
              Toma una foto o pide firma del cliente para validar. 
              <br/>
              Sube la evidencia.
              <br/>
            </span>
            <span style={{ fontWeight: '400' }}>
              Sin evidencia, la entrega no se considerará completa.
            </span>
          </div>
        </motion.div>

        {/* Photo Preview Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '10px',
            display: 'flex'
          }}
        >
          <div style={{
            alignSelf: 'stretch',
            height: '497px',
            borderRadius: '15px',
            backgroundImage: 'url(https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/bcfe69253313dd6ec077a6081b34d9cb31c4c71e.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            display: 'inline-flex'
          }}>
           
           
          </div>
        </motion.div>
        {/* Camera Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 15 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPhotoTaken}
          style={{
            width: '100px',
            height: '100px',
            paddingTop: '10px',
            paddingBottom: '10px',
            background: 'linear-gradient(90deg, #F8FD00 0%, #FBFF4B 100%)',
            boxShadow: '0px 4px 32px 4px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
            borderRadius: '50px',
            outline: '1px rgba(255, 255, 255, 0.56) solid',
            outlineOffset: '-1px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            display: 'inline-flex'
          }}
        >
          <div className="w-[50px] h-[50px] relative overflow-hidden flex items-center justify-center">
            <Aperture className="w-10 h-10 text-black" strokeWidth={2.5} />
          </div>
        </motion.button>
      </div>
      </motion.div>

      {/* Cancel Route Modal */}
      <AnimatePresence>
        {showCancelModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleContinueRoute}
          >
            <motion.div
              className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Cancelar recorrido?</h2>
              <p className="text-[#494949] text-center mb-6 font-['Nunito']">
                Al volver se cancelará el recorrido y se informará al administrador
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleContinueRoute}
                  className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
                >
                  Continuar con el recorrido
                </button>
                <button
                  onClick={handleCancelRoute}
                  className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
                >
                  Cancelar Recorrido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Report Incident Modal */}
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
          >
            <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Reportar incidencia?</h2>
            <p className="text-[#494949] text-center mb-6 font-['Nunito']">¿Deseas reportar una incidencia al supervisor sobre esta entrega? Se enviará una notificación al supervisor y se añadirá una nota al informe del trayecto.</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onAlert?.();
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
                Cancelar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
