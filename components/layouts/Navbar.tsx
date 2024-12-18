import { NAV_ITEMS } from "@/constant/navbar";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <nav className="relative bg-white">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-light.png" width={64} height={64} alt="Logo" />
        </Link>

        <div className="flex items-center gap-10">
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
            <Link href="/favourite" className="top-0">
              <HiOutlineHeart className="text-4xl" />
            </Link>
            <Link href="/shopping-cart" className="bg-color-2 text-white p-4">
              <HiOutlineShoppingBag className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}