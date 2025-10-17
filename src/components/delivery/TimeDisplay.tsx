interface TimeDisplayProps {
  mode?: 'normal' | 'break';
  breakMinutesRemaining?: number;
}

export function TimeDisplay({ mode = 'normal', breakMinutesRemaining = 60 }: TimeDisplayProps) {
  if (mode === 'break') {
    return (
      <div className="w-full px-[25px] py-2.5 bg-[#4839FF] rounded-[20px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm font-['Nunito'] text-center">
            Tiempo restante de descanso
          </span>
          <span className="text-white text-5xl font-['Median'] leading-[45.60px]">
            {breakMinutesRemaining} minutos
          </span>
        </div>
      </div>
    );
  }

  // Normal mode - show start and end time
  return (
    <div className="w-full px-[25px] py-2.5 bg-[#4839FF] rounded-[20px] flex items-center justify-between">
      <div className="flex flex-col items-center text-center text-white">
        <p className="font-['Nunito'] text-sm">Hora de inicio</p>
        <p className="font-['Median'] leading-[0.95]">
          <span className="text-5xl">9:00</span>
          <span className="text-base">A.M</span>
        </p>
      </div>

      <div className="w-[18px] h-[58px] border-l border-white/20" />

      <div className="flex flex-col items-center text-center text-white">
        <p className="font-['Nunito'] text-sm">Hora de finalización</p>
        <p className="font-['Median'] leading-[0.95]">
          <span className="text-5xl">3:00</span>
          <span className="text-base">p.M</span>
        </p>
      </div>
    </div>
  );
}
