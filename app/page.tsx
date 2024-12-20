'use client'

import { Divider } from "@/components/atoms";
import { CatalogCard } from "@/components/ui";
import { PRODUCTS } from "@/constant/products";
import { motion, MotionConfig, useAnimate } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Home() {
  const [prodIdx, setProdIdx] = useState<number>(0);
  // Auto Change New Products Animation
  const [scope, animate] = useAnimate();

  // Set Auto change New Products
  useEffect(() => {
    const handleVisible = () => {
      animate("#new-image-front", { opacity: 1 }, { delay: 0.5 });
      animate("#new-image-back", { opacity: 1 }, { delay: 0.5 });
      animate("#new-product-name", { opacity: 1 }, { delay: 0.5 });
      animate("#new-product-desc", { opacity: 1 }, { delay: 0.5 });
    }

    const handleChange = () => {
      if (prodIdx >= PRODUCTS.length - 1) {
        setProdIdx(0);
      } else {
        setProdIdx(prodIdx + 1);
      }
    }

    const changeIdx = () => setTimeout(handleChange, 200);
    const triggerVisibleAnimate = () => setTimeout(handleVisible, 500);

    const autoInterval = setInterval(() => {
      animate("#new-image-front", { opacity: 0 }, { duration: 0.3 });
      animate("#new-image-back", { opacity: 0 }, { duration: 0.3 });
      animate("#new-product-name", { opacity: 0 }, { duration: 0.3 });
      animate("#new-product-desc", { opacity: 0 }, { duration: 0.3 });

      changeIdx();

      triggerVisibleAnimate();

    }, 3000);

    return () => {
      clearInterval(autoInterval);
      clearTimeout(changeIdx());
      clearTimeout(triggerVisibleAnimate());
    };
  }, [prodIdx, animate]);

  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    style: { padding: "8px" },
    responsive: [
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 1000,
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
        <section className="relative bg-color-3 min-h-[calc(100vh-67px)] md:min-h-unset">
          <div className="container py-16 px-12 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/3">
                <motion.h1 className="font-gajraj text-6xl md:text-8xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }} >Wear</motion.h1>
                <div className="flex items-center">
                  <motion.h1 className="font-gajraj text-6xl md:text-8xl" initial={{ translateX: "-100%", opacity: 0 }} whileInView={{ translateX: "0", opacity: 1 }}>.Ins</motion.h1>
                  <motion.p className="font-staatliches tracking-wider text-sm md:text-xl pl-2 pt-4" initial={{ translateY: "-100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Wearing clothes with<br />awesome inspiration</motion.p>
                </div>
                <Divider />
                <motion.p className="text-xs max-w-[419px]" initial={{ translateY: "100%", opacity: 0 }} whileInView={{ translateY: "0", opacity: 1 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</motion.p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center items-center overflow-hidden object-cover">
                <Image src="/products/techno-evolved_back_light.png" width={3025} height={3025} alt="model-1" priority className="max-w-[150%]" />
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>

          <motion.button className="absolute right-0 bottom-16 md:bottom-[20vh] w-4/6 md:w-1/5 bg-color-2 text-sm md:text-lg text-color-1 text-left font-bold h-fit p-2 pl-10" initial={{ translateX: "100%", }} whileInView={{ translateX: "0%" }} >
            <p>WEAR THIS</p>
          </motion.button>
        </section>

        <section className="relative">
          <div className="flex flex-col md:flex-row h-screen md:h-[80vh]">
            <motion.div className="w-full bg-color-4 bg-techno-evolved-light bg-opacity-10 bg-[position:75%_40%] bg-[length:auto_220%] bg-no-repeat flex-1 h-[80vh]" initial={{ backgroundPositionY: "-100%" }} whileInView={{ backgroundPositionY: "0%" }}></motion.div>
            <motion.div className="w-full bg-color-5 bg-all-for-one-dark bg-opacity-10 bg-[position:40%_60%] bg-[length:auto_200%] bg-no-repeat flex-1 h-[80vh]" initial={{ backgroundPositionY: "150%" }} whileInView={{ backgroundPositionY: "60%" }}></motion.div>
          </div>
          <div className="absolute w-fit h-fit top-0 bottom-0 left-0 right-0 m-auto text-center">
            <motion.h1 className="font-gajraj  text-6xl md:text-8xl" initial={{ translateY: "-50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >Wear.Ins</motion.h1>
            <Divider bgColor="bg-color-1 md:bg-color-2" />
            <motion.button className="w-fit bg-color-1 md:bg-color-2 text-lg text-color-2 md:text-color-1 text-left font-bold h-fit py-2 px-24 mt-2" initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >
              <p>WEAR THIS</p>
            </motion.button>
          </div>
        </section>

        <section className="relative py-12">
          <motion.h2 className="text-8xl font-staatliches text-center mb-8" initial={{ translateY: "50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }}>CATALOG</motion.h2>
          <div>
            <Slider {...settings}>
              {
                PRODUCTS.map((item, idx) => (
                  <CatalogCard key={idx} {...item} />
                ))
              }
            </Slider>
          </div>
        </section>

        <section ref={scope} className="relative bg-color-3 py-24">
          <div className="container max-w-6xl">
            <div className="w-fit mx-auto mb-12">
              <motion.h2 className="font-gajraj  text-6xl md:text-8xl" initial={{ translateY: "-50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >Wear.Ins</motion.h2>
              <Divider />
              <motion.h2 id="new-product-name" className="font-staatliches text-3xl md:text-4xl text-right" initial={{ translateY: "-50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >{PRODUCTS[prodIdx].name}</motion.h2>
            </div>
            <motion.h3 id="new-product-desc" className="absolute w-fit font-staatliches tracking-wider left-12 md:left-[10vw] text-2xl md:text-6xl text-center" initial={{ translateY: "-50%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }} >New Product <br />{PRODUCTS[prodIdx].size.join(", ")}</motion.h3>
          </div>

          <div className="flex justify-center w-full h-[50vh] md:h-screen mb-3 rounded-2xl z-10">
            <div className="relative top-10 w-[1500px]">
              <Image id="new-image-front" src={PRODUCTS[prodIdx].images.light.front} alt={PRODUCTS[prodIdx].name} width={1028} height={1000} className="absolute -left-[15%] md:-left-0 z-20" />
              <Image id="new-image-back" src={PRODUCTS[prodIdx].images.dark.front} alt={PRODUCTS[prodIdx].name} width={1028} height={1000} className="absolute -top-[10%] -right-[24%] md:-right-0 z-10" />
            </div>
          </div>

          <motion.button className="absolute left-0 bottom-[10vh] md:bottom-[20vh] w-4/6 md:w-1/5 bg-color-2 text-xl md:text-5xl text-color-1 text-right font-bold h-fit p-2 pr-10 z-20" initial={{ translateX: "-100%", }} whileInView={{ translateX: "0%" }} >
            <p>WEAR THIS</p>
          </motion.button>
        </section>

        <section className="relative bg-online-shop bg-no-repeat py-12">
          <motion.h2 className="text-8xl font-staatliches text-center mb-12 tracking-wider" initial={{ translateY: "100%", opacity: 0 }} whileInView={{ translateY: "0%", opacity: 1 }}>VISIT US</motion.h2>
          <div className="container">
            <div className="bg-color-1 p-4 md:p-28 font-staatliches tracking-widest">
              <h3 className="text-4xl text-center">ONLINE SHOP</h3>
              <ul className="flex justify-center gap-2 md:gap-28 py-12 pt-10">
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
              <p className="font-poppins tracking-normal text-center text-sm md:text-md ">Pahlawan street Gg. Kidam no. 162, Postal Code 67214,<br />Probolinggo City, Indonesia</p>
            </div>
          </div>
        </section>
      </MotionConfig>
    </main>
  );
}
