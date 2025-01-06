'use client'

import { ModalContext } from '@/context/ContextWrapper';
import { MouseEventHandler, startTransition, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider } from '../atoms';
import Image from "next/image";
import { z } from 'zod';
import { LoginSchema } from '@/schema';
import { login } from '@/services/auth/login';

interface IFormLogin { name: string; email: string, password: string, confirmPassword: string }

export const AuthModal = () => {
  const modal = useContext(ModalContext);
  const [isRegister, setRegister] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState("");
  const [successSubmit, setSubmitSuccess] = useState("");
  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm<IFormLogin>();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setSubmitError("");
    startTransition(() => {
      login(values)
        .then(data => {
          if (data?.error) {
            reset();
            setSubmitError(data.error);
          }

          if (data?.success) {
            reset();
            setSubmitSuccess(data.success);
          }
        })
        .catch(() => setSubmitError("Something went wrong"));
    });
  };

  const closeModal: MouseEventHandler<HTMLDivElement> = () => {
    modal.toggle('auth');
    clearErrors();
    reset();
  }

  if (!modal.isOpen['auth']) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50' onClick={closeModal}>
      <div className='w-full md:w-1/4 2xl:w-1/5 bg-color-1 p-8 rounded-lg shadow-md' onClick={(e) => e.stopPropagation()}>
        <div className="text-right -mb-5">
          <h1 className="mb-4 font-staatliches text-8xl">{isRegister ? "REGISTER" : "LOGIN"}</h1>
          <h2 className="relative -top-5 font-poppins text-3xl font-bold">Wear.Ins</h2>
        </div>
        <Divider />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 mb-5">
            {isRegister &&
              <fieldset className='flex flex-1 flex-col mb-2'>
                <label htmlFor="name" className='text-xs mb-1'>Name</label>
                <input type="text" {...register('name')} className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Confirm Password' />
                {errors.password && <span className='text-red-500'>Please confirm the password</span>}
              </fieldset>}
            <fieldset className='flex flex-1 flex-col mb-2'>
              <label htmlFor="email" className='text-xs mb-1'>Email</label>
              <input id="email" className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Email'  {...register('email', { required: true })} />
              {errors.email && <span className='text-red-500'>Please input your email</span>}
            </fieldset>
            <fieldset className='flex flex-1 flex-col mb-2'>
              <label htmlFor="password" className='text-xs mb-1'>Password</label>
              <input type="password" {...register('password', { required: true })} className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Password' />
              {errors.password && <span className='text-red-500'>Please input your password</span>}
            </fieldset>
            {isRegister &&
              <fieldset className='flex flex-1 flex-col mb-2'>
                <label htmlFor="password" className='text-xs mb-1'>Confirm Password</label>
                <input type="password" {...register('confirmPassword')} className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Confirm Password' />
                {errors.password && <span className='text-red-500'>Please confirm the password</span>}
              </fieldset>}
          </div>

          {
            isRegister ?
              <button type="submit" className='w-full bg-color-2 py-2 px-4 text-color-1 rounded-full mt-2 text-xl'>REGISTER</button> :
              <button type="submit" className='w-full bg-color-2 py-2 px-4 text-color-1 rounded-full mt-2 text-xl'>LOGIN</button>
          }
        </form>

        <div className="text-center text-sm">
          {
            isRegister ?
              <button className='text-sm my-6' onClick={() => setRegister(false)}>Already have an Account?</button>
              : <button className='text-sm my-6' onClick={() => setRegister(true)}>Sign Up for Free</button>
          }
          {/* <p className="relative mb-6 before:absolute before:content-[''] before:w-[calc(50%_-_16px)] before:h-[2px] before:bg-color-2 before:left-0 before:top-0 before:bottom-0 before:my-auto after:absolute after:content-[''] after:w-[calc(50%_-_16px)] after:h-[2px] after:bg-color-2 after:right-0 after:top-0 after:bottom-0 after:my-auto">Or</p>
          <button className="w-full grid grid-cols-[44px,_1fr] items-center gap-2 bg-white p-1 px-4 rounded-full m-auto shadow-lg hover:shadow-inner transition-shadow">
            <Image src="https://res.cloudinary.com/dkqzrblhj/image/upload/google.svg" alt="google logo" width={32} height={32} priority />
            <div className="font-poppins">
              <p className="text-color-3">Login By Google</p>
              <p>username@gmail.com</p>
            </div>
          </button> */}
        </div>
      </div >
    </div >
  )
};