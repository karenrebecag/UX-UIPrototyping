import svgPaths from "../../imports/svg-qcwzx3upis";

export function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const dimensions = size === "small" ? "h-[32px] w-[41px]" : "size-[120px]";
  
  return (
    <div className={`relative ${dimensions}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g>
          <path d={svgPaths.p1ab94100} fill="white" />
          <g>
            <path d={svgPaths.p17415500} fill="#323232" />
            <path d={svgPaths.p2eaac4f0} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function LogoSmall() {
  return (
    <div className="h-[32px] w-[41px] relative overflow-hidden">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 32">
        <path d="M13.5293 1.64103H30.8163L18.1069 20.4906H0.82L13.5293 1.64103Z" fill="white" />
        <path d="M14.2864 22.2375L9.36374 29.5385H27.4707L40.18 10.6889H26.816L19.0292 22.2375H14.2864Z" fill="#E7E7E7" />
      </svg>
    </div>
  );
}
