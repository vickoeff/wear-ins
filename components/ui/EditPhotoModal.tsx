'use client'

import { ModalContext } from '@/context/ContextWrapper';
import { getPhotoById } from '@/services/gallery/getPhotoById';
import { editPhoto } from '@/services/gallery/updatePhoto';
import { Gallery } from '@prisma/client';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const EditPhotoModal = () => {
  const modal = useContext(ModalContext);
  const { register, handleSubmit, reset, clearErrors, setValue, formState: { errors } } = useForm<Gallery>();

  const onSubmit = async (data: Gallery) => {
    await editPhoto(modal.params as string, data).then(() => modal.toggle('edit_gallery_photo'));
  };

  const closeModal: MouseEventHandler<HTMLDivElement> = () => {
    modal.toggle('edit_gallery_photo');
    clearErrors();
    reset();
  }


  useEffect(() => {
    if (modal.params) {
      const getProduct = async () => {
        await getPhotoById(modal.params as string).then((res) => {
          Object.keys(res.product).forEach((key) => {
            // @ts-expect-error "fix in next udpate"
            setValue(key, res.product[key]);
          })
        });
      }

      getProduct();
    }
  }, [modal.params, setValue]);

  if (!modal.isOpen['edit_gallery_photo']) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
      <div className='w-full md:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-xl mb-4">Edit Photo</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className='flex flex-1 flex-col mb-2'>
            <label htmlFor="name" className='text-xs mb-1'>Image Url</label>
            <input id="name" className='border border-color-2 py-2 px-4 rounded-md' {...register('imageUrl', { required: true })} />
            {errors.imageUrl && <span className='text-red-500'>This field is required</span>}
          </fieldset>
          <fieldset className='flex  flex-1 flex-col mb-2'>
            <label htmlFor="description" className='text-xs mb-1'>Description</label>
            <input type="text" className='w-full border border-color-2 py-2 px-4 rounded-md' id="price" {...register('description', { required: true })} />
            {errors.description && <span className='text-red-500'>This field is required</span>}
          </fieldset>

          <button type="submit" className='bg-color-2 py-2 px-4 text-color-1 rounded-lg mt-2'>Save Photo</button>
        </form>
      </div>
    </div>
  )
};