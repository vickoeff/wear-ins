'use client'

import Image from "next/image";
import { useState } from "react";

interface ICatalogCardProps {
  images: {
    light: {
      front: string;
      back: string;
    }
    dark: {
      front: string;
      back: string;
    }
  }
  name: string;
  material: string;
  size: string[] | string;
  price: string | number;
  stock: string | number;
}

export const CatalogCard = ({ images, name, material, price, size, stock }: ICatalogCardProps) => {
  const [selectedColor, setSelectedColor] = useState<"light" | "dark">("light");

  return (
    <div className="flex flex-col items-center mx-4">
      <div className="bg-color-3 px-4 py-4 w-full font-staatliches tracking-wide shadow-lg rounded-2xl border-color-4 border-2">
        <div className="relative pt-3">
          <div className="bg-color-1 w-full h-[24px] mb-3 rounded-2xl shadow-inner"></div>
          <div className="absolute top-[4px] left-0 right-0 mx-auto bg-color-1 w-1/4 h-[24px] mb-3 rounded-2xl shadow-inner"></div>
        </div>
        <div className="bg-color-1 w-full h-[360px] mb-3 rounded-2xl">
          <div className="relative top-10 w-[350px] mx-auto h-[360px]">
            <Image src={images[selectedColor].back} width={350} height={3025} alt="model-1" priority className="absolute -top-8 -left-[15%] max-w-[200%]" />
            <Image src={images[selectedColor].front} width={350} height={3025} alt="model-1" priority className="absolute left-[12%] max-w-[200%]" />
          </div>
        </div>
        <h3 className="bg-color-1 p-2 text-center font-bold uppercase text-xl mb-2 rounded-full">{name}</h3>
        <div className="grid">
          <div className="bg-color-1 p-1 px-4 my-1 border-color-3 rounded-full">
            <span className="inline-block min-w-16">MATERIAL:</span>
            <span>{material}</span>
          </div>
          <div className="bg-color-1 p-1 px-4 my-1 rounded-full">
            <span className="inline-block min-w-16">SIZE:</span>
            <span>{typeof size === "object" ? size.join(", ") : size}</span>
          </div>
          <div className="flex">
            <div className="bg-color-1 p-1 px-4 my-1 rounded-full">
              <span className="inline-block min-w-16">STOCK:</span>
              <span>{stock}</span>
            </div>
            <div className="flex p-1 px-4 my-1 rounded-full gap-2 justify-around">
              <span className="inline-block flex-1">COLOR:</span>
              <fieldset className="flex gap-2">
                <div id={name + "color"} className={`bg-color-1 p-3 w-[60px] rounded-full border-2 cursor-pointer ${selectedColor === "light" && "border-blue-600"}`} onClick={() => setSelectedColor("light")} />
                <div id={name + "color"} className={`bg-color-2 p-3 w-[60px] rounded-full border-2 cursor-pointer ${selectedColor === "dark" && "border-blue-600"}`} onClick={() => setSelectedColor("dark")} />
              </fieldset>
            </div>
          </div>
          <div className="bg-color-1 p-1 px-4 my-1 rounded-full">
            <p className="relative w-fit mx-auto before:content-[''] before:w-full before:h-[1px] before:absolute before:top-0 before:bottom-0 before:my-auto before:bg-color-2">{price}</p>
            <p className="text-center text-3xl">{price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}