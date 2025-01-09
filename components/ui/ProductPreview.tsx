'use client'

import Slider from "react-slick";
import Image from "next/image";
import { useGallery } from "@/hooks/useGallery";

export const ProductPreview = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useGallery(productId);

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
          slidesToScroll: 1,
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
      {
        isLoading || !data ? (
          <div className="flex flex-row">
            <div className={`bg-color-1 hover:scale-150 flex-1 h-[350px] transition-transform duration-500 ease-in-out cursor-pointer animate-pulse`} />
            <div className={`bg-color-5 hover:scale-150 flex-1 h-[350px] transition-transform duration-500 ease-in-out cursor-pointer animate-pulse`} />
            <div className={`bg-color-4 hover:scale-150 flex-1 h-[350px] transition-transform duration-500 ease-in-out cursor-pointer animate-pulse`} />
          </div>
        ) : (
          <Slider {...settings}>
            {
              data?.gallery.map((photo, idx) => (
                <div key={idx} className={`${idx % 2 == 0 ? "bg-color-1" : "bg-color-2"} hover:scale-150 transition-transform duration-500 ease-in-out cursor-pointer`}>
                  <Image src={photo.imageUrl} width={350} height={850} alt={photo.description} priority className="m-auto" />
                </div>
              ))
            }
          </Slider>
        )
      }
    </div>
  )
}