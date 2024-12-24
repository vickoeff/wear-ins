'use client'

import { Badges } from '@/components/atoms';
import React, { useContext } from 'react';
import { HiMiniPlus, HiTrash } from 'react-icons/hi2';
import Image from "next/image";
import { PRODUCTS } from '@/constant/products';
import { ModalContext } from '@/context/ContextWrapper';

const CreateProductPage: React.FC = () => {
  const modal = useContext(ModalContext);

  const handleOpenModal = () => {
    modal.toggle("create_product");
  }

  return (
    <div>
      <div className="overflow-x-auto bg-color-4 dark:text-white rounded-lg shadow overflow-hidden py-24">
        <div className="container">

          <div className="flex justify-between items-center mb-4">
            <div className="relative m-[2px] mb-3 mr-5 float-left">
              <label htmlFor="inputSearch" className="sr-only">Search </label>
              <input id="inputSearch" type="text" placeholder="Search..." className="block w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
            </div>
            <button className='flex items-center bg-color-2 px-4 py-2 rounded-lg' onClick={handleOpenModal}><HiMiniPlus />  Add Product</button>
          </div>
          <table className="min-w-full text-left text-xs whitespace-nowrap">

            <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 border-t">
              <tr>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Light Image
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Dark Image
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Price
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Stock
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                  <Image id="new-image-front" src={PRODUCTS[1].images.light.front} alt={PRODUCTS[0].name} width={160} height={160} />
                </th>
                <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                  <Image id="new-image-front" src={PRODUCTS[1].images.dark.front} alt={PRODUCTS[1].name} width={160} height={160} />
                </th>
                <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                  Handbag
                </th>
                <td className="px-6 py-4 border-x dark:border-neutral-600">$129.99</td>
                <td className="px-6 py-4 border-x dark:border-neutral-600">30</td>
                <td className="px-6 py-4 border-x dark:border-neutral-600"><Badges label={"In Stock"} state="success" /></td>
                <td className="px-6 py-4 border-x dark:border-neutral-600"><button className='flex items-center gap-2 bg-red-500 p-2 rounded-sm'><HiTrash />Delete</button></td>
              </tr>

              <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 bg-neutral-50 dark:bg-neutral-800">
                <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                  <Image id="new-image-front" src={PRODUCTS[0].images.light.front} alt={PRODUCTS[0].name} width={160} height={160} />
                </th>
                <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                  <Image id="new-image-front" src={PRODUCTS[0].images.dark.front} alt={PRODUCTS[0].name} width={160} height={160} />
                </th>
                <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                  Shoes
                </th>
                <td className="px-6 py-4 border-x dark:border-neutral-600">$89.50</td>
                <td className="px-6 py-4 border-x dark:border-neutral-600">0</td>
                <td className="px-6 py-4 border-x dark:border-neutral-600"><Badges label={"Out Of Stock"} state="error" /></td>
                <td className="px-6 py-4 border-x dark:border-neutral-600"><button className='flex items-center gap-2 bg-red-500 p-2 rounded-sm'><HiTrash />Delete</button></td>
              </tr>

            </tbody>

          </table>

          <nav className="mt-5 flex items-center justify-between text-sm" aria-label="Page navigation example">
            <p>
              Showing <strong>1-5</strong> of <strong>10</strong>
            </p>

            <ul className="list-style-none flex">
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  className="relative block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
                  href="#!"
                >
                  2
                  <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;