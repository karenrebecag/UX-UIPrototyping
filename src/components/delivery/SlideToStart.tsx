import { useState, useEffect } from "react";
import { Slider, SliderThumb } from "../ui/slider";
import { ChevronRight } from "lucide-react";

interface SlideToStartProps {
  onComplete: () => void;
  text?: string;
  /** Small hint shown above the slider */
  hint?: string;
}

export function SlideToStart({
  onComplete,
  text = "Desliza para iniciar",
  hint = "Mantén presionado y desliza para iniciar",
}: SlideToStartProps) {
  const [value, setValue] = useState([0]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // When slider reaches 100%, trigger completion
    if (value[0] >= 100 && !isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 300);
    }
  }, [value, isComplete, onComplete]);

  // Handle value change with auto-reset if not at 100%
  const handleValueChange = (newValue: number[]) => {
    setValue(newValue);
  };

  const handleValueCommit = (committedValue: number[]) => {
    // If user releases before 100%, reset to 0
    if (committedValue[0] < 100) {
      setTimeout(() => {
        setValue([0]);
      }, 100);
    }
  };

  if (isComplete) {
    return (
      <div className="w-full">
        <div className="w-full text-center mb-2">
          <span className="text-[#2D2D2D]/40 text-sm font-['Nunito']">{hint}</span>
        </div>
        <div className="w-full h-[60px] pt-3 pb-3 bg-gradient-to-r from-[#F8FD00] to-[#FBFF4B] rounded-[50px] flex items-center justify-center opacity-0 transition-opacity duration-300">
          <span className="text-[#2D2D2D] text-xl font-['Inter'] font-medium uppercase leading-7">
            Iniciando...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full text-center mb-2">
        <span className="text-[#2D2D2D]/40 text-sm font-['Nunito']">{hint}</span>
      </div>
      <div className="w-full h-[60px] pt-3 pb-3 relative bg-[rgba(45.98,45.98,45.98,0.03)] rounded-[50px] border-l border-r border-black/45 overflow-hidden">
        {/* Animated background fill based on slider value */}
        <div
          className="absolute left-[1px] top-[1px] h-[58px] bg-gradient-to-r from-[#F8FD00] to-[#FBFF4B] rounded-[38px] transition-all duration-150"
          style={{
            width: `${value[0]}%`,
            opacity: 0.03 + (value[0] / 100) * 0.97,
          }}
        />

        {/* Static text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[#2D2D2D] text-xl font-['Inter'] font-medium uppercase leading-7"
            style={{ opacity: 0.4 + (value[0] / 100) * 0.6 }}
          >
            {text}
          </span>
        </div>

        {/* Custom Slider */}
        <div className="absolute inset-0 px-[1px] py-[1px] z-10">
          <Slider
            value={value}
            onValueChange={handleValueChange}
            onValueCommit={handleValueCommit}
            max={100}
            step={1}
            className="h-full w-full"
          >
            <SliderThumb className="size-[58px] border-0 bg-gradient-to-r from-[#F8FD00] to-[#FBFF4B] rounded-[38px] shadow-none flex items-center justify-center cursor-grab active:cursor-grabbing">
              <div className="flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
            </SliderThumb>
          </Slider>
        </div>
      </div>
    </div>
  );
}
