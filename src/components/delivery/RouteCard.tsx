import { motion } from "motion/react";
import { MapPin, ArrowUpRight, Package } from "lucide-react";
import { IconButton } from "./Button";

interface RouteCardProps {
  address: string;
  status: "current" | "next" | "completed";
  time?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function RouteCard({ address, status, time, onClick, disabled = false }: RouteCardProps) {
  const isActive = status === "current";
  const opacity = disabled ? "opacity-30" : "opacity-100";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: disabled ? 0.3 : 1, x: 0 }}
      className={`
        w-full px-5 py-2.5 bg-white rounded-[20px]
        border border-[rgba(255,255,255,0.56)]
        flex items-center gap-2
        ${isActive ? "shadow-[0px_4px_32px_4px_rgba(0,0,0,0.10)]" : ""}
        ${opacity}
      `}
    >
      <div className="flex-1 flex items-center gap-3">
        <div className={`
          w-11 h-11 rounded-full p-2.5
          bg-[rgba(255,255,255,0.24)] 
          shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]
          border border-[rgba(255,255,255,0.56)]
          flex items-center justify-center
        `}>
          {status === "next" ? (
            <Package className="w-6 h-6 text-[#373737] opacity-60" />
          ) : (
            <MapPin className="w-6 h-6 text-[#373737]" />
          )}
        </div>
        
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm font-['Nunito'] font-bold text-black leading-tight">
            {address}
          </p>
          <p className="text-sm font-['Nunito'] text-[#494949]">
            {isActive ? "Presiona aquí para iniciar ruta" : time || "Siguiente Entrega"}
          </p>
        </div>
      </div>
      
      <IconButton 
        icon="go" 
        variant={isActive ? "active" : "inactive"}
        onClick={onClick}
      />
    </motion.div>
  );
}
