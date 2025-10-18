import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { MobileLayout } from "./components/delivery/MobileLayout";
import { SplashScreen } from "./components/delivery/screens/SplashScreen";
import { LoginScreen } from "./components/delivery/screens/LoginScreen";
import { RegisterScreen } from "./components/delivery/screens/RegisterScreen";
import { OTPScreen } from "./components/delivery/screens/OTPScreen";
import { SuccessScreen } from "./components/delivery/screens/SuccessScreen";
import { HomeScreen } from "./components/delivery/screens/HomeScreen";
import { ForgotPasswordScreen } from "./components/delivery/screens/ForgotPasswordScreen";
import { ResetPasswordScreen } from "./components/delivery/screens/ResetPasswordScreen";
import { TruckVerificationScreen } from "./components/delivery/screens/TruckVerificationScreen";
import { RoutePreviewScreen } from "./components/delivery/screens/RoutePreviewScreen";
import { ActiveRouteScreen } from "./components/delivery/screens/ActiveRouteScreen";
import { DaySummaryScreen } from "./components/delivery/screens/DaySummaryScreen";

type Screen = 
  | "splash" 
  | "login" 
  | "register" 
  | "otp" 
  | "success" 
  | "home"
  | "forgotPassword"
  | "resetPassword"
  | "truckVerification"
  | "routePreview"
  | "activeRoute"
  | "daySummary";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [errorsActive, setErrorsActive] = useState(false);
  const [dayCompleted, setDayCompleted] = useState(false);

  const handleNavigation = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleBreakStateChange = (breakState: boolean) => {
    setIsOnBreak(breakState);
  };

  const handleModalStateChange = (modalState: boolean) => {
    setHasModalOpen(modalState);
  };

  const handleErrorStateChange = (errorState: boolean) => {
    setErrorsActive(errorState);
  };

  const handleDayCompletedChange = (dayCompletedState: boolean) => {
    setDayCompleted(dayCompletedState);
  };

  const showDecoration = !["home", "routePreview", "activeRoute", "daySummary"].includes(currentScreen);
  
  // Define back navigation for each screen
  const getBackNavigation = (): { show: boolean; screen?: Screen } => {
    switch (currentScreen) {
      case "truckVerification":
        return { show: true, screen: "home" };
      case "routePreview":
        return { show: false }; // RoutePreviewScreen has its own header
      case "activeRoute":
        return { show: false }; // ActiveRouteScreen has its own header
      case "daySummary":
        return { show: false }; // DaySummaryScreen has its own back navigation
      default:
        return { show: false };
    }
  };
  
  const backNav = getBackNavigation();
  const handleBack = () => {
    if (backNav.screen) {
      handleNavigation(backNav.screen);
    }
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <MobileLayout
        showDecoration={showDecoration}
        showBackButton={backNav.show}
        onBack={handleBack}
        showBottomNav={currentScreen === 'home'}
        hideBottomNavForModals={hasModalOpen}
        isDayCompleted={dayCompleted}
        isErrorActive={errorsActive}
      >
        <AnimatePresence mode="wait">
          {currentScreen === "splash" && (
            <SplashScreen 
              onContinue={() => handleNavigation("login")}
              onRegister={() => handleNavigation("register")}
            />
          )}
          
          {currentScreen === "login" && (
            <LoginScreen 
              onLogin={() => handleNavigation("otp")}
              onRegister={() => handleNavigation("register")}
              onForgotPassword={() => handleNavigation("forgotPassword")}
            />
          )}
          
          {currentScreen === "register" && (
            <RegisterScreen 
              onRegister={() => handleNavigation("otp")}
              onBackToLogin={() => handleNavigation("login")}
            />
          )}
          
          {currentScreen === "forgotPassword" && (
            <ForgotPasswordScreen 
              onSendLink={() => handleNavigation("resetPassword")}
              onBackToLogin={() => handleNavigation("login")}
            />
          )}
          
          {currentScreen === "resetPassword" && (
            <ResetPasswordScreen 
              onResetPassword={() => handleNavigation("success")}
            />
          )}
          
          {currentScreen === "otp" && (
            <OTPScreen 
              onVerify={() => handleNavigation("success")}
              onBack={() => handleNavigation("login")}
            />
          )}
          
          {currentScreen === "success" && (
            <SuccessScreen 
              onContinue={() => handleNavigation("home")}
            />
          )}
          
          {currentScreen === "home" && (
            <HomeScreen
              onRouteStart={() => handleNavigation("truckVerification")}
              onBreakStateChange={handleBreakStateChange}
              onModalStateChange={handleModalStateChange}
              onFinishDay={() => handleNavigation("daySummary")}
              onErrorStateChange={handleErrorStateChange}
              onDayCompletedChange={handleDayCompletedChange}
            />
          )}
          
          {currentScreen === "truckVerification" && (
            <TruckVerificationScreen 
              onContinue={() => handleNavigation("routePreview")}
              onReportIssue={() => {/* Navigate to issue report */}}
            />
          )}
          
          {currentScreen === "routePreview" && (
            <RoutePreviewScreen 
              onBack={() => handleNavigation("home")}
              onStartRoute={() => handleNavigation("activeRoute")}
            />
          )}
          
          {currentScreen === "activeRoute" && (
            <ActiveRouteScreen 
              onBack={() => handleNavigation("home")}
            />
          )}
          
          {currentScreen === "daySummary" && (
            <DaySummaryScreen 
              onFinishDay={() => handleNavigation("home")}
              onReportIssue={() => {/* Navigate to issue report */}}
            />
          )}
        </AnimatePresence>
      </MobileLayout>
    </div>
  );
}
