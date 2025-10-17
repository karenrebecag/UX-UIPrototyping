import { motion, useMotionValue, useTransform, PanInfo } from "motion/react";
import { useState } from "react";
import { RouteCard } from "./RouteCard";

interface Route {
  id: string;
  address: string;
  status: "current" | "next" | "completed";
  disabled?: boolean;
}

interface DraggableRoutesProps {
  routes: Route[];
  onRouteClick?: (routeId: string) => void;
}

export function DraggableRoutes({ routes, onRouteClick }: DraggableRoutesProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const y = useMotionValue(0);
  
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = -150;
    if (info.offset.y < threshold) {
      setIsExpanded(true);
    } else if (info.offset.y > 50) {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: isExpanded ? -400 : 0, bottom: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      animate={{ 
        y: isExpanded ? -400 : 0,
        height: isExpanded ? "calc(100vh - 100px)" : "auto"
      }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="w-full bg-white rounded-t-[40px] overflow-hidden absolute bottom-0 left-0 right-0 z-30"
      style={{ y }}
    >
      <div className="w-full pt-[15px] pb-20 flex flex-col gap-5">
        {/* Drag Handle */}
        <div className="w-full flex justify-center pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        <div className="px-[15px] flex items-center justify-between">
          <h3 className="text-[#2A2A2A] text-sm font-['Nunito'] font-bold">
            Próximas Entregas
          </h3>
          <span className="text-[#5C5C5C] text-xs font-['Nunito']">
            {routes.filter(r => !r.disabled).length} activas
          </span>
        </div>

        <div className="px-2.5 flex flex-col gap-[15px] overflow-y-auto max-h-[calc(100vh-300px)]">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <RouteCard
                address={route.address}
                status={route.status}
                disabled={route.disabled}
                onClick={() => !route.disabled && onRouteClick?.(route.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
