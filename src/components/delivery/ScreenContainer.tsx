import { ReactNode } from "react";

interface ScreenContainerProps {
  children: ReactNode;
  bottomSheet: ReactNode;
}

export function ScreenContainer({ children, bottomSheet }: ScreenContainerProps) {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center gap-5 p-4 pt-1">
      <div className="flex-1 flex flex-col justify-start items-start gap-3 px-[15px]">
        {children}
      </div>
      <div className="w-full bg-white rounded-t-[40px] overflow-hidden">
        {bottomSheet}
      </div>
    </div>
  );
}
