import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="relative bg-color-2 mt-32 text-color-1 py-12">
      <div className="container">
        <div className="flex gap-20">
          <div className="relative -translate-y-[80%] bg-color-1 rounded-md w-fit">
            <Link href="/" >
              <Image src="/logo-light.png" width={160} height={64} alt="Logo" />
            </Link>
          </div>
          <div>
            <h2 className="font-staatliches tracking-wider text-4xl mb-2">Contact Us:</h2>
            <ul className="flex gap-10">
              <li className="text-3xl">
                <Link href="">
                  <div className="flex font-light items-center gap-2">
                    <BsWhatsapp /> <span className="text-2xl">0895-2268-6349</span>
                  </div>
                </Link>
              </li>
              <li className="text-3xl">
                <Link href="">
                  <div className="flex font-light items-center gap-2">
                    <BsInstagram /><span className="text-2xl">@wear.ins</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <small className="font-light float-end">© 2021 Wear.Ins, Inc. Some Rights Reserved</small>
      </div>
    </footer>
  )
}