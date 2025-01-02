'use client'

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@/components/atoms";

export default function StorePage() {

  return (
    <div className="relative bg-color-3 bg-no-repeat py-12">
      <div className="container">
        <h2 className="text-8xl font-staatliches text-center mb-12 tracking-wider">Visite our Store</h2>
        <Divider />
        <div className=" p-4 font-staatliches tracking-widest">
          <h3 className="text-6xl text-center mb-4">OFFLINE SHOP</h3>
          <p className="font-poppins tracking-normal text-center text-xl md:text-md ">Pahlawan street Gg. Kidam no. 162, Postal Code 67214,<br />Probolinggo City, Indonesia</p>
          <div className="relative p-4 md:p-28 flex justify-center">
            <div className="absolute top-[16.5%] right-[25%]">
              <motion.div className="flex flex-col items-center gap-2 bg-color-1 p-4 py-8 font-poppins text-center shadow-md rounded-b-xl" initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1, transition: { delay: 0 } }}>
                <h2 className="font-bold text-xl">Wear.ins</h2>
                <Image src="/logo-light.png" width={80} height={80} alt="store" className="rounded-xl" priority />
                <p className="text-sm">Official Store</p>
              </motion.div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08217080356252!2d113.21562192576476!3d-7.756405774538545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ad408089f567%3A0xbaf5ee5202ffef60!2sWear.ins!5e0!3m2!1sid!2sid!4v1735795732783!5m2!1sid!2sid" width="800" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
          </div>
          <h3 className="text-6xl text-center">ONLINE SHOP</h3>
          <p className="font-poppins text-center text-xl">Wear.Ins Availabe on Favourite Ecommers</p>
          <ul className="flex justify-center gap-2 md:gap-28 py-12 pt-12">
            <motion.li initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1, transition: { delay: 0 } }} >
              <Link href="">
                <Image src="https://res.cloudinary.com/dkqzrblhj/image/upload/v1735791762/tiktok.png" width={100} height={3025} alt="model-1" priority className="max-w-[200%]" />
              </Link>
            </motion.li>
            <motion.li initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1, transition: { delay: 0.2 } }} >
              <Link href="">
                <Image src="/shopee.png" width={115} height={3025} alt="model-1" priority className="max-w-[200%]" />
              </Link>
            </motion.li>
            <motion.li initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1, transition: { delay: 0.4 } }} >
              <Link href="">
                <Image src="/tokopedia.png" width={115} height={3025} alt="model-1" priority className="max-w-[200%]" />
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  )
}