'use client'

import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from "@/constant/navbar";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLogout, MdPersonOutline } from "react-icons/md";
import { Divider } from '../atoms';
import { useContext } from 'react';
import { ModalContext } from '@/context/ContextWrapper';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"

export const Navbar = () => {
  const path = usePathname();
  const modal = useContext(ModalContext);
  const { status } = useSession();

  const handleOpenLoginModal = () => {
    modal.toggle('auth');
  }

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
                <li key={_idx} className='relative'>
                  <Link href={item.path}>
                    {item.label}
                  </Link>
                  {item.path == path && (
                    <div className="absolute w-full">
                      <Divider />
                    </div>
                  )}
                </li>
              ))
            }
          </ul>

          <div className="relative flex items-center gap-2 top-0 w-1/12">
            {
              status == "unauthenticated" ?
                <button className="text-color-2 p-4" onClick={handleOpenLoginModal}>
                  <MdPersonOutline className="text-4xl" />
                </button>
                :
                <>
                  <Link href="/favourite" className="bg-color-2 text-white p-4">
                    <AiOutlineHeart className="text-4xl" />
                  </Link>
                  <button className="text-color-2 p-4" onClick={() => signOut()}>
                    <MdLogout className="text-4xl" />
                  </button>
                </>
            }
          </div>
        </div>
        <button className="md:hidden text-4xl">
          <FiMenu />
        </button>
      </div>
    </nav>
  )
}