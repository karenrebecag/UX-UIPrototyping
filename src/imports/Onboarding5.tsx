import svgPaths from "./svg-dzc8u8g9xt";
import imgJaring1 from "figma:asset/021145cf82f815c11f04a779ded07464c18f1f20.png";

function Logo35() {
  return (
    <div className="h-[32px] relative shrink-0 w-[41px]" data-name="logo-35">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 32">
        <g id="logo-35">
          <path d={svgPaths.p301a1c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2cc8ed00} fill="var(--fill-0, #E7E7E7)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NotificationBing() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="notification-bing">
        <path d={svgPaths.pb86dc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d={svgPaths.p26653c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d={svgPaths.p32e9e780} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function VuesaxLinearNotificationBing() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/notification-bing">
      <NotificationBing />
    </div>
  );
}

function NotificationBing1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="notification-bing">
      <VuesaxLinearNotificationBing />
    </div>
  );
}

function Frame2131331354() {
  return (
    <div className="absolute bg-[#ec3e55] left-[32px] rounded-[50px] size-[14px] top-[2px]">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[3px] py-px relative rounded-[inherit] size-[14px]">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-white w-full">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <NotificationBing1 />
      <Frame2131331354 />
    </div>
  );
}

function Frame2131331360() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Logo35 />
      <IconButton />
    </div>
  );
}

function Frame1321315240() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[32px] text-white tracking-[-1.28px] w-[289px]">{`Buen día, José. `}</p>
      <p className="font-['Nunito:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-[silver] w-[min-content]">A continuación tienes un resumen de tus rutas faltantes el día de hoy.</p>
    </div>
  );
}

function Frame2131331323() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2131331360 />
      <Frame1321315240 />
    </div>
  );
}

function Frame2131331324() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[18px] items-start px-[15px] py-0 relative shrink-0 w-[381px]">
      <Frame2131331323 />
    </div>
  );
}

function Frame2131331386() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 text-center text-nowrap text-white whitespace-pre">
      <p className="font-['Nunito:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px]">Hora de inicio</p>
      <p className="font-['Inter:Medium',_sans-serif] font-['Median:Regular',_sans-serif] font-medium leading-[0.95] not-italic relative shrink-0 text-[0px] tracking-[-1.28px]">
        <span className="text-[48px] tracking-[-1.92px]">9:00</span>
        <span className="text-[16px] tracking-[-0.64px]">A.M</span>
      </p>
    </div>
  );
}

function Frame2131331387() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 text-center text-nowrap text-white whitespace-pre">
      <p className="font-['Nunito:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px]">Hora de finalización</p>
      <p className="font-['Inter:Medium',_sans-serif] font-['Median:Regular',_sans-serif] font-medium leading-[0.95] not-italic relative shrink-0 text-[0px] tracking-[-1.28px]">
        <span className="text-[48px] tracking-[-1.92px]">3:00</span>
        <span className="text-[16px] tracking-[-0.64px]">p.M</span>
      </p>
    </div>
  );
}

function Frame2131331356() {
  return (
    <div className="absolute bg-[#4839ff] box-border content-stretch flex items-center justify-between left-[10px] overflow-clip px-[25px] py-[10px] rounded-[20px] top-0 w-[361px]">
      <Frame2131331386 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "33", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[18px] relative w-[33px]">
            <div className="absolute bottom-full left-0 right-0 top-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 1">
                <line id="Line 28" opacity="0.2" stroke="url(#paint0_linear_3_920)" x2="33" y1="0.5" y2="18.5" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_920" x1="0" x2="33" y1="10" y2="10">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#F6F6F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame2131331387 />
    </div>
  );
}

function MainButton() {
  return (
    <div className="absolute backdrop-blur backdrop-filter bg-white left-[27px] rounded-[100px] top-[124px] w-[327px]" data-name="MainButton">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] w-[327px]">
        <p className="font-['Nunito:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">Iniciar descanso</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(5,5,5,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[101px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame2131331389() {
  return (
    <div className="h-[175px] relative shrink-0 w-[381px]">
      <Frame2131331356 />
      <p className="absolute font-['Nunito:Regular',_sans-serif] font-normal leading-[normal] left-[190.5px] text-[14px] text-center text-white top-[95px] translate-x-[-50%] w-[381px]">Tienes 60 minutos de descanso disponible</p>
      <MainButton />
    </div>
  );
}

function Frame2131331369() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Nunito:Bold',_sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-white">Progreso Actual:</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[11px]">
      <div className="absolute inset-[-3.85%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
          <g id="Group 2">
            <path d={svgPaths.p3f8c9600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2bc8a980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2338e700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2131331368() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Group2 />
      <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">5/15 entregas faltantes</p>
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="clock 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_3_905)" id="clock 1">
          <path d={svgPaths.p105d7900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1f658e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3_905">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2131331367() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Clock1 />
      <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Aproximadamente 4hr 50mins</p>
    </div>
  );
}

function Frame2131331366() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[5px] py-0 relative w-full">
          <Frame2131331368 />
          <Frame2131331367 />
        </div>
      </div>
    </div>
  );
}

function Frame2131331362() {
  return <div className="absolute bg-[rgba(246,246,246,0.9)] h-[58px] left-px rounded-[38px] top-px w-[290px]" />;
}

function ProgressBar() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[60px] relative rounded-[50px] shrink-0 w-full" data-name="ProgressBar">
      <div className="box-border content-stretch flex h-[60px] items-center justify-between overflow-clip px-0 py-[12px] relative rounded-[inherit] w-full">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 29" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 30" opacity="0.6" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 34" opacity="0.9" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 29" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 34" opacity="0.9" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 31" opacity="0.8" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <div className="h-0 relative w-[36px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                  <line id="Line 30" opacity="0.6" stroke="var(--stroke-0, white)" strokeOpacity="0.29" x2="36" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame2131331362 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(255,255,255,0.45)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame2131331364() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame2131331366 />
      <ProgressBar />
    </div>
  );
}

