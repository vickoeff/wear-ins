'use client'

import { Divider } from "@/components/atoms";
import { CatalogCard } from "@/components/ui";
import { PRODUCTS } from "@/constant/products";
import { motion, MotionConfig } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1600,
    dots: false,
    infinite: true,
    speed: 800,
    centerMode: true,
    centerPadding: "150px",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    style: { padding: "8px" },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <main className="overflow-hidden">
      <MotionConfig transition={{ duration: 0.8 }}>
        <section className="relative bg-color-3">
          <div className="container py-16">
            <div className="flex items-center justify-center">
              <div className="w-1/3">
                <motion.h1 className="font-gajraj text-8xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }} >Wear</motion.h1>
                <div className="flex items-center">
                  <motion.h1 className="font-gajraj text-8xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }}>.Ins</motion.h1>
                  <motion.p className="font-staatliches tracking-wider text-xl pl-2 pt-4" initial={{ translateY: "-100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Wearing clothes with<br />awesome inspiration</motion.p>
                </div>
                <Divider />
                <motion.p className="text-xs max-w-[419px]" initial={{ translateY: "100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</motion.p>
              </div>
              <div className="w-1/3 flex justify-center items-center overflow-hidden object-cover">
                <Image src="/products/techno-evolved_back_light.png" width={3025} height={3025} alt="model-1" priority className="max-w-[150%]" />
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
            <motion.div className="bg-color-4 bg-techno-evolved-light bg-opacity-10 bg-[position:75%_40%] bg-[length:auto_220%] bg-no-repeat flex-1 h-[80vh]" initial={{ backgroundPositionY: "-50%" }} whileInView={{ backgroundPositionY: "0%" }}></motion.div>
            <motion.div className="bg-color-5 bg-all-for-one-dark bg-opacity-10 bg-[position:40%_60%] bg-[length:auto_200%] bg-no-repeat flex-1 h-[80vh]" initial={{ backgroundPositionY: "150%" }} whileInView={{ backgroundPositionY: "60%" }}></motion.div>
          </div>
          <div className="absolute w-fit h-fit top-0 bottom-0 left-0 right-0 m-auto text-center">
            <motion.h1 className="font-gajraj text-8xl" initial={{ translateY: "-50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >Wear.Ins</motion.h1>
            <Divider />
            <motion.button className="w-fit bg-color-2 text-lg text-color-1 text-left font-bold h-fit py-2 px-24 mt-2" initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >
              <p>WEAR THIS</p>
            </motion.button>
          </div>
        </section>

        <section className="relative py-12">
          <motion.h2 className="text-8xl font-staatliches text-center mb-12" initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }}>CATALOG</motion.h2>
          <div className="bg-color-5 pt-20">
            <Slider {...settings}>
              {
                PRODUCTS.map((item, idx) => (
                  <CatalogCard key={idx} {...item} />
                ))
              }
            </Slider>
          </div>
        </section>

        <section className="relative pb-12">
          <motion.div className="w-full flex justify-center items-center overflow-hidden object-cover" initial={{ rotateY: "90deg", opacity: 0 }} whileInView={{ rotateY: "0deg", opacity: 1 }}>
            <Image src="/banner.jpg" width={3025} height={3025} alt="model-1" priority className="max-w-[200%]" />
          </motion.div>
        </section>

        <section className="relative bg-online-shop bg-no-repeat py-12">
          <motion.h2 className="text-8xl font-staatliches text-center mb-12 tracking-wider" initial={{ translateY: "100%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }}>VISIT US</motion.h2>
          <div className="container">
            <div className="bg-color-1 p-28 font-staatliches tracking-widest">
              <h3 className="text-4xl text-center">ONLINE SHOP</h3>
              <ul className="flex justify-center gap-28 py-12 pt-10">
                <motion.li initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1, transition: { delay: 0 } }} >
                  <Link href="">
                    <Image src="/blibli.png" width={115} height={3025} alt="model-1" priority className="max-w-[200%]" />
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
              <h3 className="text-4xl text-center mb-4">OFFLINE SHOP</h3>
              <p className="font-poppins tracking-normal text-center">Pahlawan street Gg. Kidam no. 162, Postal Code 67214,<br />Probolinggo City, Indonesia</p>
            </div>
          </div>
        </section>
      </MotionConfig>
    </main>
  );
}
