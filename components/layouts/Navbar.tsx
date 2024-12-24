import { NAV_ITEMS } from "@/constant/navbar";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container flex justify-between items-center px-4 md:px-0 py-2 md:py-0">
        <Link href="/">
          <Image src="/logo-light.png" width={64} height={64} alt="Logo" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {/** Navbar Items */}
          <ul className="flex gap-8">
            {
              NAV_ITEMS.map((item, _idx) => (
                <li key={_idx}>
                  <Link href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="relative flex items-center gap-4 top-0 w-1/12">
            <Link href="/favourite" className="bg-color-2 text-white p-4">
              <HiOutlineHeart className="text-4xl" />
            </Link>
          </div>
        </div>
        <button className="md:hidden text-4xl">
          <FiMenu />
        </button>
      </div>
    </nav>
  )
}