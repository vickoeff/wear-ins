'use client'

import { useAnimate } from "motion/react"
import { useEffect } from "react";

export const Divider = ({ bgColor }: { bgColor?: string }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    //@ts-expect-error "target animate warning"
    animate("div#dot", { translateX: scope.current.clientWidth, rotate: "45deg" }, { repeat: Infinity, repeatType: "reverse", duration: 4, ease: "linear" });
  });

  return (
    <div ref={scope} className={`relative w-full h-[2px]  my-2 ${bgColor ? bgColor : "bg-color-2"}`}>
      <div id="dot" className={`absolute top-0 bottom-0 my-auto w-[6px] h-[6px] rotate-45 ${bgColor ? bgColor : "bg-color-2"}`}></div>
    </div>
  )
}