function Frame2131331363() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-center px-[10px] py-0 relative w-full">
          <Frame2131331369 />
          <Frame2131331364 />
        </div>
      </div>
    </div>
  );
}

function Frame2131331355() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <Frame2131331324 />
      <Frame2131331389 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 1">
            <line id="Line 62" stroke="var(--stroke-0, white)" strokeDasharray="2 2" strokeOpacity="0.3" x2="381" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame2131331363 />
    </div>
  );
}

function Frame2131331371() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[15px] py-0 relative w-full">
          <p className="basis-0 font-['Nunito:Bold',_sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#2a2a2a] text-[14px]">Siguientes Rutas:</p>
        </div>
      </div>
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map-pin 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="map-pin 1">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <MapPin1 />
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px] text-black w-full">
        <p className="leading-[normal] text-[14px]">Calle Clemente 5, Mijas</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#494949] text-[14px] w-full">
        <p className="leading-[normal]">Presiona aquí para iniciar ruta</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <IconButton1 />
      <Name />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right 1">
          <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Go() {
  return (
    <div className="bg-gradient-to-r from-[#f8fd00] relative rounded-[50px] shrink-0 to-[#fbff4b] w-[44px]" data-name="Go">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
        <ArrowUpRight1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
          <Label />
          <Go />
        </div>
      </div>
    </div>
  );
}

function Redo21() {
  return (
    <div className="relative size-[24px]" data-name="redo-2 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="redo-2 1" opacity="0.6">
          <path d="M15 14L20 9L15 4" id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24e4ef80} id="Vector_2" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Redo21 />
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px] text-black w-full">
        <p className="leading-[normal] text-[14px]">Calle Clemente 5, Mijas</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#494949] text-[14px] w-full">
        <p className="leading-[normal]">Siguiente Entrega</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <IconButton2 />
      <Name1 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right 1">
          <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, #424040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, #424040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Go1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[50px] shrink-0 w-[44px]" data-name="Go">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
        <ArrowUpRight2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-white opacity-30 relative rounded-[20px] shrink-0 w-full" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
          <Label1 />
          <Go1 />
        </div>
      </div>
    </div>
  );
}

function Redo22() {
  return (
    <div className="relative size-[24px]" data-name="redo-2 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="redo-2 1" opacity="0.6">
          <path d="M15 14L20 9L15 4" id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p24e4ef80} id="Vector_2" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Redo22 />
        </div>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px] text-black w-full">
        <p className="leading-[normal] text-[14px]">Calle Clemente 5, Mijas</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#494949] text-[14px] w-full">
        <p className="leading-[normal]">Siguiente Entrega</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <IconButton3 />
      <Name2 />
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right 1">
          <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, #424040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, #424040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Go2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[50px] shrink-0 w-[44px]" data-name="Go">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
        <ArrowUpRight3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
          <Label2 />
          <Go2 />
        </div>
      </div>
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map-pin 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="map-pin 1">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <MapPin2 />
    </div>
  );
}

function Name4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[0px] text-black w-full">
        <p className="leading-[normal] text-[14px]">Calle Clemente 5, Mijas</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#494949] text-[14px] w-full">
        <p className="leading-[normal]">Siguiente Entrega</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <IconButton5 />
      <Name4 />
    </div>
  );
}

function ArrowUpRight5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right 1">
          <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, #424040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, #424040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Go4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[50px] shrink-0 w-[44px]" data-name="Go">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
        <ArrowUpRight5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
          <Label4 />
          <Go4 />
        </div>
      </div>
    </div>
  );
}

function House1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="house 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="house 1">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28601a80} id="Vector_2" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2131331385() {
  return (
    <div className="bg-[#f8f8f8] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[50px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)] shrink-0">
      <House1 />
    </div>
  );
}

function Route21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="route (2) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="route (2) 1">
          <path d={svgPaths.p21daaf00} id="Vector" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cdbdea0} id="Vector_2" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p240f9a80} id="Vector_3" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MessageCircleWarning1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="message-circle-warning 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="message-circle-warning 1">
          <path d={svgPaths.p1a1dc120} id="Vector" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #2B2B2B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.62)] left-[26px] rounded-[150px] top-[112.99px]" data-name="Navbar">
      <div className="box-border content-stretch flex gap-[40px] items-center justify-center overflow-clip px-[80px] py-[17px] relative rounded-[inherit]">
        <Frame2131331385 />
        <Route21 />
        <MessageCircleWarning1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[150px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame2131331370() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start px-[10px] py-0 relative w-full">
          <ListItem />
          <ListItem1 />
          <ListItem2 />
          <ListItem1 />
          <ListItem4 />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

function Frame2131331261() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[285px] items-center overflow-clip pb-0 pt-[15px] px-0 relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[137px]">
        <div className="absolute inset-[-2.5px_-1.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 6">
            <path d="M3 3H140" id="Line 26" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeWidth="5" />
          </svg>
        </div>
      </div>
      <Frame2131331371 />
      <Frame2131331370 />
    </div>
  );
}

export default function Onboarding5() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#331fff] items-center justify-between overflow-clip pb-0 pt-[40px] px-0 relative rounded-[60px] size-full to-[#3b3aff] via-50% via-[#4150fd]" data-name="Onboarding 5">
      <Frame2131331355 />
      <Frame2131331261 />
      <div className="absolute h-[364px] left-[-60px] opacity-[0.46] top-[-245px] w-[334px]" data-name="Jaring 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.59] pointer-events-none size-full" src={imgJaring1} />
      </div>
    </div>
  );
}