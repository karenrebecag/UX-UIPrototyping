import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, TriangleAlert, CornerUpRight, Pause, Phone, Bell } from "lucide-react";
import { SlideToStart } from "../SlideToStart";
import { SlideToComplete } from "../SlideToComplete";
import { NotificationCenter } from "../NotificationCenter";
import { PhotoCaptureScreen } from "./PhotoCaptureScreen";
import { RouteSuccessScreen } from "./RouteSuccessScreen";
import { MapboxMap } from "../../ui/MapboxMap";
import imgImage from "../../../imports/figma:asset/3cf18863e4ae3e38ace5c9015135b31f9529eb10.png";
import imgMap from "../../../imports/figma:asset/219b945971015d0149989780600caceb9b896c85.png";
import svgPaths from "../../../imports/svg-roa5afa83z";
import svgPathsLogo from "../../../imports/svg-bjdzyzzf1j";

type RouteState = "enRoute" | "arriving" | "photoCapture" | "routeSuccess";

interface ActiveRouteScreenProps {
  onBack: () => void;
}

export function ActiveRouteScreen({ onBack }: ActiveRouteScreenProps) {
  const [routeState, setRouteState] = useState<RouteState>("enRoute");
  const [isPaused, setIsPaused] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  // Transition to "arriving" state after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (routeState === "enRoute") {
        setRouteState("arriving");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [routeState]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleBackClick = () => {
    setShowCancelPopup(true);
  };

  const handleContinueRoute = () => {
    setShowCancelPopup(false);
  };

  const handleCancelRoute = () => {
    setShowCancelPopup(false);
    onBack();
  };

  const handleCompleteDelivery = () => {
    setRouteState("photoCapture");
  };

  const handlePhotoTaken = () => {
    setRouteState("routeSuccess");
  };

  const handleFinishRoute = () => {
    onBack();
  };

  const handleReportIssue = () => {
    // Could navigate to an issue report screen
    console.log("Report issue");
  };

  // Show different screens based on route state
  if (routeState === "photoCapture") {
    return <PhotoCaptureScreen onPhotoTaken={handlePhotoTaken} />;
  }

  if (routeState === "routeSuccess") {
    return (
      <RouteSuccessScreen
        onFinishRoute={handleFinishRoute}
        onReportIssue={handleReportIssue}
      />
    );
  }

  return (
    <>
      <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#331fff] gap-[20px] items-center justify-end overflow-clip pb-0 pt-[4px] px-0 relative size-full to-[#3b3aff] via-50% via-[#4150fd]">
        {/* Header with 3 elements */}
        <div className="w-full max-w-[381px] px-[15px] pt-2 pb-0 flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="bg-[rgba(255,255,255,0.24)] box-border flex items-center justify-center px-[13px] py-[5.2px] rounded-[130px] size-[44px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
            style={{ outline: '0.65px rgba(255, 255, 255, 0.56) solid', outlineOffset: '-0.65px' }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Title */}
          <h1 className="text-white font-['Nunito']">Recorrido Actual</h1>

          {/* More Button */}
          <button
            onClick={() => setShowReportModal(true)}
            className="bg-[rgba(255,255,255,0.24)] box-border flex items-center justify-center px-[13px] py-[5.2px] rounded-[130px] size-[44px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]"
            style={{ outline: '0.65px rgba(255, 255, 255, 0.56) solid', outlineOffset: '-0.65px' }}
          >
            <TriangleAlert className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[10px] h-[757px] items-center overflow-clip relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 w-full my-[-25px] mx-[0px] px-[0px]  pr-[0px] pb-[0px] pl-[0px] mt-[-11px] mr-[0px] mb-[-29px] ml-[0px]">

        {/* Map and Content */}
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          {/* Map - Different size based on state */}
          <AnimatePresence mode="wait">
            {routeState === "enRoute" ? (
              <motion.div
                key="enRoute"
                initial={{ height: 530 }}
                animate={{ height: 530 }}
                exit={{ height: 480, transition: { duration: 0.3 } }}
                className="overflow-clip relative rounded-[20px] shrink-0 w-[381px]"
              >
                <MapboxMap 
                  className="w-full h-full rounded-[20px]"
                  startLat={25.6866}
                  startLng={-100.3161}
                  endLat={25.6898}
                  endLng={-100.3089}
                  interactive={true}
                  showControls={true}
                  showStyleSelector={true}
                  showCustomControls={true}
                />
                
                {/* Profile/Driver Position - This will be on top of the map */}
                <div className="absolute left-[62px] top-[120px] z-10">
                  <div className="absolute h-[8.5px] left-[21.5px] top-[55px] w-[7px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
                      <path d="M3.5 8.5L0 0H7L3.5 8.5Z" fill="url(#paint0_linear_driver)" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_driver" x1="0" x2="7" y1="4.25" y2="4.25">
                          <stop stopColor="#3629FF" />
                          <stop offset="1" stopColor="#0C68E1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="arriving"
                initial={{ height: 530 }}
                animate={{ height: 480, transition: { duration: 0.3 } }}
                className="overflow-clip relative rounded-[20px] shrink-0 w-[381px]"
              >
                <MapboxMap 
                  className="w-full h-full rounded-[20px]"
                  startLat={25.6866}
                  startLng={-100.3161}
                  endLat={25.6898}
                  endLng={-100.3089}
                  interactive={true}
                  showControls={true}
                  showStyleSelector={true}
                  showCustomControls={true}
                />
                
                {/* Small arrow indicator - This will be on top of the map */}
                <div className="absolute left-[206.5px] top-[391px] z-10">
                  <div className="w-[7px] h-[8.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
                      <path d="M3.5 8.5L0 0H7L3.5 8.5Z" fill="url(#paint0_linear_destination)" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_destination" x1="0" x2="7" y1="4.25" y2="4.25">
                          <stop stopColor="#3629FF" />
                          <stop offset="1" stopColor="#0C68E1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Destination marker - This will be on top of the map */}
                <div className="absolute left-[201px] top-[400px] z-10">
                  <div
                    className="w-[21px] h-[21px] bg-gradient-to-r from-[#3629FF] to-[#0C68E1] rounded-full relative"
                    style={{ outline: '12px rgba(59, 58, 255, 0.50) solid' }}
                  >
                    <div className="w-[11px] h-[11px] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Indications and Destination Card */}
          <div className="box-border content-stretch flex flex-col gap-[5px] items-start px-[10px] py-0 relative shrink-0 w-[381px]">
            {/* Indication Banner - Only show in enRoute state */}
            <AnimatePresence>
              {!isPaused && routeState === "enRoute" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-[#3629ff] relative rounded-[50px] shrink-0 w-full"
                >
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[5px] relative rounded-[inherit] w-full">
                    <CornerUpRight className="w-6 h-6 text-white" />
                    <div className="flex flex-col justify-center text-white">
                      <p className="font-['Nunito']">En 50 metros, gira a la derecha</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.45)] border-solid inset-0 pointer-events-none rounded-[50px]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Destination Card with Pause/Resume or Complete Delivery */}
            <AnimatePresence mode="wait">
              {routeState === "arriving" ? (
                /* Arriving state - Show destination card + slide to complete */
                <motion.div
                  key="arriving"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full flex flex-col gap-5"
                >
                  {/* Destination Card */}
                  <div className="bg-white relative rounded-[20px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.1)]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                        <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
                          <button
                            className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]"
                          >
                            <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
                            <Pause className="w-6 h-6 text-[#373737]" />
                          </button>

                          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="flex flex-col justify-center w-full">
                              <p className="text-black font-['Nunito']">Calle Clemente 5, Mijas</p>
                            </div>
                            <div className="flex flex-col justify-center w-full">
                              <p className="text-[#494949] font-['Nunito']">
                                <span className="font-['Nunito']">Hora de llegada:</span>
                                <span className="font-['Nunito'] font-normal">{` 09:30a.m`}</span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#f8fd00] relative rounded-[50px] shrink-0 to-[#fbff4b] w-[44px]">
                          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
                            <Phone className="w-6 h-6 text-black" />
                          </div>
                          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide to Complete */}
                  <div className="px-[5px] w-full">
                    <SlideToComplete onComplete={handleCompleteDelivery} />
                  </div>
                </motion.div>
              ) : !isPaused ? (
                /* En Route state - Show destination card with pause */
                <motion.div
                  key="active"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white relative rounded-[20px] shrink-0 w-full"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.1)]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                      {/* Pause Button + Label */}
                      <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
                        <button
                          onClick={handlePause}
                          className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]"
                        >
                          <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
                          <Pause className="w-6 h-6 text-[#373737]" />
                        </button>

                        {/* Destination Info */}
                        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-col justify-center w-full">
                            <p className="text-black font-['Nunito']">Calle Clemente 5, Mijas</p>
                          </div>
                          <div className="flex flex-col justify-center w-full">
                            <p className="text-[#494949] font-['Nunito']">
                              <span className="font-['Nunito']">Hora de llegada:</span>
                              <span className="font-['Nunito'] font-normal">{` 09:30a.m`}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Call Button */}
                      <div className="bg-gradient-to-r from-[#f8fd00] relative rounded-[50px] shrink-0 to-[#fbff4b] w-[44px]">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
                          <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full flex flex-col gap-3 items-center"
                >
                  {/* Hint Text */}
                  <p className="text-center text-[#494949] px-4 font-['Nunito']">
                    Recorrido pausado. <br />
                  </p>
                  
                  {/* Slider */}
                  <div className="px-[5px] w-full">
                    <SlideToStart 
                      onComplete={handleResume}
                      text="Reanudar recorrido"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>

      {/* Notification Center */}
      <NotificationCenter
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      {/* Cancel Route Confirmation Popup */}
      <AnimatePresence>
        {showCancelPopup && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
              onClick={handleContinueRoute}
            >
              {/* Popup */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl"
              >
                {/* Title */}
                <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">
                  ¿Cancelar recorrido?
                </h2>

                {/* Message */}
                <p className="text-[#494949] text-center mb-6 font-['Nunito']">
                  Al volver se cancelará el recorrido y se informará al administrador
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {/* Continue Button (arriba) */}
                  <button
                    onClick={handleContinueRoute}
                    className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
                  >
                    Continuar con el recorrido
                  </button>

                  {/* Cancel Button (abajo) */}
                  <button
                    onClick={handleCancelRoute}
                    className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
                  >
                    Cancelar Recorrido
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Report Incident Modal */}
      {showReportModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowReportModal(false)}
        >
          <div
            className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h2 className="text-black text-center mb-3 font-['Nunito'] font-bold">¿Reportar incidencia?</h2>
            <p className="text-[#494949] text-center mb-6 font-['Nunito']">¿Deseas reportar una incidencia al supervisor sobre esta entrega? Se enviará una notificación al supervisor y se añadirá una nota al informe del trayecto.</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  handleReportIssue();
                  setShowReportModal(false);
                }}
                className="w-full bg-white text-center text-black py-3 rounded-full font-['Nunito'] font-bold shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
              >
                Reportar incidencia
              </button>

              <button
                onClick={() => setShowReportModal(false)}
                className="w-full bg-white text-center text-[#373737] py-3 rounded-full font-['Nunito'] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] border border-[rgba(5,5,5,0.01)] hover:bg-gray-50 transition-colors"
              >
                Seguir con el recorrido
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
