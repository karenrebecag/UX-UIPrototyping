import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { LogoSmall } from "../Logo";
import { Toggle } from "../Toggle";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { Button as CustomButton } from "../Button";
import { Button } from "../../ui/button";
import { ScreenContainer } from "../MobileLayout";
import { PasswordStrengthIndicator } from "../PasswordStrengthIndicator";

interface LoginScreenProps {
  onLogin: () => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

export function LoginScreen({
  onLogin,
  onRegister,
  onForgotPassword,
}: LoginScreenProps) {
  const [tab, setTab] = useState(0);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(true);
  
  // Debug states for error and focus simulation
  const [showErrors, setShowErrors] = useState(false);
  const [showFocus, setShowFocus] = useState(false);

  const passwordStrength = useMemo<
    "weak" | "medium" | "strong"
  >(() => {
    if (password.length === 0) return "weak";
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  }, [password]);

  const handleSubmit = () => {
    if (tab === 0) {
      onLogin();
    } else {
      onRegister();
    }
  };

  return (
    <>
    <ScreenContainer
      bottomSheet={
        <div className="w-full px-6 pt-6 pb-0 flex flex-col gap-4.5 min-h-[603px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Toggle
              options={["Iniciar Sesión", "Registrarme"]}
              selected={tab}
              onChange={setTab}
            />
          </motion.div>

          {tab === 0 ? (
              // Login Form
            <>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-5"
              >
                <Input
                  type="email"
                  label="Correo Electrónico"
                  placeholder="mail@ejemplo.com"
                  value={email}
                  onChange={setEmail}
                  error={showErrors}
                  focused={showFocus}
                />
                {showErrors && (
                  <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                    El formato del correo no es válido.
                  </p>
                )}

                <div className="flex flex-col gap-2">
                  <Input
                    type="password"
                    label="Contraseña"
                    placeholder="••••••"
                    value={password}
                    onChange={setPassword}
                    error={showErrors}
                    focused={showFocus}
                  />
                  {showErrors && (
                    <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                      Contraseña incorrecta. Inténtalo de nuevo.
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <Checkbox
                      checked={rememberMe}
                      onChange={setRememberMe}
                      label="Recuérdame"
                    />
                    <button
                      onClick={onForgotPassword}
                      className="text-sm font-['Nunito'] text-black underline"
                    >
                      Olvidaste tu contraseña?
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <CustomButton
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Iniciar Sesión
                </CustomButton>
              </motion.div>
            </>
          ) : (
            // Register Form
            <>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-5"
              >
                <Input
                  type="text"
                  label="ID de trabajador"
                  placeholder="Ingresa aquí el ID al reverso de tu credencial"
                  value={workerId}
                  onChange={setWorkerId}
                  error={showErrors}
                  focused={showFocus}
                />
                {showErrors && (
                  <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                    ID de trabajador no encontrado. Verifica los datos.
                  </p>
                )}

                <Input
                  type="email"
                  label="Correo Electrónico"
                  placeholder="mail@ejemplo.com"
                  value={email}
                  onChange={setEmail}
                  error={showErrors}
                  focused={showFocus}
                />
                {showErrors && (
                  <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                    Este correo ya está registrado. Usa uno diferente.
                  </p>
                )}

                <div className="flex flex-col gap-2">
                  <Input
                    type="password"
                    label="Contraseña"
                    placeholder="••••••"
                    value={password}
                    onChange={setPassword}
                    error={showErrors}
                    focused={showFocus}
                  />
                  {showErrors && (
                    <p className="text-xs text-red-500 font-['Nunito'] ml-4">
                      La contraseña debe tener al menos 8 caracteres.
                    </p>
                  )}

                  <PasswordStrengthIndicator
                    strength={passwordStrength}
                  />
                </div>

                <div className="flex items-start ">
                  <Checkbox
                    checked={acceptTerms}
                    onChange={setAcceptTerms}
                  />
                  <p className="text-sm font-['Nunito'] text-[#898989] leading-relaxed">
                    Al crear una cuenta, acepto que he leído y
                    aceptado los{" "}
                    <button className="underline">
                      Términos y Condiciones
                    </button>{" "}
                    y la{" "}
                    <button className="underline">
                      Política de Privacidad
                    </button>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <CustomButton
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Crear Cuenta
                </CustomButton>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-sm font-['Nunito']"
              >
                <span className="text-[#5C5C5C]">
                  Usa las credenciales que te dio tu supervisor.
                  <br />
                  ¿Necesitas ayuda?{" "}
                </span>
                <button className="text-[#1F61E9]">
                  Contáctanos
                </button>
              </motion.div>
            </>
          )}
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
        <h2 className="text-white text-[32px] font-['Inter'] font-medium leading-tight">
          ¡Bienvenido de vuelta!
        </h2>
        <p className="text-[#C0C0C0] text-sm font-['Nunito']">
          Inicia sesión para gestionar tus entregas del día
        </p>
      </motion.div>
    </ScreenContainer>

    {/* Debug buttons positioned outside main container */}
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[60] flex flex-row justify-center gap-3 w-full max-w-[300px] px-4">
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