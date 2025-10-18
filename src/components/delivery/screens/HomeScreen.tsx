import {
  motion,
  useMotionValue,
  AnimatePresence,
} from "motion/react";
import { useState, useEffect } from "react";
import { Bell, Package, Home, User, MapPin, Package2, Clock, Plus, Star } from "lucide-react";
import { NotificationCenter } from "../NotificationCenter";
import { RouteCard } from "../RouteCard";
import svgPaths from "../../../imports/svg-bjdzyzzf1j";
import svgPaths2 from "../../../imports/svg-fwp0nr0z83";
import NumberFlow from "@number-flow/react";
import Confetti from "../../ui/confetti";
import { Button } from "../../ui/button";

interface HomeScreenProps {
  onRouteStart: () => void;
  onBreakStateChange: (breakState: boolean) => void;
  onModalStateChange: (modalState: boolean) => void;
  onFinishDay: () => void;
  onErrorStateChange?: (errorState: boolean) => void;
  onDayCompletedChange?: (dayCompleted: boolean) => void;
}

export function HomeScreen({
  onRouteStart,
  onBreakStateChange,
  onModalStateChange,
  onFinishDay,
  onErrorStateChange,
  onDayCompletedChange,
}: HomeScreenProps) {
  const [isNotificationOpen, setIsNotificationOpen] =
    useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakCountdown, setBreakCountdown] = useState(() => {
    const savedCountdown = sessionStorage.getItem('breakCountdown');
    return savedCountdown ? parseInt(savedCountdown, 10) : 60;
  }); // Countdown timer in seconds
  const [isBreakExpired, setIsBreakExpired] = useState(false); // Track if break time is over
  // When a route start is requested while on break, show confirmation modal
  const [showConfirmStartModal, setShowConfirmStartModal] = useState(false);
  const [pendingRouteStart, setPendingRouteStart] = useState<null | (() => void)>(null);
  // track that the break was paused because of starting a route
  const [isBreakPaused, setIsBreakPaused] = useState(false);
  // Modal for confirming break start
  const [showConfirmBreakModal, setShowConfirmBreakModal] = useState(false);
  // Modal for confirming break exit while time remains
  const [showConfirmExitBreakModal, setShowConfirmExitBreakModal] = useState(false);
  // Modal for break time exceeded notification
  const [showBreakExceededModal, setShowBreakExceededModal] = useState(false);
  // Track if break has been used (persisted in sessionStorage)
  const [breakUsed, setBreakUsed] = useState(() => {
    return sessionStorage.getItem('breakUsed') === 'true';
  });
  // Debug state for error simulation
  const [errorsActive, setErrorsActive] = useState(() => {
    return sessionStorage.getItem('errorsActive') === 'true';
  });
  // Debug state for day completion
  const [dayCompleted, setDayCompleted] = useState(() => {
    return sessionStorage.getItem('dayCompleted') === 'true';
  });

  // Number animation states - start at 0 and animate to final values
  const [notificationCount, setNotificationCount] = useState(0);
  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [totalDeliveries, setTotalDeliveries] = useState(0);
  const [estimatedHours, setEstimatedHours] = useState(0);
  const [estimatedMinutes, setEstimatedMinutes] = useState(0);
  const [routesCount, setRoutesCount] = useState(0);

  // Trigger animations on mount and when state changes
  useEffect(() => {
    // First reset all numbers to 0
    setNotificationCount(0);
    setStartHour(0);
    setStartMinute(0);
    setEndHour(0);
    setEndMinute(0);
    setDeliveredCount(0);
    setTotalDeliveries(0);
    setEstimatedHours(0);
    setEstimatedMinutes(0);
    setRoutesCount(0);

    // Then animate to final values
    const timer = setTimeout(() => {
      if (dayCompleted) {
        // Day completed state values
        setNotificationCount(0);
        setStartHour(9);
        setStartMinute(0);
        setEndHour(3);
        setEndMinute(0);
        setDeliveredCount(15);
        setTotalDeliveries(15);
        setEstimatedHours(0);
        setEstimatedMinutes(0);
        setRoutesCount(0);
      } else if (errorsActive) {
        // Error state values
        setNotificationCount(5);
        setStartHour(9);
        setStartMinute(0);
        setEndHour(3);
        setEndMinute(0);
        setDeliveredCount(2);
        setTotalDeliveries(18);
        setEstimatedHours(8);
        setEstimatedMinutes(15);
        setRoutesCount(16);
      } else {
        // Normal state values
        setNotificationCount(1);
        setStartHour(9);
        setStartMinute(0);
        setEndHour(3);
        setEndMinute(0);
        setDeliveredCount(7);
        setTotalDeliveries(15);
        setEstimatedHours(4);
        setEstimatedMinutes(50);
        setRoutesCount(8);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [errorsActive, dayCompleted]);

  // Notify parent about modal state changes
  useEffect(() => {
    const hasModalOpen = isNotificationOpen || showConfirmStartModal || showConfirmBreakModal || showConfirmExitBreakModal || showBreakExceededModal;
    onModalStateChange?.(hasModalOpen);
  }, [isNotificationOpen, showConfirmStartModal, showConfirmBreakModal, showConfirmExitBreakModal, showBreakExceededModal, onModalStateChange]);

  // Notify parent about error state changes
  useEffect(() => {
    onErrorStateChange?.(errorsActive);
  }, [errorsActive, onErrorStateChange]);

  // Notify parent about day completed state changes
  useEffect(() => {
    onDayCompletedChange?.(dayCompleted);
  }, [dayCompleted, onDayCompletedChange]);

  // Save break countdown to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('breakCountdown', breakCountdown.toString());
  }, [breakCountdown]);

  // Save break used state to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('breakUsed', breakUsed.toString());
  }, [breakUsed]);

  // Save errors active state to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('errorsActive', errorsActive.toString());
  }, [errorsActive]);

  // Save day completed state to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('dayCompleted', dayCompleted.toString());
  }, [dayCompleted]);

  // Countdown timer for break mode
  useEffect(() => {
    if (isOnBreak) {
      const interval = setInterval(() => {
        setBreakCountdown((prev) => {
          const newValue = prev - 1;
          // Mark as expired when countdown reaches 0
          if (newValue === 0) {
            setIsBreakExpired(true);
            setBreakUsed(true); // Mark break as used when time expires
          }
          // Show modal only when countdown reaches -10 (10 minutes grace period)
          if (newValue === -10) {
            setShowBreakExceededModal(true);
          }
          return newValue; // Allow negative numbers
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOnBreak]);

  const handleBreakToggle = () => {
    if (isOnBreak) {
      // If already on break and time remaining, show confirmation modal
      if (breakCountdown > 0) {
        setShowConfirmExitBreakModal(true);
      } else {
        // If time is up, just end break and reset expired state
        setIsOnBreak(false);
        setIsBreakExpired(false); // Reset expired state to return to blue
        onBreakStateChange?.(false);
      }
    } else {
      // If not on break and break hasn't been used, show confirmation modal
      if (!breakUsed) {
        setShowConfirmBreakModal(true);
      }
      // If break has been used, do nothing (button should be disabled)
    }
  };

  // Wrapper to handle route start attempts. If on break, show confirmation modal.
  const handleRouteStartAttempt = (cb: () => void) => {
    if (isOnBreak) {
      setPendingRouteStart(() => cb);
      setShowConfirmStartModal(true);
      return;
    }
    cb();
  };

  const confirmStartRouteDuringBreak = () => {
    // Pause the break, keep countdown value so it can be resumed later
    setIsBreakPaused(true);
    setIsOnBreak(false);
    setIsBreakExpired(false); // Reset expired state to return to blue
    onBreakStateChange?.(false);
    // call the pending start
    pendingRouteStart?.();
    setPendingRouteStart(null);
    setShowConfirmStartModal(false);
  };

  const cancelStartDuringBreak = () => {
    setPendingRouteStart(null);
    setShowConfirmStartModal(false);
  };

  const confirmStartBreak = () => {
    setIsOnBreak(true);
    onBreakStateChange?.(true);
    setBreakCountdown(60);
    setIsBreakExpired(false);
    setShowConfirmBreakModal(false);
  };

  const cancelStartBreak = () => {
    setShowConfirmBreakModal(false);
  };

  const confirmExitBreak = () => {
    setIsOnBreak(false);
    setIsBreakExpired(false); // Reset expired state to return to blue
    onBreakStateChange?.(false);
    setBreakUsed(true); // Mark break as used when voluntarily exited
    setShowConfirmExitBreakModal(false);
  };

  const cancelExitBreak = () => {
    setShowConfirmExitBreakModal(false);
  };

  const finishBreakFromModal = () => {
    setIsOnBreak(false);
    setIsBreakExpired(false); // Reset expired state to return to blue
    onBreakStateChange?.(false);
    setShowBreakExceededModal(false);
  };

  const y = useMotionValue(0);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y < -100) {
      setIsExpanded(true);
    } else if (info.offset.y > 100) {
      setIsExpanded(false);
    }
  };

  // Special day completed layout
  if (dayCompleted) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full pt-10 rounded-[60px] flex flex-col justify-between items-center relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgb(59, 205, 86) 0%, rgb(54, 210, 105) 50%, rgb(82, 216, 109) 100%)"
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden rounded-[60px]">
            <motion.img
              initial={{ x: -60, y: -245, opacity: 0 }}
              animate={{ x: -60, y: -245, opacity: 0.46 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/Jaring%201.png"
              alt=""
              className="w-[334px] h-[364px] absolute"
            />
          </div>

          {/* Confetti Effect */}
          <div className="absolute inset-0 pointer-events-none z-[5] rounded-[60px] overflow-hidden">
            <Confetti 
              isActive={true}
              loop={true}
              zIndex={1}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-1.5 relative z-10 w-full">
            {/* Header */}
            <div className="w-[381px] px-[15px] flex flex-col gap-[18px]">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  {/* Logo */}
                  <div className="h-[32px] w-[41px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 41 32"
                    >
                      <path d={svgPaths.p301a1c00} fill="white" />
                      <path
                        d={svgPaths.p2cc8ed00}
                        fill="#E7E7E7"
                      />
                    </svg>
                  </div>

                  {/* Notification Button */}
                  <button
                    onClick={() => setIsNotificationOpen(true)}
                    className="relative w-11 h-11 px-[13px] py-[5.20px] bg-[rgba(255,255,255,0.24)] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] rounded-full border-[0.65px] border-[rgba(255,255,255,0.56)] flex items-center justify-center"
                  >
                    <Bell
                      className="w-5 h-5 text-white"
                      strokeWidth={1.5}
                    />
                    <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 px-[3px] py-[1px] bg-[#EC3E55] border border-[rgba(255,255,255,0.56)] rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px] font-['Inter'] font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        <NumberFlow value={notificationCount} />
                      </span>
                    </div>
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="w-[289px] text-white text-[32px] font-['Inter'] font-medium leading-[44.8px]">
                    ¡Excelente trabajo, José!
                  </h2>
                  <p className="text-white text-sm font-['Nunito']">
                    Has completado todas tus rutas del día exitosamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="w-full px-2.5 flex flex-col gap-2.5 px-[10px] py-[15px]">
              <div className="px-[5px] flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[3.67px] h-[3.82px] border border-white" />
                    <svg
                      className="w-[11px] h-[10px]"
                      fill="none"
                      viewBox="0 0 13 15"
                    >
                      <path
                        d={svgPaths.p3f8c9600}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={svgPaths.p2bc8a980}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={svgPaths.p2338e700}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="w-[3.67px] h-[3.82px] border border-white" />
                  </div>
                  <span className="text-white text-xs font-['Nunito'] font-bold text-[11px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <NumberFlow value={deliveredCount} />/<NumberFlow value={totalDeliveries} /> entregas completadas
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-[11px] h-[11px]"
                    fill="none"
                    viewBox="0 0 11 11"
                  >
                    <path
                      d={svgPaths.p105d7900}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d={svgPaths.p1f658e00}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-xs font-['Nunito'] font-bold text-[11px]">
                    Jornada completada
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-[60px] bg-[rgba(255,255,255,0.03)] rounded-[50px] border-l border-r border-[rgba(255,255,255,0.45)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="absolute left-px top-px h-[58px] bg-[rgba(246,246,246,0.9)] rounded-[38px]"
                />
              </div>
            </div>

            {/* Statistics Summary */}
            <div className="w-full max-w-[340px] flex flex-col gap-3 px-4 pb-5">
              <div className="grid grid-cols-3 gap-2 w-full">
                <div className="bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/20 flex flex-col items-center gap-1">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mb-1">
                    <Clock className="w-2 h-2 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-white text-xs font-['Nunito'] opacity-70">Tiempo</div>
                  <div className="text-white text-sm font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <NumberFlow value={7} />h <NumberFlow value={30} />m
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/20 flex flex-col items-center gap-1">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mb-1">
                    <Plus className="w-2 h-2 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-white text-xs font-['Nunito'] opacity-70">Distancia</div>
                  <div className="text-white text-sm font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <NumberFlow value={145.2} />km
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-3 border border-white/20 flex flex-col items-center gap-1">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center mb-1">
                    <MapPin className="w-2 h-2 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-white text-xs font-['Nunito'] opacity-70">Rutas</div>
                  <div className="text-white text-sm font-['Inter'] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <NumberFlow value={8} />
                  </div>
                </div>
              </div>

        
            </div>
          </div>

          {/* Routes Summary Section */}
                    <div className="w-full h-auto pt-[15px] bg-white rounded-t-[40px] flex flex-col items-center gap-5 relative transition-all mt-[25px]">
            {/* Decorative line */}
            <div style={{
              width: '60%',
              height: '5px',
              backgroundColor: '#d7d7d7',
              borderRadius: '999px',
              opacity: 0.8
            }} />

            <div className="w-full px-[20px] flex items-center justify-center m-[0px] py-[0px]">
              <div className="flex-1">
                <span className="text-[#2A2A2A] text-sm font-['Nunito'] font-bold">
                  Resumen de rutas del día de hoy:
                  <br />
                </span>
                <span className="text-[#2A2A2A] text-sm font-['Nunito']">
                  Has completado exitosamente las 15 rutas asignadas.
                </span>
              </div>
            </div>

            <div className="w-full px-2.5 flex flex-col gap-[15px] pb-[125px]">
              {[
                "Av. Principal 123, Centro",
                "Calle Comercio 45, Norte",
                "Plaza Mayor 7, Este",
                "Paseo Marítimo 89, Costa",
                "Calle Industria 34, Sur",
                "Av. Libertad 56, Oeste",
                "Calle Flores 12, Centro",
                "Plaza España 3, Norte",
                "Calle Sol 78, Este",
                "Av. Universidad 90, Sur",
                "Calle Luna 23, Oeste",
                "Paseo Verde 45, Norte",
                "Calle Estrella 67, Centro",
                "Av. Progreso 11, Este",
                "Calle Paz 88, Sur"
              ].map((address, index) => (
                <div
                  key={index}
                  className="w-full px-5 py-2.5 bg-white rounded-[20px] border border-[rgba(255,255,255,0.56)] flex items-center gap-2 shadow-[0px_4px_32px_4px_rgba(0,0,0,0.10)] opacity-100"
                >
                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full p-2.5 bg-[rgba(255,255,255,0.24)] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(255,255,255,0.56)] flex items-center justify-center">
                      <Package className="w-6 h-6 text-[#22c55e]" strokeWidth={2} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <p className="text-sm font-['Nunito'] font-bold text-black leading-tight">{address}</p>
                      <p className="text-sm font-['Nunito'] text-[#22c55e]">Entrega completada</p>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full p-2.5 flex items-center justify-center bg-[#22c55e]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#22c55e]">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notification Center */}
        <NotificationCenter
          isOpen={isNotificationOpen}
          onClose={() => setIsNotificationOpen(false)}
        />

        {/* Debug buttons */}
        <div style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
          maxWidth: '500px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingBottom: '50px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <button
              onClick={() => {
                sessionStorage.removeItem('breakUsed');
                sessionStorage.removeItem('breakCountdown');
                setBreakUsed(false);
                setBreakCountdown(60);
                setIsOnBreak(false);
                setIsBreakExpired(false);
                setShowBreakExceededModal(false);
                onBreakStateChange?.(false);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                transition: 'all 0.2s',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                height: '32px',
                padding: '0 12px',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#e2e8f0'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f1f5f9'}
            >
              Activar Descanso
            </button>
            
            <button
              onClick={() => {
                const newErrorState = !errorsActive;
                setErrorsActive(newErrorState);
                if (newErrorState) {
                  setIsBreakExpired(true);
                  setBreakUsed(true);
                  setIsOnBreak(false);
                  setDayCompleted(false);
                } else {
                  setIsBreakExpired(false);
                  setBreakUsed(false);
                  setIsOnBreak(false);
                  setDayCompleted(false);
                  onBreakStateChange?.(false);
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                transition: 'all 0.2s',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                height: '32px',
                padding: '0 12px',
                backgroundColor: errorsActive ? '#dc2626' : '#3b82f6',
                color: 'white',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = errorsActive ? '#b91c1c' : '#2563eb'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = errorsActive ? '#dc2626' : '#3b82f6'}
            >
              {errorsActive ? "Desactivar Errores" : "Activar Errores"}
            </button>

            <button
              onClick={() => {
                const newDayState = !dayCompleted;
                setDayCompleted(newDayState);
                if (newDayState) {
                  setErrorsActive(false);
                  setIsOnBreak(false);
                  setBreakUsed(true);
                  setIsBreakExpired(false);
                  onBreakStateChange?.(false);
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                transition: 'all 0.2s',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                height: '32px',
                padding: '0 12px',
                backgroundColor: dayCompleted ? '#16a34a' : '#22c55e',
                color: 'white',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = dayCompleted ? '#15803d' : '#16a34a'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = dayCompleted ? '#16a34a' : '#22c55e'}
            >
              {dayCompleted ? "Resetear Día" : "Finalizar Día"}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div
        drag="y"
        dragConstraints={{ top: -400, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ y }}
        animate={{
          background: errorsActive
            ? "linear-gradient(180deg, #FF6B35 0%, #F7931E 50%, #FFD23F 100%)"
            : isBreakExpired
            ? "linear-gradient(180deg, #FF0000 0%, #CC0000 50%, #FF0000 100%)"
            : isOnBreak
            ? "linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)"
            : "linear-gradient(180deg, #331FFF 0%, #4150FD 50%, #3B3AFF 100%)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-full pt-10  rounded-[60px] flex flex-col justify-between items-center relative touch-none"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden rounded-[60px]">
          <img
            src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/Jaring%201.png"
            alt=""
            className="w-[334px] h-[364px] opacity-40"
            style={{ marginTop: '25%' }}
          />
        </div>

        {/* Top Content */}
        <div className="flex flex-col items-center gap-2.5 relative z-10 w-full">
          {/* Header */}
          <div className="w-[381px] px-[15px] flex flex-col gap-[18px]">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                {/* Logo */}
                <div className="h-[32px] w-[41px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 41 32"
                  >
                    <path d={svgPaths.p301a1c00} fill="white" />
                    <path
                      d={svgPaths.p2cc8ed00}
                      fill="#E7E7E7"
                    />
                  </svg>
                </div>

                {/* Notification Button */}
                <button
                  onClick={() => setIsNotificationOpen(true)}
                  className="relative w-11 h-11 px-[13px] py-[5.20px] bg-[rgba(255,255,255,0.24)] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] rounded-full border-[0.65px] border-[rgba(255,255,255,0.56)] flex items-center justify-center"
                >
                  <Bell
                    className="w-5 h-5 text-white"
                    strokeWidth={1.5}
                  />
                  <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 px-[3px] py-[1px] bg-[#EC3E55] border border-[rgba(255,255,255,0.56)] rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-['Inter'] font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      <NumberFlow value={notificationCount} />
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="w-[289px] text-white text-[32px] font-['Inter'] font-medium leading-[1.4] tracking-[-1.28px]">
                  {dayCompleted 
                    ? "¡Excelente trabajo, José!" 
                    : errorsActive 
                    ? "¡Atención, José!" 
                    : "Buen día, José."
                  }
                </h2>
                <p className="text-white text-sm font-['Nunito']">
                  {dayCompleted 
                    ? "Has completado todas tus rutas del día exitosamente."
                    : errorsActive 
                    ? "Tienes varios problemas que requieren atención inmediata en tus rutas." 
                    : "A continuación tienes un resumen de tus rutas faltantes el día de hoy."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Time Display / Break Section */}
          {!isExpanded && (
            <div className="w-[381px] flex flex-col items-center gap-4 mx-[0px] my-[15px]">
              <motion.div
                animate={{
                  backgroundColor: dayCompleted
                    ? "#10B981"
                    : errorsActive
                    ? "#FF6B35"
                    : isBreakExpired
                    ? "#CC0000"
                    : isOnBreak
                    ? "#000000"
                    : "#4839FF",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="w-[361px] px-[25px] py-[10px] rounded-[20px] flex items-center justify-between overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isOnBreak ? (
                    <motion.div
                      key="break"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center w-full"
                    >
                      <span className="text-white text-sm font-['Nunito'] text-center">
                        {dayCompleted
                          ? "¡Jornada completada exitosamente!"
                          : errorsActive
                          ? "¡Sistema con errores críticos!"
                          : isBreakExpired
                          ? "Hora de volver a la jornada"
                          : "Tiempo restante de descanso"
                        }
                      </span>
                      <span className="text-white text-5xl font-['Median'] leading-[45.60px] flex items-center gap-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {breakCountdown >= 0 ? (
                          <>
                            <NumberFlow value={breakCountdown} /> <span className="text-2xl leading-none">minutos</span>
                          </>
                        ) : (
                          <>
                            <span className="text-red-300">-</span><NumberFlow value={Math.abs(breakCountdown)} /> <span className="text-2xl leading-none">minutos</span>
                          </>
                        )}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="work"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex flex-col items-center text-center text-white">
                        <p className="font-['Nunito'] text-sm">
                          Hora de inicio
                        </p>
                        <p className="font-['Median'] leading-[0.95]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                          <span className="text-5xl"><NumberFlow value={startHour} />:<NumberFlow value={startMinute} format={{ minimumIntegerDigits: 2 }} /></span>
                          <span className="text-base">A.M</span>
                        </p>
                      </div>
                      <div className="w-[18px] h-[58px] border-l border-white/20" />
                      <div className="flex flex-col items-center text-center text-white">
                        <p className="font-['Nunito'] text-sm">
                          Hora de finalización
                        </p>
                        <p className="font-['Median'] leading-[0.95]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                          <span className="text-5xl"><NumberFlow value={endHour} />:<NumberFlow value={endMinute} format={{ minimumIntegerDigits: 2 }} /></span>
                          <span className="text-base">p.M</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Buttons Container */}
              <div className="w-full flex flex-col items-center gap-2">
                {/* Primary CTA - Start Next Route or Finish Day */}
                <button
                  onClick={() => dayCompleted ? onFinishDay() : isOnBreak ? handleBreakToggle() : handleRouteStartAttempt(onRouteStart)}
                  className="w-[327px] bg-white rounded-full shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] px-4 py-4 text-center"
                >
                  <span className="font-['Nunito'] text-sm font-bold text-black text-center block">
                    {dayCompleted 
                      ? "Finalizar Jornada" 
                      : isOnBreak 
                      ? "Continuar jornada" 
                      : "Iniciar Siguiente Recorrido"}
                  </span>
                </button>

                {/* Secondary - Break Button (Less prominent) - Hidden when on break */}
                {!isOnBreak && (
                  <button
                    onClick={handleBreakToggle}
                    disabled={breakUsed}
                    className={`w-[327px] px-4 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 ${
                      breakUsed 
                        ? "bg-[rgba(255,255,255,0.08)] text-white/30 border border-[rgba(255,255,255,0.16)] cursor-not-allowed opacity-40" 
                        : "bg-[rgba(255,255,255,0.24)] text-white border border-[rgba(255,255,255,0.56)] cursor-pointer"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key="start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-['Nunito'] text-sm text-center block text-white"
                      >
                        Iniciar descanso
                      </motion.span>
                    </AnimatePresence>
                  </button>
                )}

                {/* Break info text below buttons */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isOnBreak ? "break-text" : breakUsed ? "no-break-text" : "work-text"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-[327px] text-center text-white text-xs font-['Nunito'] mt-1"
                  >
                    {isOnBreak
                      ? "Presiona el botón para continuar con tu jornada"
                      : breakUsed
                      ? "No tienes descansos disponibles para el resto del día"
                      : "Tienes 60 minutos de descanso disponible"}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          )}

          {isExpanded && (
            <motion.div
              animate={{
                backgroundColor: dayCompleted
                  ? "#10B981"
                  : errorsActive
                  ? "#FF6B35"
                  : isBreakExpired
                  ? "#CC0000"
                  : isOnBreak
                  ? "#000000"
                  : "#4839FF",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-[361px] px-[25px] py-[10px] rounded-[20px] flex items-center justify-between overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isOnBreak ? (
                  <motion.div
                    key="break"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center w-full"
                  >
                    <span className="text-white text-sm font-['Nunito'] text-center">
                      {dayCompleted
                        ? "¡Jornada completada exitosamente!"
                        : errorsActive
                        ? "¡Sistema con errores críticos!"
                        : isBreakExpired
                        ? "Hora de volver a la jornada"
                        : "Tiempo restante de descanso"
                      }
                    </span>
                    <span className="text-white text-5xl font-['Median'] leading-[45.60px] flex items-center gap-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {breakCountdown >= 0 ? (
                        <>
                          <NumberFlow value={breakCountdown} /> <span className="text-2xl leading-none">minutos</span>
                        </>
                      ) : (
                        <>
                          <span className="text-red-300">-</span><NumberFlow value={Math.abs(breakCountdown)} /> <span className="text-2xl leading-none">minutos</span>
                        </>
                      )}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="work"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex flex-col items-center text-center text-white">
                      <p className="font-['Nunito'] text-sm">
                        Hora de inicio
                      </p>
                      <p className="font-['Median'] leading-[0.95]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        <span className="text-5xl"><NumberFlow value={startHour} />:<NumberFlow value={startMinute} format={{ minimumIntegerDigits: 2 }} /></span>
                        <span className="text-base">A.M</span>
                      </p>
                    </div>
                    <div className="w-[18px] h-[58px] border-l border-white/20" />
                    <div className="flex flex-col items-center text-center text-white">
                      <p className="font-['Nunito'] text-sm">
                        Hora de finalización
                      </p>
                      <p className="font-['Median'] leading-[0.95]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        <span className="text-5xl"><NumberFlow value={endHour} />:<NumberFlow value={endMinute} format={{ minimumIntegerDigits: 2 }} /></span>
                        <span className="text-base">p.M</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {isExpanded && (
            <AnimatePresence mode="wait">
              <motion.p
                key={
                  isOnBreak
                    ? "break-text-expanded"
                    : breakUsed
                    ? "no-break-text-expanded"
                    : "work-text-expanded"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-[381px] text-center text-white text-sm font-['Nunito']"
              >
                {isOnBreak
                  ? "Presiona el botón para continuar con tu jornada"
                  : breakUsed
                  ? "No tienes descansos disponibles para el resto del día"
                  : "Tienes una hora de descanso disponible"}
              </motion.p>
            </AnimatePresence>
          )}

          {/* Divider */}
          <div className="w-full h-px border-t border-dashed border-[rgba(255,255,255,0.30)]" />

          {/* Progress Section */}
          <div className="w-full px-2.5 flex flex-col gap-1.5 px-[10px] py-[20px]">
            <div className="flex items-center justify-center">
              <span className="flex-1 text-white text-sm font-['Nunito'] font-bold">
                Progreso Actual:
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="px-[5px] flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[3.67px] h-[3.82px] border border-white" />
                    <svg
                      className="w-[11px] h-[10px]"
                      fill="none"
                      viewBox="0 0 13 15"
                    >
                      <path
                        d={svgPaths.p3f8c9600}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={svgPaths.p2bc8a980}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={svgPaths.p2338e700}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="w-[3.67px] h-[3.82px] border border-white" />
                  </div>
                  <span className="text-white text-xs font-['Nunito'] font-bold text-[11px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <NumberFlow value={deliveredCount} />/<NumberFlow value={totalDeliveries} /> entregas completadas
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-[11px] h-[11px]"
                    fill="none"
                    viewBox="0 0 11 11"
                  >
                    <path
                      d={svgPaths.p105d7900}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d={svgPaths.p1f658e00}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-xs font-['Nunito'] font-bold text-[11px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    Aproximadamente <NumberFlow value={estimatedHours} />hr <NumberFlow value={estimatedMinutes} />mins
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-[60px] bg-[rgba(255,255,255,0.03)] rounded-[50px] border-l border-r border-[rgba(255,255,255,0.45)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: totalDeliveries > 0
                      ? `${(deliveredCount / totalDeliveries) * 100}%`
                      : 0
                  }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="absolute left-px top-px h-[58px] bg-[rgba(246,246,246,0.9)] rounded-[38px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Routes Section */}
        <div
          className={`w-full h-auto pt-[15px] bg-white  rounded-t-[40px] flex flex-col items-center gap-5 relative transition-all`}>
          {/* Decorative line */}
          <div style={{
            width: '60%',
            height: '5px',
            backgroundColor: '#d7d7d7ff',
            borderRadius: '999px',
            opacity: 0.8
          }} />

          <div className="w-full px-[20px] flex items-center justify-center m-[0px] py-[0px]">
            <div className="flex-1">
              <span className="text-[#2A2A2A] text-sm font-['Nunito'] font-bold">
                {dayCompleted 
                  ? " Resumen del Día:" 
                  : errorsActive 
                  ? " Rutas con Problemas:" 
                  : "Siguientes Rutas:"
                }
                <br />
              </span>
              <span className="text-[#2A2A2A] text-sm font-['Nunito']" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {dayCompleted 
                  ? <>Has completado todas las <NumberFlow value={totalDeliveries} /> entregas asignadas para hoy.</>
                  : errorsActive 
                  ? <>Tienes <NumberFlow value={routesCount} /> rutas con retrasos y problemas de entrega.</>
                  : <>Tienes <NumberFlow value={routesCount} /> rutas faltantes para el resto del día.</>
                }
              </span>
            </div>
          </div>

          <div className="w-full px-2.5 flex flex-col gap-[15px]">
            <RouteCard
              address="Av. Principal 123, Centro"
              status="current"
              onClick={() => handleRouteStartAttempt(onRouteStart)}
            />

            <RouteCard
              address="Calle Comercio 45, Norte"
              status="next"
              disabled
            />

            <RouteCard
              address="Plaza Mayor 7, Este"
              status="next"
              disabled
            />

            <RouteCard
              address="Paseo Marítimo 89, Costa"
              status="next"
              disabled
            />

            <RouteCard
              address="Calle Industria 34, Sur"
              status="next"
              disabled
            />

            <RouteCard
              address="Av. Libertad 56, Oeste"
              status="next"
              disabled
            />

            <RouteCard
              address="Calle Flores 12, Centro"
              status="next"
              disabled
            />

            <RouteCard
              address="Plaza España 3, Norte"
              status="next"
              disabled
            />
          </div>
        </div>

  {/* Bottom Navigation Menu moved to MobileLayout to ensure it's a direct child of the page container */}
      </motion.div>

      {/* Notification Center */}
      <NotificationCenter
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      {/* Debug buttons positioned outside main container */}
      <div style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        maxWidth: '500px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '50px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
          {/* First row - 2 buttons */}
        {/* Reset break state button */}
        <button
          onClick={() => {
            sessionStorage.removeItem('breakUsed');
            sessionStorage.removeItem('breakCountdown');
            setBreakUsed(false);
            setBreakCountdown(60);
            setIsOnBreak(false);
            setIsBreakExpired(false);
            setShowBreakExceededModal(false);
            onBreakStateChange?.(false);
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '500',
            transition: 'all 0.2s',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            height: '32px',
            padding: '0 12px',
            backgroundColor: '#f1f5f9',
            color: '#475569',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#e2e8f0'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f1f5f9'}
        >
          Activar Descanso
        </button>
        
        {/* Toggle error states button */}
        <button
          onClick={() => {
            const newErrorState = !errorsActive;
            setErrorsActive(newErrorState);
            if (newErrorState) {
              // Force break to be expired when errors are active
              setIsBreakExpired(true);
              setBreakUsed(true);
              setIsOnBreak(false);
              setDayCompleted(false);
            } else {
              // Reset error states when deactivating errors
              setIsBreakExpired(false);
              setBreakUsed(false);
              setIsOnBreak(false);
              setDayCompleted(false);
              onBreakStateChange?.(false);
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '500',
            transition: 'all 0.2s',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            height: '32px',
            padding: '0 12px',
            backgroundColor: errorsActive ? '#dc2626' : '#3b82f6',
            color: 'white',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = errorsActive ? '#b91c1c' : '#2563eb'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = errorsActive ? '#dc2626' : '#3b82f6'}
        >
          {errorsActive ? "Desactivar Errores" : "Activar Errores"}
        </button>

        {/* Toggle day completed state button */}
        <button
          onClick={() => {
            const newDayState = !dayCompleted;
            setDayCompleted(newDayState);
            if (newDayState) {
              // When day is completed, reset other states
              setErrorsActive(false);
              setIsOnBreak(false);
              setBreakUsed(true);
              setIsBreakExpired(false);
              onBreakStateChange?.(false);
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '500',
            transition: 'all 0.2s',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            height: '32px',
            padding: '0 12px',
            backgroundColor: dayCompleted ? '#16a34a' : '#22c55e',
            color: 'white',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = dayCompleted ? '#15803d' : '#16a34a'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = dayCompleted ? '#16a34a' : '#22c55e'}
        >
          {dayCompleted ? "Resetear Día" : "Finalizar Día"}
        </button>
        </div>
      </div>

          {/* Confirm start route modal when attempting to start during break */}
          {showConfirmStartModal && (
            <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={cancelStartDuringBreak}>
              <div className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Iniciar recorrido?</h2>
                <p className="text-[#494949] text-center mb-6 font-['Nunito']">Al iniciar tu recorrido, tu descanso finalizará. No podrás iniciarlo de nuevo, así que te sugerimos descansar un poco más.</p>

                <div className="flex flex-col gap-3">
                  <button onClick={confirmStartRouteDuringBreak} className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Finalizar descanso e iniciar recorrido</button>
                  <button onClick={cancelStartDuringBreak} className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Cancelar</button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Confirm start break modal */}
          {showConfirmBreakModal && (
            <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={cancelStartBreak}>
              <div className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Iniciar descanso?</h2>
                <p className="text-[#494949] text-center mb-6 font-['Nunito']">Al iniciar tu descanso no podrás continuar con las rutas. Si cancelas el descanso antes de que termine, perderás el tiempo restante (no es acumulable). Si excedes el tiempo de descanso, se notificará a tu administrador.</p>

                <div className="flex flex-col gap-3">
                  <button onClick={confirmStartBreak} className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Iniciar descanso</button>
                  <button onClick={cancelStartBreak} className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Cancelar</button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Confirm exit break modal */}
          {showConfirmExitBreakModal && (
            <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={cancelExitBreak}>
              <div className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Salir del descanso?</h2>
                <p className="text-[#494949] text-center mb-6 font-['Nunito']">Realmente quieres salir del descanso aunque te quede tiempo. Este tiempo se perderá y no se podrá reanudar durante el resto del día.</p>

                <div className="flex flex-col gap-3">
                  <button onClick={confirmExitBreak} className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Sí, salir del descanso</button>
                  <button onClick={cancelExitBreak} className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors">Cancelar</button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Break time exceeded modal */}
          {showBreakExceededModal && (
            <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl" role="dialog" aria-modal="true">
                <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">Tiempo de descanso excedido</h2>
                <p className="text-[#494949] text-center mb-6 font-['Nunito']">Has excedido tu tiempo de descanso en más de 10 minutos. Se notificará automáticamente a tu administrador y debes continuar con tu jornada.</p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={finishBreakFromModal}
                    className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
                  >
                    Entendido, continuar con mi jornada
                  </button>

                </div>
              </div>
            </motion.div>
          )}
    </>
  );
}