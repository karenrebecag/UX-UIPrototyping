import { motion } from "motion/react";
import { ReactNode } from "react";
import { ChevronLeft, Home, Package, User } from "lucide-react";

interface MobileLayoutProps {
  children: ReactNode;
  showDecoration?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
  showBottomNav?: boolean;
  hideBottomNavForModals?: boolean;
  isDayCompleted?: boolean;
  isErrorActive?: boolean;
}

export function MobileLayout({
  children,
  showDecoration = false,
  showBackButton = false,
  onBack,
  showBottomNav = false,
  hideBottomNavForModals = false,
  isDayCompleted = false,
  isErrorActive = false,
}: MobileLayoutProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-gradient-to-b from-[#331FFF] via-[#4150FD] to-[#3B3AFF] rounded-[60px] overflow-hidden relative shadow-2xl mx-[0px] my-[11px] px-[0px] py-[-25px] pb">
        {showDecoration && (
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden rounded-[60px]">
            <img
              src="https://pub-3ed7c563bcaa4c7c8ed703c87bbc1631.r2.dev/Jaring%201.png"
              alt=""
              className="w-[334px] h-[364px] opacity-40"
              style={{ marginTop: '25%' }}
            />
          </div>
        )}
        
        {showBackButton && onBack && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="absolute top-6 left-6 z-50 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg hover:bg-white/30 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>
        )}
        
        {children}

        {/* Bottom Navigation - fixed to bottom of the rounded container (visible only when showBottomNav=true) */}
        {showBottomNav && !hideBottomNavForModals && (
          <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2 z-50 w-full px-8">
            <motion.div
              animate={{
                backgroundColor: isDayCompleted
                  ? "rgba(42, 204, 94, 0.85)" // Green with transparency for day completed
                  : "rgba(255, 255, 255, 1)", // White solid for normal and error states
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full px-20 py-[17px] backdrop-blur-[2px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] rounded-[150px] border border-[rgba(255,255,255,0.56)] flex justify-center items-center gap-10"
            >
              <button className="w-11 h-11 flex items-center justify-center">
                <Home className={`w-6 h-6 ${isDayCompleted ? 'text-white' : 'text-[#2B2B2B]'}`} strokeWidth={2} />
              </button>

              <button className="w-11 h-11 flex items-center justify-center">
                <Package className={`w-6 h-6 ${isDayCompleted ? 'text-white' : 'text-[#2B2B2B]'}`} strokeWidth={2} />
              </button>

              <button className="w-11 h-11 flex items-center justify-center">
                <User className={`w-6 h-6 ${isDayCompleted ? 'text-white' : 'text-[#2B2B2B]'}`} strokeWidth={2} />
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ScreenContainerProps {
  children: ReactNode;
  bottomSheet?: ReactNode;
}

export function ScreenContainer({
  children,
  bottomSheet,
}: ScreenContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center justify-between pt-10"
    >
      <div className="flex-1 w-full px-4 flex flex-col gap-5">
        {children}
      </div>

      {bottomSheet && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          className="w-full bg-white rounded-t-[40px] shadow-2xl"
        >
          {bottomSheet}
        </motion.div>
      )}
    </motion.div>
  );
}