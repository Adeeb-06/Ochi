"use client"
import React from 'react'
import localFont from 'next/font/local'
import {motion} from 'framer-motion'

const foundersGrotesk = localFont({
    src: '../app/fonts/FoundersGroteskXCond-Bold.otf',
    display: 'swap',
})


const Marquee = () => {
  return (
    <>
    <div data-scroll data-scroll-offset="-100%, -100%" data-scroll-section data-scroll-speed=".65"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] '>
        <div className="text border-b-1 border-t-1 border-zinc-500 flex  whitespace-nowrap overflow-hidden">
           <motion.h1  
           initial={{x:0}} 
           animate={{x:"-100%"}} 
           transition={{ease:"linear" , repeat:Infinity , duration:10}} 
           className={` ${foundersGrotesk.className} font-semibold uppercase pt-10 -mt-[2vw] -mb-[7vw]   text-[24vw] leading-none pr-10 `}> We Are Ochi</motion.h1>
           <motion.h1 
           initial={{x:0}} 
           animate={{x:"-100%"}} 
           transition={{ease:"linear" , repeat:Infinity , duration:10}} 
           className={` ${foundersGrotesk.className} font-semibold uppercase pt-10  -mt-[2vw] -mb-[7vw] text-[24vw] leading-none pr-10 `}> We Are Ochi</motion.h1>
        </div>
    </div>
    </>
  )
}

export default Marquee