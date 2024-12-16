'use client'

import { Divider } from "@/components/atoms";
import { motion, MotionConfig } from "motion/react";
import Image from "next/image";

export default function Home() {



  return (
    <main>
      <MotionConfig transition={{ duration: 0.8 }}>
        <section className="relative bg-color-3">
          <div className="container grid gird-rows-1 grid-cols-[80%_20%] pt-2">
            <div className="flex items-center">
              <div>
                <motion.h1 className="font-gajraj text-7xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }} >Wear</motion.h1>
                <div className="flex items-center">
                  <motion.h1 className="font-gajraj text-7xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }}>.Ins</motion.h1>
                  <motion.p className="font-staatliches tracking-wider text-lg pl-2 pt-2" initial={{ translateY: "-100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Wearing clothes with<br />awesome inspiration</motion.p>
                </div>
                <Divider />
                <motion.p className="text-xs max-w-[419px]" initial={{ translateY: "100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</motion.p>
              </div>
              <Image src="/3.png" width={683} height={1025} alt="model-1" priority />
            </div>
          </div>

          <motion.div className="absolute right-0 bottom-[20vh] w-1/5 bg-color-2 text-lg text-color-1 font-bold h-fit p-2" initial={{ translateX: "100%", }} whileInView={{ translateX: "0%" }} >
            <p>WEAR THIS</p>
          </motion.div>
        </section>
      </MotionConfig>
    </main>
  );
}
