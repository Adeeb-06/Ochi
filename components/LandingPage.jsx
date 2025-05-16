"use client"
import React from 'react'
import localFont from 'next/font/local'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const foundersGrotesk = localFont({
    src: '../app/fonts/FoundersGroteskXCond-Bold.otf',
    display: 'swap',
})

const LandingPage = () => {

    return (
        <>
            <div data-scroll data-scroll-offset="0, -100%" data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
                <div className="textstructure mt-46 px-14 ">
                    {["We Create", "eye-opening", "presentations"].map((item, index) => (
                        <div className="masker" key={index}>

                            <div className='w-fit flex items-end overflow-hidden '>
                                {index === 1 && (
                                    <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ duration: 0.8 , ease:[0.61, 1, 0.88, 1] }} className=' mr-5 w-[8vw] h-[4.6vw] relative -top-[.8vw] bg-green-500 rounded-md '></motion.div>)}
                                <h1 className={` ${foundersGrotesk.className} pt-[2vw] -mb-[.9vw] text-[7vw] uppercase leading-[.75] font-[500] tracking `}>{item}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='border-t-2 border-zinc-700 mt-20 flex justify-between py-5 px-14 items-center'>
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (<p key={index} className='font-light text-md tracking-tight  leading-none'>{item}</p>))}
                    <div className="start flex gap-[8px] ">
                        <div className='px-5 uppercase py-2 text-md border-[1px] border-zinc-400 rounded-full  '>
                            start the project
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400  rounded-full">
                            <span className='rotate-[45deg]'>

                                <FaArrowUpLong className='w-6 h-6' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage