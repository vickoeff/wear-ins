import { Product } from '@prisma/client';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreateProductPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Product>();

  const onSubmit = async (data: Product) => {
    console.log("data: ", data);
  };

  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" {...register('price', { required: true })} />
          {errors.price && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" {...register('stock', { required: true })} />
          {errors.stock && <span>This field is required</span>}
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductPage;