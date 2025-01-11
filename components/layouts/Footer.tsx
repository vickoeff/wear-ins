import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="relative bg-color-2 mt-32 text-color-1 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 md:gap-20">
          <div className="relative -translate-y-[80%] -mb-20 md:mb-0 bg-color-1 rounded-md w-fit">
            <Link href="/" >
              <Image src="/logo-light.png" width={160} height={64} alt="Logo" />
            </Link>
          </div>
          <div className="mb-5 md:mb-0">
            <h2 className="font-staatliches tracking-wider text-2xl md:text-4xl mb-2 text-center md:text-start">Contact Us:</h2>
            <ul className="flex justify-center md:justify-start gap-10">
              <li className="text-xl">
                <Link href="">
                  <div className="flex font-light items-center gap-2">
                    <BsWhatsapp /> <span className="text-sm md:text-lg">+62895-2268-6349</span>
                  </div>
                </Link>
              </li>
              <li className="text-xl">
                <Link href="">
                  <div className="flex font-light items-center gap-2">
                    <BsInstagram /><span className="text-sm md:text-lg">@wear.ins</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <small className="font-light block text-center text-xs md:inline md:float-end">© 2021 Wear.Ins, Inc. Some Rights Reserved</small>
      </div>
    </footer>
  )
}