import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Confetti from "../../ui/confetti";
import { MapboxMap } from "../../ui/MapboxMap";
import NumberFlow from "@number-flow/react";

interface DaySummaryScreenProps {
  onFinishDay: () => void;
  onReportIssue: () => void;
}

export function DaySummaryScreen({ onFinishDay, onReportIssue }: DaySummaryScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  const currentTime = new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();

  const startTime = "9:00 A.M";
  const endTime = currentTime;

  // Number animation states
  const [totalRoutes, setTotalRoutes] = useState(0);
  const [totalDeliveries, setTotalDeliveries] = useState(0);
  const [workingHours, setWorkingHours] = useState(0);
  const [workingMinutes, setWorkingMinutes] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [avgSpeed, setAvgSpeed] = useState(0);
  const [fuelUsed, setFuelUsed] = useState(0);
  const [customerRating, setCustomerRating] = useState(0);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setTotalRoutes(8);
      setTotalDeliveries(15);
      setWorkingHours(7);
      setWorkingMinutes(30);
      setTotalDistance(145.2);
      setAvgSpeed(42);
      setFuelUsed(18.5);
      setCustomerRating(4.9);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full pt-1 bg-gradient-to-b from-[#10B981] via-[#059669] via-50% to-[#047857] rounded-[60px] flex flex-col items-center justify-center gap-4 px-4 py-4 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden rounded-[60px]">
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/Jaring%201.png"
          alt=""
          className="w-[334px] h-[364px]"
          style={{ marginTop: '-10%' }}
        />
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-6 py-12 relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="w-10 h-10 flex items-center justify-center mb-2"
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
          className="flex flex-col gap-1 items-center mb-2"
        >
          <h1 className="text-white text-center text-[28px] font-['Inter'] font-medium leading-tight">
            ¡Jornada completada exitosamente!
          </h1>
          <p className="text-white text-center text-sm font-['Nunito']">
            Iniciaste a las {startTime} • Terminaste a las {endTime}
          </p>
        </motion.div>

        {/* Day Summary Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-[340px] flex flex-col gap-3"
        >
          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {/* Total Routes */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] px-4 py-3 border border-white/30 flex flex-col items-center gap-1 transition-all hover:bg-white/25">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Rutas</div>
              <div className="text-white text-xl font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={totalRoutes} />
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-60">completadas</div>
            </div>

            {/* Total Deliveries */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] px-4 py-3 border border-white/30 flex flex-col items-center gap-1 transition-all hover:bg-white/25">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Entregas</div>
              <div className="text-white text-xl font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={totalDeliveries} />
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-60">exitosas</div>
            </div>
          </div>

          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-3 gap-2 w-full">
            {/* Working Time */}
            <div className="bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/20 flex flex-col items-center gap-1">
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Tiempo</div>
              <div className="text-white text-sm font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={workingHours} />h <NumberFlow value={workingMinutes} format={{ minimumIntegerDigits: 2 }} />m
              </div>
            </div>

            {/* Distance */}
            <div className="bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/20 flex flex-col items-center gap-1">
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M8 12h8"/>
                  <path d="M12 8v8"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Distancia</div>
              <div className="text-white text-sm font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={totalDistance} />km
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/20 flex flex-col items-center gap-1">
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              </div>
              <div className="text-white text-xs font-['Nunito'] opacity-70">Rating</div>
              <div className="text-white text-sm font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <NumberFlow value={customerRating} />⭐
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Preview */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-[320px] h-[120px] relative shadow-[0px_6px_32px_4px_rgba(0,0,0,0.25)] rounded-[16px] z-50 bg-white/20 border-3 border-white/60 mb-2"
        >
          <div className="relative w-full h-full z-50 rounded-[13px] overflow-hidden">
            <MapboxMap 
              className="w-full h-full rounded-[13px]"
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
          
      
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-[327px] flex flex-col gap-3"
        >
          {/* Main Button - Finish Day */}
          <button
            onClick={onFinishDay}
            className="w-full px-4 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 bg-white text-emerald-700 shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] cursor-pointer hover:bg-gray-50"
          >
            <span className="font-['Nunito'] text-sm font-bold">Finalizar Jornada</span>
          </button>

          {/* Secondary Button - Report Issue */}
          <button
            onClick={onReportIssue}
            className="w-full px-4 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-200 bg-[rgba(255,255,255,0.20)] text-white border border-[rgba(255,255,255,0.40)] cursor-pointer hover:bg-[rgba(255,255,255,0.25)]"
          >
            <span className="font-['Nunito'] text-sm">Reportar un problema</span>
          </button>
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
