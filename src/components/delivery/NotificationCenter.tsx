import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Package, Truck, AlertCircle } from "lucide-react";

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  bgColor: string;
}

export function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  const todayNotifications: Notification[] = [
    {
      id: "1",
      title: "Nueva ruta asignada",
      description: "Tienes 5 entregas pendientes para completar hoy",
      time: "hace 9min",
      bgColor: "#EEF3F1"
    },
    {
      id: "2",
      title: "Descanso disponible",
      description: "Recuerda tomar tu hora de descanso durante tu jornada",
      time: "hace 14min",
      bgColor: "#FFF4DE"
    },
    {
      id: "3",
      title: "Mantenimiento del vehículo",
      description: "Revisión programada para mañana a las 8:00 AM",
      time: "hace 9min",
      bgColor: "#FFEFF1"
    }
  ];

  const yesterdayNotifications: Notification[] = [
    {
      id: "4",
      title: "Ruta completada",
      description: "Felicitaciones por completar todas tus entregas a tiempo",
      time: "hace 9min",
      bgColor: "#EEF3F1"
    },
    {
      id: "5",
      title: "Combustible bajo",
      description: "Recuerda recargar combustible antes de tu próxima ruta",
      time: "hace 14min",
      bgColor: "#FFF4DE"
    },
    {
      id: "6",
      title: "Actualización disponible",
      description: "Nueva versión de la app con mejoras de rendimiento",
      time: "hace 9min",
      bgColor: "#FFEFF1"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="absolute inset-0 w-full h-full pt-10 bg-white overflow-hidden rounded-[60px] flex flex-col"
          style={{ zIndex: 60 }}
        >
          <div className="flex-1 px-[13px] py-[30px] flex flex-col gap-[22px] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start gap-3">
              <button onClick={onClose} className="w-6 h-6">
                <ChevronLeft className="w-6 h-6 text-[#282A37]" strokeWidth={1.5} />
              </button>
              <h2 className="text-[#282A37] text-[20px] font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-6 tracking-[0.4px]">
                Notificaciones
              </h2>
            </div>

            {/* Today Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#515978] text-sm font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-6 tracking-[0.28px]">
                Hoy
              </h3>
              <div className="flex flex-col gap-3">
                {todayNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="w-[357px] h-24 bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden relative"
                  >
                    <div 
                      className="w-12 h-12 absolute left-4 top-[15px] rounded-full"
                      style={{ backgroundColor: notification.bgColor }}
                    />
                    <div className="absolute left-[72px] top-[14px] flex flex-col gap-1">
                      <p className="text-black text-sm font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-6 tracking-[0.28px]">
                        {notification.title}
                      </p>
                      <p className="w-[260px] text-[#515978] text-xs font-['Plus_Jakarta_Sans:Regular',_sans-serif] leading-5 tracking-[0.24px]">
                        {notification.description}
                      </p>
                    </div>
                    <div className="absolute left-[286px] top-[14px] text-[#515978] font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-6 tracking-[0.24px] text-[11px]">
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Yesterday Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#515978] text-sm font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-6 tracking-[0.28px]">
                Ayer
              </h3>
              <div className="flex flex-col gap-3">
                {yesterdayNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="h-24 bg-white overflow-hidden rounded-2xl relative"
                  >
                    <div 
                      className="w-12 h-12 absolute left-4 top-[15px] rounded-full"
                      style={{ backgroundColor: notification.bgColor }}
                    />
                    <div className="absolute left-[72px] top-[14px] flex flex-col gap-1">
                      <p className="text-black text-sm font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-6 tracking-[0.28px]">
                        {notification.title}
                      </p>
                      <p className="w-[260px] text-[#515978] text-xs font-['Plus_Jakarta_Sans:Regular',_sans-serif] leading-5 tracking-[0.24px]">
                        {notification.description}
                      </p>
                    </div>
                    <div className="absolute left-[286px] top-[14px] text-[#515978] font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-6 tracking-[0.24px] text-[11px]">
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
