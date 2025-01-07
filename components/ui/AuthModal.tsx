'use client'

import { ModalContext } from '@/context/ContextWrapper';
import { MouseEventHandler, startTransition, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider } from '../atoms';
// import Image from "next/image";
import { z } from 'zod';
import { LoginSchema, RegisterSchema } from '@/schema';
import { login } from '@/actions/login';
import { register as Register } from '@/actions/register';
import { emailVerification } from '@/actions/verification';

interface IFormAuth { name: string; email: string, password: string, confirmPassword: string, code: string }

export const AuthModal = () => {
  const modal = useContext(ModalContext);
  const [authState, setAuthState] = useState<'login' | 'register' | 'verify'>('login');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successSubmit, setSubmitSuccess] = useState<string | null>(null);
  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm<IFormAuth>();

  const onSubmit = async (values: z.infer<typeof LoginSchema> | z.infer<typeof RegisterSchema> | { code: string }) => {
    setSubmitError(null);
    setSubmitSuccess(null);
    if (authState === 'register') {
      startTransition(() => {
        Register(values as z.infer<typeof RegisterSchema>)
          .then(data => {
            if (data?.error) {
              reset();
              setSubmitError(data.error);
            }

            if (data?.success) {
              reset();
              setSubmitSuccess(data.success);
              setAuthState("verify");
            }
          })
          .catch(() => setSubmitError("Something went wrong"));
      });
    } else if (authState === 'login') {
      startTransition(() => {
        login(values as z.infer<typeof LoginSchema>)
          .then(data => {
            if (data?.error) {
              reset();
              setSubmitError(data.error);
            }

            if (data?.success) {
              reset();
              setSubmitSuccess(data.success);
              if (data.success.includes("Verify")) {
                return setAuthState("verify");
              }

              setTimeout(() => {
                modal.toggle("auth");
                window.location.reload();
              }, 1000);
            }
          })
          .catch(() => setSubmitError("Something went wrong"));
      });
    } else if (authState === 'verify') {
      const v = values as { code: string };
      startTransition(() => {
        emailVerification(v.code)
          .then(data => {
            if (data?.error) {
              reset();
              setSubmitError(data.error);
            }

            if (data?.success) {
              reset();
              setSubmitSuccess(data.success);
              setTimeout(() => setAuthState("login"), 1000);
            }
          })
          .catch(() => setSubmitError("Something went wrong"));
      });
    }
  };

  useEffect(() => {
    setSubmitError(null);
    setSubmitSuccess(null);
  }, [authState]);

  const closeModal: MouseEventHandler<HTMLDivElement> = () => {
    modal.toggle('auth');
    clearErrors();
    reset();

    setSubmitError(null);
    setSubmitSuccess(null);
  }

  if (!modal.isOpen['auth']) return null;

  if (authState === 'verify') return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center z-50' onClick={closeModal}>
      {(submitError || errors.root || successSubmit) && (
        <div className={`w-full md:w-1/4 2xl:w-1/5 ${successSubmit ? "bg-green-600" : "bg-red-600"} text-white p-2 rounded-t-lg text-center`}>
          <h3>
            {
              successSubmit ? successSubmit :
                submitError ? submitError : "Please check your field"
            }
          </h3>
        </div>
      )}
      <div className={`w-full md:w-1/4 2xl:w-1/5 bg-color-1 p-8 rounded-lg shadow-md transition-transform ${(submitError || errors.root) && "border-4 border-red-600  rounded-t-none"} ${successSubmit && "border-4 border-green-600 rounded-t-none"}`} onClick={(e) => e.stopPropagation()}>
        <div className="text-right -mb-5">
          <h1 className="mb-4 font-staatliches text-8xl">{authState}</h1>
          <h2 className="relative -top-5 font-poppins text-3xl font-bold">Wear.Ins</h2>
        </div>
        <Divider />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 mb-5">
            <p className="text-center text-sm text-gray-500 mb-4">
              Please check your email to get the verification code.
            </p>
            <fieldset className='flex flex-1 flex-col mb-2'>
              <label htmlFor="text" className='text-xs mb-1'>Code</label>
              <input id="text" className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Verify Code'  {...register('code', { required: true })} />
              {errors.code && <span className='text-red-500'>Invalid Code</span>}
            </fieldset>
          </div>

          <button type="submit" className='w-full bg-color-2 py-2 px-4 text-color-1 rounded-full mt-2 text-xl uppercase'>{authState}</button>
        </form>
      </div >
    </div >
  );

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center z-50' onClick={closeModal}>
      {(submitError || errors.root || successSubmit) && (
        <div className={`w-full md:w-1/4 2xl:w-1/5 ${successSubmit ? "bg-green-600" : "bg-red-600"} text-white p-2 rounded-t-lg text-center`}>
          <h3>
            {
              successSubmit ? successSubmit :
                submitError ? submitError : "Please check your field"
            }
          </h3>
        </div>
      )}
      <div className={`w-full md:w-1/4 2xl:w-1/5 bg-color-1 p-8 rounded-lg shadow-md transition-transform ${(submitError || errors.root) && "border-4 border-red-600 rounded-t-none"} ${successSubmit && "border-4 border-green-600 rounded-t-none"}`} onClick={(e) => e.stopPropagation()}>
        <div className="text-right -mb-5">
          <h1 className="mb-4 font-staatliches text-8xl">{authState}</h1>
          <h2 className="relative -top-5 font-poppins text-3xl font-bold">Wear.Ins</h2>
        </div>
        <Divider />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 mb-5">
            {authState === 'register' &&
              <fieldset className='flex flex-1 flex-col mb-2'>
                <label htmlFor="name" className='text-xs mb-1'>Name</label>
                <input type="text" {...register('name')} className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Your Name' />
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
            {authState === 'register' &&
              <fieldset className='flex flex-1 flex-col mb-2'>
                <label htmlFor="password" className='text-xs mb-1'>Confirm Password</label>
                <input type="password" {...register('confirmPassword')} className='py-2 px-4 border-2 border-color-2 rounded-full' placeholder='Confirm Password' />
                {errors.password && <span className='text-red-500'>Please confirm the password</span>}
              </fieldset>}
          </div>

          <button type="submit" className='w-full bg-color-2 py-2 px-4 text-color-1 rounded-full mt-2 text-xl uppercase'>{authState}</button>
        </form>

        <div className="text-center text-sm">
          {
            authState === 'register' ?
              <button className='text-sm my-6' onClick={() => setAuthState('login')}>Already have an Account?</button>
              : <button className='text-sm my-6' onClick={() => setAuthState('register')}>Sign Up for Free</button>
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