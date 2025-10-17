import svgPaths from "./svg-roa5afa83z";
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
          <p className="basis-0 font-['Nunito:Bold',_sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#2a2a2a] text-[14px] text-center">Ruta Actual</p>
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
          <path d="M3.5 8.5L0 0H7L3.5 8.5Z" fill="url(#paint0_linear_7_5142)" id="Vector " />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_5142" x1="0" x2="7" y1="4.25" y2="4.25">
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
              <circle cx="22.5" cy="22.5" fill="url(#paint0_linear_7_5138)" r="10.5" />
              <circle cx="22.5" cy="22.5" r="16.5" stroke="var(--stroke-0, #3B3AFF)" strokeOpacity="0.5" strokeWidth="12" />
            </g>
            <circle cx="22.5" cy="22.5" fill="var(--fill-0, white)" id="Vector_2" r="5.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_5138" x1="12" x2="33" y1="22.5" y2="22.5">
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
    <div className="h-[530px] overflow-clip relative rounded-[20px] shrink-0 w-[381px]" data-name="Map">
      <div className="absolute inset-0 opacity-[0.85] overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[116.74%] left-[-3.74%] max-w-none top-[-3.66%] w-[172.65%]" src={imgMap} />
      </div>
      <div className="absolute h-[566px] left-0 top-0 w-[351px]" data-name="Map" />
      <div className="absolute h-[222px] left-[88px] top-[188.5px] w-[120px]" data-name="Line">
        <div className="absolute inset-[-0.9%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 226">
            <path d={svgPaths.p174a9300} id="Line" stroke="url(#paint0_linear_7_5144)" strokeLinecap="round" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_5144" x1="2" x2="122" y1="113" y2="113">
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

function CornerUpRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="corner-up-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="corner-up-right 1">
          <path d="M15 14L20 9L15 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ea57280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Indications() {
  return (
    <div className="bg-[#3629ff] relative rounded-[50px] shrink-0 w-full" data-name="Indications">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[5px] relative rounded-[inherit] w-full">
        <CornerUpRight1 />
        <div className="flex flex-col font-['Nunito:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="font-['Nunito:Bold',_sans-serif] font-bold leading-[normal] text-[14px] whitespace-pre">En 50 metros, gira a la derecha</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.45)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Pause1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pause 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pause 1">
          <path d={svgPaths.p40521c0} id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p21981000} id="Vector_2" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] box-border content-stretch flex gap-[5.2px] items-center justify-center px-[13px] py-[5.2px] relative rounded-[130px] shrink-0 size-[44px]" data-name="IconButton">
      <div aria-hidden="true" className="absolute border-[0.65px] border-[rgba(255,255,255,0.56)] border-solid inset-0 pointer-events-none rounded-[130px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
      <Pause1 />
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[0px]" data-name="Name">
      <div className="flex flex-col font-['Nunito:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-black w-full">
        <p className="leading-[normal] text-[14px]">Calle Clemente 5, Mijas</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#494949] w-full">
        <p className="leading-[normal] text-[14px]">
          <span className="font-['Nunito:Bold',_sans-serif] font-bold">Hora de llegada:</span>
          <span>{` 09:30a.m`}</span>
        </p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <IconButton2 />
      <Name />
    </div>
  );
}

function Phone1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="phone 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone 1">
          <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Go() {
  return (
    <div className="bg-gradient-to-r from-[#f8fd00] relative rounded-[50px] shrink-0 to-[#fbff4b] w-[44px]" data-name="Go">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-0 py-[10px] relative rounded-[inherit] w-[44px]">
        <Phone1 />
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

function Frame2131331370() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-start px-[10px] py-0 relative shrink-0 w-[381px]">
      <Indications />
      <ListItem />
    </div>
  );
}

function Frame2131331373() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Map />
      <Frame2131331370 />
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

export default function Onboarding8() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#331fff] gap-[20px] items-center justify-end overflow-clip pb-0 pt-[4px] px-0 relative rounded-[60px] size-full to-[#3b3aff] via-50% via-[#4150fd]" data-name="Onboarding 8">
      <Frame2131331261 />
    </div>
  );
}