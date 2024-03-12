"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { BackgroundGradient } from './ui/BackgroundGradient';


function SecondHero() {
  return (
    <div className=' py-12 bg-slate-900'>
        <div>
            <div className=' text-center'>
                <h2 className=' text-base text-teal-600 font-bold tracking-wide'>FEATURED COURSES</h2>
                 <p className=' mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white'>Learn with the best</p>
            </div>
        </div>
        <div className=' mt-10'>
            <div className=' grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center m-5'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> 
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> 
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> 
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> 
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> 
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> 
      </BackgroundGradient>
            
            </div>
        </div>
        <div>
            <div className='mt-20 text-center text-white'>
             <Link href={"/courses"}
             className=' px-3 py-2 rounded-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-slate-800 hover:text-white transition duration-200'
             >View Courses</Link>
            </div>
        </div>
    </div>
  )
}

export default SecondHero