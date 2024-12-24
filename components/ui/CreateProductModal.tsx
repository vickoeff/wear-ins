import { ModalContext } from '@/context/ContextWrapper';
import { Product } from '@prisma/client';
import { MouseEventHandler, useContext } from 'react';
import { useForm } from 'react-hook-form';

export const CreateProductModal = () => {
  const modal = useContext(ModalContext);
  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm<Product>();

  const onSubmit = async (data: Product) => {
    console.log("data: ", data);
  };

  const closeModal: MouseEventHandler<HTMLDivElement> = () => {
    modal.toggle('create_product');
    clearErrors();
    reset();
  }

  if (!modal.isOpen['create_product']) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
      <div className='w-1/3 bg-white p-8 rounded-lg' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-xl mb-4">Create New Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className='flex flex-col mb-2'>
            <label htmlFor="name" className='text-xs'>Name</label>
            <input id="name" className='border border-color-2 py-2 px-4 rounded-md' {...register('name', { required: true })} />
            {errors.name && <span className='text-red-500'>This field is required</span>}
          </fieldset>
          <fieldset className='flex flex-col mb-2'>
            <label htmlFor="price" className='text-xs'>Price</label>
            <input type="number" className='border border-color-2 py-2 px-4 rounded-md' id="price" {...register('price', { required: true })} />
            {errors.price && <span className='text-red-500'>This field is required</span>}
          </fieldset>
          <fieldset className='flex flex-col mb-2'>
            <label htmlFor="stock" className='text-xs'>Stock</label>
            <input type="number" className='border border-color-2 py-2 px-4 rounded-md' id="stock" {...register('stock', { required: true })} />
            {errors.stock && <span className='text-red-500'>This field is required</span>}
          </fieldset>

          <button type="submit" className='bg-color-2 py-2 px-4 text-color-1 rounded-lg mt-2'>Create Product</button>
        </form>
      </div>
    </div>
  )
};