import { useAnimate } from "motion/react"
import { useEffect } from "react";

export const Divider = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.log("scope: ", scope.current)
    //@ts-expect-error "target animate warning"
    animate("div#dot", { translateX: scope.current.clientWidth, rotate: "45deg" }, { repeat: Infinity, repeatType: "reverse", duration: 4, ease: "linear" });
  });

  return (
    <div ref={scope} className="relative w-full height-[2px] border-b-[2px] border-b-color-2 my-2">
      <div id="dot" className="absolute top-0 -bottom-[1px] my-auto w-[6px] h-[6px] bg-color-2 rotate-45"></div>
    </div>
  )
}