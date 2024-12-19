'use client'

import Image from "next/image";

interface ICatalogCardProps {
  imageFront: string;
  imageBack: string;
  name: string;
  size: string[] | string;
  price: string | number;
  stock: string | number;
}

export const CatalogCard = ({ imageFront, imageBack, name, price, size, stock }: ICatalogCardProps) => {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="relative w-full top-6 h-[280px]">
        <Image src={imageBack} width={400} height={3025} alt="model-1" priority className="absolute -top-8 -left-[20%] max-w-[200%]" />
        <Image src={imageFront} width={400} height={3025} alt="model-1" priority className="absolute left-[10%] max-w-[200%]" />
      </div>
      <div className="bg-color-3 px-4 pb-2 w-full font-staatliches tracking-wide ">
        <div className="bg-white w-full h-24 mb-3"></div>
        <h3 className="bg-color-1 p-2 text-center font-bold uppercase text-xl mb-2">{name}</h3>
        <table className="w-full">
          <tbody>
            <tr className="bg-white border-y-4 border-color-3">
              <td className="max-w-2 p-2">PRICE:</td>
              <td>{price}</td>
            </tr>
            <tr className="bg-white p-2 border-y-4">
              <td className="max-w-2 p-2">SIZE:</td>
              <td>{typeof size === "object" ? size.join(", ") : size}</td>
            </tr>
            <tr className="bg-white p-2 border-y-4">
              <td className="max-w-2 p-2">STOCK:</td>
              <td>{stock}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}