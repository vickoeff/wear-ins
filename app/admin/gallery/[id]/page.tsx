'use client'

import React, { useContext, useEffect } from 'react';
import { HiMiniPlus, HiPencil, HiTrash } from 'react-icons/hi2';
import Image from "next/image";
import { ModalContext } from '@/context/ContextWrapper';
import { usePathname } from 'next/navigation';
import { useGallery } from '@/hooks/useGallery';
import { deletePhoto } from '@/services/gallery/deletePhoto';

const CreateProductPage: React.FC = () => {
  const path = usePathname();
  const productId = path.split("/").at(-1) as string;

  const modal = useContext(ModalContext);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const { data, isLoading, refetch } = useGallery(productId, page, pageSize);

  const handleOpenModal = () => {
    modal.toggle("add_gallery_photo", productId);
  }

  const handleEditModal = (id: string) => {
    modal.toggle("edit_gallery_photo", id);
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this photo?')) {
      try {
        await deletePhoto(id);
      } catch (error) {
        console.error('Error delete photo:', error);
      }

      refetch();
    }
  }

  useEffect(() => {
    if (!modal.isOpen['add_gallery_photo'] && !modal.isOpen['edit_gallery_photo']) {
      refetch();
    }
  }, [modal.isOpen, refetch]);

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
            <button className='flex items-center bg-color-2 px-4 py-2 rounded-lg' onClick={handleOpenModal}><HiMiniPlus />  Add Photo</button>
          </div>
          <table className="min-w-full text-left text-xs whitespace-nowrap">

            <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 border-t">
              <tr>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Product Photo
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Description
                </th>
                <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {
                isLoading ?
                  <tr className={`border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 animate-pulse`}>
                    <td scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                      <div className="w-[160px] h-[160px] bg-slate-500 bg-opacity-40 rounded-lg"></div>
                    </td>
                    <td scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                      <div className="w-[160px] h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
                    </td>
                    <td scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                      <div className="w-[160px] h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
                    </td>
                  </tr> :
                  data?.gallery.map((photo, _idx) => {
                    const isEven = _idx % 2 !== 0;
                    return (
                      <tr key={photo.id} className={`border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 ${isEven ? 'bg-neutral-50 dark:bg-neutral-800' : ''}`}>
                        <td scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                          <Image id="new-image-front" src={photo.imageUrl} alt={`photo ${_idx} of ${photo.productId}`} width={160} height={160} />
                        </td>
                        <td className="px-6 py-4 border-x dark:border-neutral-600">{photo.description}</td>
                        <td className="px-6 py-4 border-x dark:border-neutral-600">
                          <div className=" flex gap-2 items-center justify-center">
                            <button className='flex items-center gap-2 bg-gray-700 p-2 rounded-md' onClick={() => handleEditModal(photo.id)}><HiPencil />Edit</button>
                            <button className='flex items-center gap-2 bg-red-400 p-2 rounded-md' onClick={() => handleDelete(photo.id)}><HiTrash />Delete</button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>

          </table>

          <nav className="mt-5 flex items-center justify-between text-sm" aria-label="Page navigation example">
            {
              isLoading ?
                <div className="w-[40px] h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
                :
                <p>
                  Showing <strong>{pageSize * page - (pageSize - 1)} - {data && pageSize > data?.total ? data?.total : pageSize}</strong> of <strong>{data?.total}</strong>
                </p>
            }

            {
              isLoading ?
                <div className="w-[160px] h-4 bg-slate-500 bg-opacity-40 rounded-lg"></div>
                :
                <ul className="list-style-none flex">
                  <li>
                    <a
                      className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!"
                      onClick={() => setPage(page - 1)}
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!"
                      onClick={() => setPage(1)}
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      href="#!"
                      onClick={() => setPage(page + 1)}
                    >
                      Next
                    </a>
                  </li>
                </ul>
            }
          </nav>

        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;