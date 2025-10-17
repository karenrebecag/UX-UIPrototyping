import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Confetti from "../../ui/confetti";
import { MapboxMap } from "../../ui/MapboxMap";
import NumberFlow from "@number-flow/react";

interface RouteSuccessScreenProps {
  onFinishRoute: () => void;
  onReportIssue: () => void;
}

export function RouteSuccessScreen({ onFinishRoute, onReportIssue }: RouteSuccessScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  const currentTime = new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();

  // Number animation states
  const [avgSpeed, setAvgSpeed] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [deliveries, setDeliveries] = useState(0);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAvgSpeed(45);
      setTimeHours(2);
      setTimeMinutes(15);
      setDistance(98.7);
      setFuel(12.5);
      setDeliveries(8);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full pt-1 bg-gradient-to-b from-[#331FFF] via-[#4150FD] via-50% to-[#3B3AFF] rounded-[60px] flex flex-col items-center justify-center gap-5 px-4 py-4 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden rounded-[60px]">
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.4 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/Jaring%201.png"
          alt=""
          className="w-[334px] h-[364px]"
          style={{ marginTop: '-10%' }}
        />
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-8 py-16 relative z-10">
        {/* Check Icon */}
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

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-1 items-center"
        >
          <h1 className="text-white text-center text-[32px] font-['Inter'] font-medium leading-tight">
            Ruta completada con éxito
          </h1>
          <p className="text-[#C0C0C0] text-center text-sm font-['Nunito']">
            Hora de fin: {currentTime} CST
          </p>
        </motion.div>

        {/* Small Map Preview Below Time */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="w-[320px] h-[140px] relative shadow-[0px_6px_32px_4px_rgba(0,0,0,0.25)] rounded-[20px] z-50 bg-white/20 border-4 border-white/80"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <div 
            className="relative w-full h-full z-50 rounded-[16px] overflow-hidden"
            style={{ 
              width: '320px', 
              height: '140px',
              position: 'relative'
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <MapboxMap 
                className="w-full h-full rounded-[16px]"
                startLat={25.6866}
                startLng={-100.3161}
                endLat={25.6898}
                endLng={-100.3089}
                interactive={false}
                showControls={false}
                showStyleSelector={false}
                showCustomControls={false}
              />
            </div>
          </div>
          
          {/* Small route indicator overlay */}
          <div className="absolute inset-0 pointer-events-none z-[51] bg-gradient-to-r from-transparent via-transparent to-transparent rounded-[20px]">
            <div className="absolute bottom-2 left-2 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm font-semibold shadow-lg">
              ✓ Ruta completada
            </div>
          </div>
        </motion.div>

        {/* Trip Specs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-[327px] flex flex-col gap-3"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {/* Velocidad Promedio */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/30 flex flex-col items-center gap-1 transition-all hover:bg-white/25">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M8 12h8"/>
                  <path d="M12 8v8"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Velocidad</div>
              <div className="text-white text-lg font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={avgSpeed} />
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-60">km/h</div>
            </div>

            {/* Tiempo de Manejo */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/30 flex flex-col items-center gap-1 transition-all hover:bg-white/25">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Tiempo</div>
              <div className="text-white text-lg font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={timeHours} />h <NumberFlow value={timeMinutes} format={{ minimumIntegerDigits: 2 }} />m
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-60">manejo</div>
            </div>

            {/* Distancia */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/30 flex flex-col items-center gap-1 transition-all hover:bg-white/25">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Distancia</div>
              <div className="text-white text-lg font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={distance} />
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-60">km</div>
            </div>
          </div>

      

        </motion.div>

        {/* Map Preview */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[351px] h-[148px] relative shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] overflow-hidden rounded-[20px]"
          style={{
            outline: '1px rgba(255, 255, 255, 0.56) solid',
            outlineOffset: '-1px'
          }}
        >
          <MapboxMap 
            className="w-full h-full rounded-[20px]"
            startLat={25.6866}
            startLng={-100.3161}
            endLat={25.6898}
            endLng={-100.3089}
            interactive={true}
            showControls={true}
            showStyleSelector={true}
            showCustomControls={true}
          />
          
          {/* Start Marker - This will be on top of the map */}
          <div
            className="w-[78.5px] h-[76px] absolute left-[55px] top-[14px] rounded-sm z-10"
            style={{ outline: '4px #3629FF solid', outlineOffset: '-2px' }}
          />

          {/* End Marker - Current Location - This will be on top of the map */}
          <div className="absolute left-[201px] top-[64px] z-10">
            <div
              className="w-[21px] h-[21px] bg-gradient-to-r from-[#3629FF] to-[#0C68E1] rounded-full relative"
              style={{ outline: '12px rgba(59, 58, 255, 0.50) solid' }}
            >
              <div className="w-[11px] h-[11px] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-[327px] flex flex-col "
        >
          {/* Main Button - Finish Route */}
          <div style={{ paddingBottom: '0px' }}>
            <button
              onClick={onFinishRoute}
              className="w-full px-4 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 bg-white text-black shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <span className="font-['Nunito'] text-sm">Finalizar Ruta</span>
            </button>
          </div>

          {/* Tertiary Button - Report Issue */}
          <div style={{ paddingBottom: '0px' }}>
            <button
              onClick={onReportIssue}
              className="w-full px-4 py-4 mt-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 bg-[rgba(255,255,255,0.24)] text-white border border-[rgba(255,255,255,0.56)] cursor-pointer"
            >
              <span className="font-['Nunito'] text-sm">Tengo un problema con mi ruta</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Confetti Effect - Contained within this container */}
      <div className="absolute inset-0 pointer-events-none z-[5] rounded-[60px] overflow-hidden">
        <Confetti 
          isActive={showConfetti}
          loop={true}
          zIndex={1}
        />
      </div>
    </motion.div>
  );
}
