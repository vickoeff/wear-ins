'use client'

import { Divider } from "@/components/atoms";
import { motion, MotionConfig } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MotionConfig transition={{ duration: 0.8 }}>
        <section className="relative bg-color-3">
          <div className="container py-16">
            <div className="flex items-center justify-center">
              <div className="w-1/3">
                <motion.h1 className="font-gajraj text-7xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }} >Wear</motion.h1>
                <div className="flex items-center">
                  <motion.h1 className="font-gajraj text-7xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }}>.Ins</motion.h1>
                  <motion.p className="font-staatliches tracking-wider text-lg pl-2 pt-2" initial={{ translateY: "-100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Wearing clothes with<br />awesome inspiration</motion.p>
                </div>
                <Divider />
                <motion.p className="text-xs max-w-[419px]" initial={{ translateY: "100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</motion.p>
              </div>
              <div className="w-1/3 flex justify-center items-center overflow-hidden object-cover">
                <Image src="/products/techno-evolved.png" width={3025} height={3025} alt="model-1" priority className="max-w-[200%]" />
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>

          <motion.button className="absolute right-0 bottom-[20vh] w-1/5 bg-color-2 text-lg text-color-1 text-left font-bold h-fit p-2" initial={{ translateX: "100%", }} whileInView={{ translateX: "0%" }} >
            <p>WEAR THIS</p>
          </motion.button>
        </section>

        <section className="relative">
          <div className="flex">
            <div className="bg-color-4 bg-techno-evolved bg-opacity-10 bg-[position:60%_20%] bg-[length:auto_200%] flex-1 h-[80vh]"></div>
            <div className="bg-color-5 bg-all-for-one bg-opacity-10 bg-[position:40%_60%] bg-[length:auto_200%] flex-1 h-[80vh]"></div>
          </div>
          <div className="absolute w-fit h-fit top-0 bottom-0 left-0 right-0 m-auto text-center">
            <motion.h1 className="font-gajraj text-8xl" initial={{ translateY: "-50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >Wear.Ins</motion.h1>
            <Divider />
            <motion.button className="w-fit bg-color-2 text-lg text-color-1 text-left font-bold h-fit py-2 px-24 mt-2" initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >
              <p>WEAR THIS</p>
            </motion.button>
          </div>
        </section>
      </MotionConfig>
    </main>
  );
}
