'use client'

import { PRODUCTS } from "@/constant/products";
import Slider from "react-slick";
import Image from "next/image";

export const ProductPreview = () => {
  const settings = {
    dots: false,
    speed: 800,
    slidesToShow: 3,
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

    <div className="py-8">
      <Slider {...settings}>
        {
          PRODUCTS.map((item, idx) => (
            <div key={idx} className={`${idx % 2 == 0 ? "bg-color-1" : "bg-color-2"} hover:scale-150 transition-transform duration-500 ease-in-out cursor-pointer`}>
              <Image src={idx % 2 == 0 ? item.images.dark.back : item.images.light.back} width={350} height={850} alt="model-back" priority className="m-auto" />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}