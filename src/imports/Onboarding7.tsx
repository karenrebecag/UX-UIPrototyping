function Icon24Outline() {
  return (
    <div className="relative size-[24px]" data-name="Icon 24 Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon 24 Outline">
          <path d="M9 6L15 12L9 18" id="Vector 11089" stroke="var(--stroke-0, #282A37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="txt">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icon24Outline />
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282a37] text-[20px] text-nowrap tracking-[0.4px]">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[382px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#515978] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Today</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 2">
            <path d="M0 1H327" id="line" stroke="var(--stroke-0, #ECEDF2)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Illustration() {
  return <div className="absolute bg-[#eef3f1] left-[16px] rounded-[100px] size-[48px] top-[calc(50%-9px)] translate-y-[-50%]" data-name="illustration" />;
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[72px] top-[14px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Reminder for your meetings</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#515978] text-[12px] tracking-[0.24px] w-[260px]">
        <p className="leading-[20px]">Learn more about managing account info and activity</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[96px] overflow-clip relative rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[357px]" data-name="card">
      <Illustration />
      <Text1 />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] right-[71px] text-[#515978] text-[12px] text-nowrap top-[26px] tracking-[0.24px] translate-x-[100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">9min ago</p>
      </div>
    </div>
  );
}

function Illustration1() {
  return <div className="absolute bg-[#fff4de] left-[16px] rounded-[100px] size-[48px] top-[calc(50%-9px)] translate-y-[-50%]" data-name="illustration" />;
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[72px] top-[14px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">
          <span>{`Robert `}</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal">mention</span> <span className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal">you!</span>
        </p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#515978] text-[12px] tracking-[0.24px] w-[260px]">
        <p className="leading-[20px]">Learn more about managing account info and activity</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-[357px]" data-name="card">
      <Illustration1 />
      <Text2 />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] right-[77px] text-[#515978] text-[12px] text-nowrap top-[26px] tracking-[0.24px] translate-x-[100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">14min ago</p>
      </div>
    </div>
  );
}

function Illustration2() {
  return <div className="absolute bg-[#ffeff1] left-[16px] rounded-[100px] size-[48px] top-[calc(50%-9px)] translate-y-[-50%]" data-name="illustration" />;
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[72px] top-[14px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Reminder for your serial</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#515978] text-[12px] tracking-[0.24px] w-[260px]">
        <p className="leading-[20px]">Learn more about managing account info and activity</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[96px] overflow-clip relative shrink-0 w-[357px]" data-name="card">
      <Illustration2 />
      <Text3 />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] right-[71px] text-[#515978] text-[12px] text-nowrap top-[26px] tracking-[0.24px] translate-x-[100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">9min ago</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="content">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="-">
      <Text />
      <Content />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#515978] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Yesterday</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 274 2">
            <path d="M0 1H274" id="line" stroke="var(--stroke-0, #ECEDF2)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Illustration3() {
  return <div className="absolute bg-[#eef3f1] left-[16px] rounded-[100px] size-[48px] top-[calc(50%-9px)] translate-y-[-50%]" data-name="illustration" />;
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[72px] top-[14px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Reminder for your serial</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#515978] text-[12px] tracking-[0.24px] w-[260px]">
        <p className="leading-[20px]">Looking forward to it</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[96px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="card">
      <Illustration3 />
      <Text5 />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] right-[71px] text-[#515978] text-[12px] text-nowrap top-[26px] tracking-[0.24px] translate-x-[100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">9min ago</p>
      </div>
    </div>
  );
}

function Illustration4() {
  return <div className="absolute bg-[#fff4de] left-[16px] rounded-[100px] size-[48px] top-[calc(50%-9px)] translate-y-[-50%]" data-name="illustration" />;
}

function Text6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[72px] top-[14px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Reminder for your serial</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#515978] text-[12px] tracking-[0.24px] w-[260px]">
        <p className="leading-[20px]">Learn more about managing account info and activity</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-full" data-name="card">
      <Illustration4 />
      <Text6 />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] right-[77px] text-[#515978] text-[12px] text-nowrap top-[26px] tracking-[0.24px] translate-x-[100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">14min ago</p>
      </div>
    </div>
  );
}

function Illustration5() {
  return <div className="absolute bg-[#ffeff1] left-[16px] rounded-[100px] size-[48px] top-[calc(50%-9px)] translate-y-[-50%]" data-name="illustration" />;
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[72px] top-[14px]" data-name="text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.28px]">
        <p className="leading-[24px] whitespace-pre">Reminder for your serial</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#515978] text-[12px] tracking-[0.24px] w-[260px]">
        <p className="leading-[20px]">Learn more about managing account info and activity</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[96px] overflow-clip relative shrink-0 w-full" data-name="card">
      <Illustration5 />
      <Text7 />
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] right-[71px] text-[#515978] text-[12px] text-nowrap top-[26px] tracking-[0.24px] translate-x-[100%] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">9min ago</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="-">
      <Text4 />
      <Content1 />
    </div>
  );
}

function Frame2131331388() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[22px] items-start px-[13px] py-[30px] relative size-full">
          <Txt />
          <Component />
          <Component1 />
        </div>
      </div>
    </div>
  );
}

export default function Onboarding7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-between overflow-clip pb-0 pt-[40px] px-0 relative rounded-[60px] size-full" data-name="Onboarding 7">
      <Frame2131331388 />
    </div>
  );
}