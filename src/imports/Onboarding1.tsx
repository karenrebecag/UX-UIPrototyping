import svgPaths from "./svg-qcwzx3upis";
import imgJaring1 from "figma:asset/021145cf82f815c11f04a779ded07464c18f1f20.png";

function Logo() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Logo">
          <foreignObject height="128" width="128" x="-4" y="-4">
            <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_3_45_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p1ab94100} data-figma-bg-blur-radius="4" fill="var(--fill-0, white)" id="Rectangle 4" />
          <g id="logo-35">
            <path d={svgPaths.p17415500} fill="var(--fill-0, #323232)" id="Vector" />
            <path d={svgPaths.p2eaac4f0} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_3_45_clip_path" transform="translate(4 4)">
            <path d={svgPaths.p1ab94100} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2131331341() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-center justify-end left-[127px] px-[45px] py-[18px] size-[120px] top-[248px]">
      <Logo />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap whitespace-pre">Logo</p>
    </div>
  );
}

function Frame1321315240() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[32px] text-white tracking-[-1.28px] w-[289px]">Te damos la bienvenida</p>
      <p className="font-['Nunito:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-[silver] text-center text-nowrap whitespace-pre">Tu tranquilidad es nuestra prioridad.</p>
    </div>
  );
}

function Frame2131331323() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame1321315240 />
    </div>
  );
}

function Frame2131331324() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-full">
      <Frame2131331323 />
    </div>
  );
}

function Frame1321315237() {
  return (
    <div className="backdrop-blur backdrop-filter bg-white relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <p className="font-['Nunito:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Iniciar Sesión</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(5,5,5,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[101px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame2131331325() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <p className="font-['Nunito:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.12px] whitespace-pre">Registrarme</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.56)] border-solid inset-[-1px] pointer-events-none rounded-[101px] shadow-[0px_4px_32px_4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame2131331333() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame1321315237 />
      <Frame2131331325 />
    </div>
  );
}

function Frame2131331334() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[327px]">
      <Frame2131331324 />
      <Frame2131331333 />
    </div>
  );
}

export default function Onboarding1() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#331fff] gap-[10px] items-center justify-center overflow-clip px-0 py-[4px] relative rounded-[60px] size-full to-[#3b3aff] via-50% via-[#4150fd]" data-name="Onboarding 1">
      <Frame2131331341 />
      <div className="h-[364px] relative shrink-0 w-[334px]" data-name="Jaring 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgJaring1} />
      </div>
      <Frame2131331334 />
    </div>
  );
}