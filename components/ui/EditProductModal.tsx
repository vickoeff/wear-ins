'use client'

import { ModalContext } from '@/context/ContextWrapper';
import { editProduct } from '@/services/product/editProduct';
import { getProductById } from '@/services/product/getProductById';
import { Product } from '@prisma/client';
import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const EditProductModal = () => {
  const modal = useContext(ModalContext);
  const [product, setProduct] = useState<Product | null>(null);
  const { register, handleSubmit, reset, clearErrors, setValue, formState: { errors } } = useForm<Product & { category: string, size: string }>();

  const onSubmit = async (data: Product) => {
    await editProduct(modal.params as string, { ...data, stock: Number(data.stock), price: `Rp ${data.price}` }).then(() => modal.toggle('edit_product'));
  };

  const closeModal: MouseEventHandler<HTMLDivElement> = () => {
    modal.toggle('edit_product');
    clearErrors();
    reset();
    setProduct(null);
  }

  useEffect(() => {
    if (modal.params) {
      const getProduct = async () => {
        await getProductById(modal.params as string).then((res) => {
          Object.keys(res.product).forEach((key) => {
            if (key === "price") return setValue(key, res.product[key] ? res.product[key]?.split(" ")[1] : 0);
            // @ts-expect-error "fix in next udpate"
            setValue(key, res.product[key]);
          })
        });
      }

      getProduct();
    }
  }, [modal.params, setValue]);

  if (!modal.isOpen['edit_product']) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
      <div className='w-full md:w-1/2 2xl:w-1/3 bg-white p-8 rounded-lg shadow-md' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-xl mb-4">Edit Product</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-1">
            <fieldset className='flex flex-1 flex-col mb-2'>
              <label htmlFor="name" className='text-xs mb-1'>Name</label>
              <input id="name" className='border border-color-2 py-2 px-4 rounded-md'  {...register('name', { required: true })} />
              {errors.name && <span className='text-red-500'>This field is required</span>}
            </fieldset>
            <fieldset className='flex  flex-1 flex-col mb-2'>
              <label htmlFor="price" className='text-xs mb-1'>Price</label>
              <input type="number" className='w-full border border-color-2 py-2 px-4 rounded-md' id="price" {...register('price', { required: true })} />
              {errors.price && <span className='text-red-500'>This field is required</span>}
            </fieldset>
          </div>
          <div className="flex gap-1">
            <fieldset className='flex flex-1 flex-col mb-2'>
              <label htmlFor="stock" className='text-xs mb-1'>Stock</label>
              <input type="number" className='border border-color-2 py-2 px-4 rounded-md' id="stock" defaultValue={product?.stock} {...register('stock', { required: true })} />
              {errors.stock && <span className='text-red-500'>This field is required</span>}
            </fieldset>
            <fieldset className='flex flex-1 flex-col mb-2'>
              <label htmlFor="category" className='text-xs mb-1'>Category</label>
              <select {...register('category')} className='border border-color-2 py-2 px-4 rounded-md' defaultValue={product?.category}>
                <option value="original">Original</option>
                <option value="villain">Villain</option>
              </select>
              {errors.stock && <span className='text-red-500'>This field is required</span>}
            </fieldset>
          </div>
          <div className="flex gap-1">
            <fieldset>
              <label htmlFor="size" className='text-xs mb-1'>Size</label>
              <input type="string" className='w-full border border-color-2 py-2 px-4 rounded-md mb-1' id="size" defaultValue={product?.size} {...register('size', { required: true })} placeholder='S, M, L, XL' />
              {errors.size && <span className='text-red-500'>This field is required</span>}
            </fieldset>
            <fieldset>
              <label htmlFor="material" className='text-xs mb-1'>Material</label>
              <select {...register('material')} className='w-full border border-color-2 py-2 px-4 rounded-md' id="material" defaultValue={product?.material} >
                <option value="Cotton 24s">Cotton 24s</option>
                <option value="100% full cotton">100% full cotton</option>
              </select>
              {errors.material && <span className='text-red-500'>This field is required</span>}
            </fieldset>
          </div>
          <fieldset className='flex flex-col mb-2'>
            <label htmlFor="darkFront" className='text-xs mb-1'>Dark Imager Url</label>
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md mb-1' id="darkFront" defaultValue={product?.darkFront}  {...register('darkFront', { required: true })} placeholder='T-shirt Front View' />
            {errors.stock && <span className='text-red-500'>This field is required</span>}
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md' id="darkBack" defaultValue={product?.darkBack} {...register('darkBack', { required: true })} placeholder='T-shirt Back View' />
            {errors.stock && <span className='text-red-500'>This field is required</span>}
          </fieldset>
          <fieldset className='flex flex-col mb-2'>
            <label htmlFor="lightFront" className='text-xs mb-1'>Light Image Url</label>
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md mb-1' id="lightFront" defaultValue={product?.lightFront} {...register('lightFront', { required: true })} placeholder='T-shirt Front View' />
            {errors.stock && <span className='text-red-500'>This field is required</span>}
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md' id="lightBack" defaultValue={product?.lightBack} {...register('lightBack', { required: true })} placeholder='T-shirt Back View' />
            {errors.stock && <span className='text-red-500'>This field is required</span>}
          </fieldset>
          <fieldset className='flex flex-col mb-2'>
            <label htmlFor="lightFront" className='text-xs mb-1'>Online Shop Url</label>
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md mb-1' id="shopee" defaultValue={product?.shopee} {...register('shopee')} placeholder='Shopee Url' />
            {errors.shopee && <span className='text-red-500'>This field is required</span>}
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md mb-1' id="tokopedia" defaultValue={product?.tokopedia} {...register('tokopedia')} placeholder='Tokopedia Url' />
            {errors.tokopedia && <span className='text-red-500'>This field is required</span>}
            <input type="string" className='border border-color-2 py-2 px-4 rounded-md' id="tiktok" defaultValue={product?.tiktok} {...register('tiktok')} placeholder='Tiktok Url' />
            {errors.tiktok && <span className='text-red-500'>This field is required</span>}
          </fieldset>

          <button type="submit" className='bg-color-2 py-2 px-4 text-color-1 rounded-lg mt-2'>Save Product</button>
        </form>
      </div>
    </div>
  )
};