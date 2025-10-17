import svgPaths from "./svg-6618nq3m6i";
import imgImage from "figma:asset/3cf18863e4ae3e38ace5c9015135b31f9529eb10.png";
import imgMap from "figma:asset/219b945971015d0149989780600caceb9b896c85.png";

function ChevronLeft1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-left 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left 1">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <ChevronLeft1 />
    </div>
  );
}

function IconMore() {
  return (
    <div className="relative size-[24px]" data-name="Icon - More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon - More">
          <path clipRule="evenodd" d={svgPaths.pdb31b00} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector 3" />
          <path clipRule="evenodd" d={svgPaths.p1f0800} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector 2" />
          <path clipRule="evenodd" d={svgPaths.p7536080} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <IconMore />
        </div>
      </div>
    </div>
  );
}

function Frame2131331371() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[15px] py-0 relative w-full">
          <IconButton />
          <p className="basis-0 font-['Nunito:Bold',_sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#2a2a2a] text-[14px] text-center">Previsualización de Ruta</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute contents left-[62px] top-[120px]" data-name="Profile">
      <div className="absolute left-[62px] size-[52px] top-[120px]" data-name="Image">
        <div className="absolute inset-[-7.692%]">
          <img alt="" className="block max-w-none size-full" height="60" src={imgImage} width="60" />
        </div>
      </div>
      <div className="absolute h-[8.5px] left-[83.5px] top-[175px] w-[7px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
          <path d="M3.5 8.5L0 0H7L3.5 8.5Z" fill="url(#paint0_linear_3_2361)" id="Vector " />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_2361" x1="0" x2="7" y1="4.25" y2="4.25">
              <stop stopColor="#3629FF" />
              <stop offset="1" stopColor="#0C68E1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Point() {
  return (
    <div className="absolute left-[201px] size-[21px] top-[400px]" data-name="Point">
      <div className="absolute inset-[-57.143%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g id="Point">
            <g id="Vector">
              <circle cx="22.5" cy="22.5" fill="url(#paint0_linear_3_2357)" r="10.5" />
              <circle cx="22.5" cy="22.5" r="16.5" stroke="var(--stroke-0, #3B3AFF)" strokeOpacity="0.5" strokeWidth="12" />
            </g>
            <circle cx="22.5" cy="22.5" fill="var(--fill-0, white)" id="Vector_2" r="5.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_2357" x1="12" x2="33" y1="22.5" y2="22.5">
              <stop stopColor="#3629FF" />
              <stop offset="1" stopColor="#0C68E1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="h-[566px] overflow-clip relative rounded-[20px] shrink-0 w-[381px]" data-name="Map">
      <div className="absolute inset-0 opacity-[0.85] overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[107.07%] left-[-4%] max-w-none top-[-2.69%] w-[172.65%]" src={imgMap} />
      </div>
      <div className="absolute h-[566px] left-0 top-0 w-[351px]" data-name="Map" />
      <div className="absolute h-[222px] left-[88px] top-[188.5px] w-[120px]" data-name="Line">
        <div className="absolute inset-[-0.9%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 226">
            <path d={svgPaths.p174a9300} id="Line" stroke="url(#paint0_linear_3_2368)" strokeLinecap="round" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_2368" x1="2" x2="122" y1="113" y2="113">
                <stop stopColor="#3629FF" />
                <stop offset="1" stopColor="#0C68E1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Profile />
      <Point />
    </div>
  );
}

function ChevronRight11() {
  return (
    <div className="[grid-area:1_/_1] h-[32px] ml-0 mt-0 relative w-[35px]" data-name="chevron-right (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="chevron-right (1) 1">
          <path d="M15 21L20 16L15 11" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ChevronRight11 />
    </div>
  );
}

function Frame2131331374() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="bg-clip-text bg-gradient-to-r font-['Inter:Medium',_sans-serif] font-medium from-[#2d2d2d] leading-[1.4] not-italic relative shrink-0 text-[20px] text-center text-nowrap to-[#000000] tracking-[-0.8px] uppercase whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        Iniciar Ruta
      </p>
      <Group3 />
    </div>
  );
}

function Frame2131331362() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#f8fd00] gap-[10px] h-[59px] items-center justify-center left-px overflow-clip px-[40px] py-[9px] rounded-[38px] to-[#fbff4b] top-px w-[279px]">
      <Frame2131331374 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[rgba(46,46,46,0.03)] h-[60px] relative rounded-[50px] shrink-0 w-full" data-name="ProgressBar">
      <div className="box-border content-stretch flex h-[60px] items-center justify-between overflow-clip px-0 py-[12px] relative rounded-[inherit] w-full">
        <Frame2131331362 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(0,0,0,0.45)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame2131331375() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[5px] py-0 relative w-full">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

function ProgressBar1() {
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
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px] border-[rgba(255,255,255,0.45)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame2131331373() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Map />
      <Frame2131331375 />
      <ProgressBar1 />
    </div>
  );
}

function Frame2131331261() {
  return (
    <div className="bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[10px] h-[757px] items-center overflow-clip pb-0 pt-[15px] px-0 relative rounded-tl-[40px] rounded-tr-[40px] shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[137px]">
        <div className="absolute inset-[-2.5px_-1.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 6">
            <path d="M3 3H140" id="Line 26" opacity="0.25" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeWidth="5" />
          </svg>
        </div>
      </div>
      <Frame2131331371 />
      <Frame2131331373 />
    </div>
  );
}

export default function Onboarding6() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#331fff] gap-[20px] items-center justify-end overflow-clip pb-0 pt-[4px] px-0 relative rounded-[60px] size-full to-[#3b3aff] via-50% via-[#4150fd]" data-name="Onboarding 6">
      <Frame2131331261 />
    </div>
  );
}