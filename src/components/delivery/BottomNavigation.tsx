import { motion } from "motion/react";
import { Home, Package, User } from "lucide-react";

interface BottomNavigationProps {
  activeTab?: "home" | "routes" | "profile";
  onTabChange?: (tab: "home" | "routes" | "profile") => void;
}

export function BottomNavigation({ activeTab = "home", onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "home" as const, icon: Home, label: "Inicio" },
    { id: "routes" as const, icon: Package, label: "Rutas" },
    { id: "profile" as const, icon: User, label: "Perfil" }
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 25 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="px-20 py-[17px] bg-white/60 backdrop-blur-md shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] rounded-full border border-white/60 flex items-center gap-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className="relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 -m-2.5 bg-[#F8F8F8] rounded-full shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
                  transition={{ type: "spring", damping: 20 }}
                />
              )}
              <div className="relative p-2.5">
                <Icon className={`w-6 h-6 ${isActive ? "text-[#2B2B2B]" : "text-[#2B2B2B]/50"}`} />
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
