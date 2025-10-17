import { useState, useEffect } from "react";
import { TimeDisplay } from "./TimeDisplay";
import { Button } from "./Button";

export function BreakTimer() {
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [remainingMinutes, setRemainingMinutes] = useState(60);

  useEffect(() => {
    if (isOnBreak && remainingMinutes > 0) {
      const timer = setInterval(() => {
        setRemainingMinutes(prev => {
          if (prev <= 1) {
            setIsOnBreak(false);
            return 60;
          }
          return prev - 1;
        });
      }, 60000); // 1 minute

      return () => clearInterval(timer);
    }
  }, [isOnBreak, remainingMinutes]);

  const handleToggleBreak = () => {
    if (!isOnBreak) {
      setRemainingMinutes(60);
    }
    setIsOnBreak(!isOnBreak);
  };

  return (
    <div className="w-full flex flex-col items-center gap-2.5">
      <div className="w-[361px]">
        <TimeDisplay 
          mode={isOnBreak ? 'break' : 'normal'} 
          breakMinutesRemaining={remainingMinutes}
        />
      </div>

      <div className="w-[381px] text-center text-white text-sm font-['Nunito']">
        {isOnBreak 
          ? "Presiona el botón de nuevo para pausar tu descanso"
          : "Tienes 60 minutos de descanso disponible"
        }
      </div>

      <div className="w-[327px]">
        <Button 
          variant="secondary" 
          onClick={handleToggleBreak}
        >
          {isOnBreak ? "Pausar descanso" : "Iniciar descanso"}
        </Button>
      </div>
    </div>
  );
}
