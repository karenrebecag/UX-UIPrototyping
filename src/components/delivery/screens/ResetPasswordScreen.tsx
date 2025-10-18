import { motion } from "motion/react";
import { useState } from "react";
import { LogoSmall } from "../Logo";
import { Input } from "../Input";
import { Button as CustomButton } from "../Button";
import { Button } from "../../ui/button";
import { ScreenContainer } from "../MobileLayout";
import { PasswordStrengthIndicator } from "../ProgressBar";

interface ResetPasswordScreenProps {
  onResetPassword: () => void;
}

export function ResetPasswordScreen({ onResetPassword }: ResetPasswordScreenProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Debug states for error and focus simulation
  const [showErrors, setShowErrors] = useState(false);
  const [showFocus, setShowFocus] = useState(false);

  const getPasswordStrength = (): "weak" | "medium" | "strong" => {
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  return (
    <>
    <ScreenContainer
      bottomSheet={
        <div className="w-full px-6 py-6 flex flex-col gap-4.5 min-h-[493px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <Input 
                type="password"
                label="Nueva Contraseña"
                placeholder="••••••••"
                value={password}
                onChange={setPassword}
                error={showErrors}
                focused={showFocus}
              />
              {showErrors && (
                <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                  La contraseña debe tener al menos 8 caracteres y contener números.
                </p>
              )}
              {password && <PasswordStrengthIndicator strength={getPasswordStrength()} />}
            </div>

            <Input 
              type="password"
              label="Confirmar Nueva Contraseña"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={setConfirmPassword}
              error={showErrors}
              focused={showFocus}
            />
            {showErrors && (
              <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                Las contraseñas no coinciden.
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CustomButton variant="primary" onClick={onResetPassword}>
              Cambiar Contraseña
            </CustomButton>
          </motion.div>
        </div>
      }
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <LogoSmall />
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col gap-1"
      >
        <h2 className="text-white text-[32px] font-['Inter'] font-medium leading-tight max-w-[289px]">
          Crear nueva contraseña
        </h2>
        <p className="text-[#C0C0C0] text-sm font-['Nunito']">
          Elige una contraseña segura que no uses en otros sitios
        </p>
      </motion.div>
    </ScreenContainer>

    {/* Debug buttons positioned outside main container */}
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[60] flex flex-row justify-center gap-3 w-full max-w-[300px] px-4 pb-[50px]">
      {/* Toggle error states button */}
      <button
        onClick={() => setShowErrors(!showErrors)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: '500',
          transition: 'all 0.2s',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
          height: '32px',
          padding: '0 12px',
          backgroundColor: showErrors ? '#dc2626' : '#3b82f6',
          color: 'white',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}
        onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = showErrors ? '#b91c1c' : '#2563eb'}
        onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = showErrors ? '#dc2626' : '#3b82f6'}
      >
        {showErrors ? "Desactivar Errores" : "Activar Errores"}
      </button>

      {/* Toggle focus states button */}
      <button
        onClick={() => setShowFocus(!showFocus)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: '500',
          transition: 'all 0.2s',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
          height: '32px',
          padding: '0 12px',
          backgroundColor: showFocus ? '#3b82f6' : '#6366f1',
          color: 'white',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}
        onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = showFocus ? '#2563eb' : '#5855eb'}
        onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = showFocus ? '#3b82f6' : '#6366f1'}
      >
        {showFocus ? "Desactivar Focus" : "Activar Focus"}
      </button>
    </div>
    </>
  );
}
