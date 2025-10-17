import { motion } from "motion/react";
import { useState } from "react";
import { LogoSmall } from "../Logo";
import { Toggle } from "../Toggle";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";
import { ScreenContainer } from "../MobileLayout";
import { PasswordStrengthIndicator } from "../ProgressBar";

interface RegisterScreenProps {
  onRegister: () => void;
  onBackToLogin: () => void;
}

export function RegisterScreen({ onRegister, onBackToLogin }: RegisterScreenProps) {
  const [workerId, setWorkerId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(true);

  const getPasswordStrength = (): "weak" | "medium" | "strong" => {
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  return (
    <ScreenContainer
      bottomSheet={
        <div className="w-full px-6 py-6 flex flex-col gap-4.5 min-h-[622px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Toggle 
              options={["Iniciar Sesión", "Registrarme"]}
              selected={1}
              onChange={(i) => i === 0 && onBackToLogin()}
            />
          </motion.div>

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
            />

            <Input 
              type="email"
              label="Correo Electrónico"
              placeholder="mail@ejemplo.com"
              value={email}
              onChange={setEmail}
            />

            <div className="flex flex-col gap-2">
              <Input 
                type="password"
                label="Contraseña"
                placeholder="••••••"
                value={password}
                onChange={setPassword}
              />
              {password && <PasswordStrengthIndicator strength={getPasswordStrength()} />}
            </div>

            <Checkbox 
              checked={acceptTerms}
              onChange={setAcceptTerms}
              label="Al crear una cuenta, acepto que he leído y aceptado los Términos y Condiciones y la Política de Privacidad"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <Button variant="primary" onClick={onRegister}>
              Crear Cuenta
            </Button>
            <p className="text-center text-sm font-['Nunito'] text-[#5C5C5C]">
              Usa las credenciales que te dio tu supervisor.{" "}
              <br />
              ¿Necesitas ayuda?{" "}
              <span className="text-[#1F61E9]">Contáctanos</span>
            </p>
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
          Únete al equipo
        </h2>
        <p className="text-[#C0C0C0] text-sm font-['Nunito']">
          Comienza a realizar entregas de forma segura. {" "}
          <span className="font-bold">Solo para repartidores autorizados</span>
        </p>
      </motion.div>
    </ScreenContainer>
  );
}
