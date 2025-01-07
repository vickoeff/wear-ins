'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICatalogCardProps {
  id: string;
  darkFront: string;
  darkBack: string;
  lightFront: string;
  lightBack: string;
  name: string;
  material: string;
  size: string[] | string;
  price: string | number;
  stock: string | number;
  className?: string;
}

export const CatalogCard = ({ id, darkFront, darkBack, lightFront, lightBack, name, material, price, size, stock, className }: ICatalogCardProps) => {
  const [selectedColor, setSelectedColor] = useState<"light" | "dark">("light");

  return (
    <div className={`flex flex-col items-center mx-4 ${className}`}>
      <div className="bg-color-3 px-4 py-4 w-full font-staatliches tracking-wide shadow-lg rounded-2xl border-color-4 border-2">
        <div className="relative pt-3">
          <div className="bg-color-1 w-full h-[24px] mb-3 rounded-2xl shadow-inner"></div>
          <div className="absolute top-[4px] left-0 right-0 mx-auto bg-color-1 w-1/4 h-[24px] mb-3 rounded-2xl shadow-inner"></div>
        </div>
        <div className="bg-color-1 w-full h-[360px] mb-3 rounded-2xl">
          <div className="relative top-10 w-[350px] mx-auto h-[360px]">
            <Image src={selectedColor === "dark" ? darkFront : lightFront} width={350} height={3025} alt="model-back" priority className="absolute -top-8 -left-[15%] max-w-[200%]" />
            <Image src={selectedColor === "dark" ? darkBack : lightBack} width={350} height={3025} alt="model-front" priority className="absolute left-[12%] max-w-[200%]" />
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
                <div id={name + "color"} className={`bg-color-1 p-3 w-[60px] rounded-full border-2 cursor-pointer ${selectedColor === "light" && "border-x-fuchsia-600"} `} onClick={() => setSelectedColor("light")} />
                <div id={name + "color"} className={`bg-color-2 p-3 w-[60px] rounded-full border-2 cursor-pointer ${selectedColor === "dark" && "border-x-fuchsia-600"} `} onClick={() => setSelectedColor("dark")} />
              </fieldset>
            </div>
          </div>
          <div className="bg-color-1 p-1 px-4 my-1 rounded-full">
            <p className="relative w-fit mx-auto before:content-[''] before:w-full before:h-[1px] before:absolute before:top-0 before:bottom-0 before:my-auto before:bg-color-2">{price}</p>
            <p className="text-center text-3xl">{price}</p>
          </div>
          <Link href={`/product/${id}`} className="bg-color-1 p-1 px-4 my-1 rounded-full text-center border-2 border-color-2">Check Detail</Link>
        </div>
      </div>
    </div>
  )
}

export const SkeletonCard = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center animate-pulse mx-4 ${className}`}>
      <div className="bg-color-3 px-4 py-4 w-full font-staatliches tracking-wide shadow-lg rounded-2xl border-color-4 border-2">
        <div className="relative pt-3">
          <div className="bg-color-1 w-full h-[24px] mb-3 rounded-2xl shadow-inner"></div>
          <div className="absolute top-[4px] left-0 right-0 mx-auto bg-color-1 w-1/4 h-[24px] mb-3 rounded-2xl shadow-inner"></div>
        </div>
        <div className="bg-color-1 w-full h-[360px] mb-3 rounded-2xl bg-slate-500 bg-opacity-40"></div>
        <div className="grid">
          <div className="bg-color-1 p-1 px-4 my-1 border-color-3 rounded-full">
            <div className="w-20 mx-auto h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
          </div>
          <div className="flex gap-2 bg-color-1 p-1 px-4 my-1 rounded-full">
            <div className="w-16 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
            <div className="w-20 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
          </div>
          <div className="flex">
            <div className="bg-color-1 p-1 px-4 my-1 rounded-full">
              <div className="w-20 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
            </div>
            <div className="flex p-1 px-4 my-1 rounded-full gap-2 justify-around">
              <div className="w-16 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
              <div className="w-20 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-2 bg-color-1 p-1 px-4 my-1 rounded-full">
            <div className="w-16 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
            <div className="w-20 h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}