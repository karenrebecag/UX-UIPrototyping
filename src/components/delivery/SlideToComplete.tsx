import { useState, useEffect } from "react";
import { Slider, SliderThumb } from "../ui/slider";
import { ChevronRight } from "lucide-react";

interface SlideToCompleteProps {
  onComplete: () => void;
  text?: string;
  hint?: string;
}

export function SlideToComplete({
  onComplete,
  text = "completar entrega",
  hint = "Mantén presionado y desliza para completar",
}: SlideToCompleteProps) {
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
        <div className="w-full h-[60px] pt-3 pb-3 bg-gradient-to-r from-[#3629FF] to-[#0C68E1] rounded-[50px] flex items-center justify-center opacity-0 transition-opacity duration-300">
          <span className="text-white text-xl font-['Inter'] font-medium uppercase leading-7">
            Completando...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full h-[60px] pt-3 pb-3 relative bg-[rgba(45.98,45.98,45.98,0.03)] rounded-[50px] border-l border-r border-black/45 overflow-hidden">
        {/* Animated background fill based on slider value */}
        <div
          className="absolute left-[1px] top-[1px] h-[58px] bg-gradient-to-r from-[#3629FF] to-[#0C68E1] rounded-[38px]"
          style={{
            width: `${value[0]}%`,
            opacity: 1,
          }}
        />

        {/* Static text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-xl font-['Inter'] font-medium uppercase leading-7 transition-colors duration-200"
            style={{
              color: value[0] > 50 ? '#FFFFFF' : '#2D2D2D',
              opacity: 1
            }}
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
            <SliderThumb className="size-[58px] border-0 bg-gradient-to-r from-[#3629FF] to-[#0C68E1] rounded-[38px] shadow-none flex items-center justify-center cursor-grab active:cursor-grabbing">
              <div className="flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </SliderThumb>
          </Slider>
        </div>
      </div>
    </div>
  );
}
