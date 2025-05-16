import React, { useState } from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'


const foundersNeue = localFont({
    src: '../app/fonts/NeueMontreal-Regular.ttf',
    display: 'swap',
})
const Featured = () => {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) =>{
     cards[index].start({ y: "100%" })   
    }

    return (
        <>
            <div  className='w-full py-14 '>
                <div className="w-full px-20 border-b-1 border-zinc-700 pb-16 ">
                    <h1 className={`${foundersNeue.className} text-7xl tracking-tight`} >Featured Projects</h1>
                </div>
                <div className="px-20">

                    <div className="cards flex gap-10 mt-10 w-full  ">

                        <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)
                        } className="cardcontainer relative  w-1/2 h-[80vh]   ">
                            <h1 className='absolute flex text-[#CDEA68] overflow-hidden leading-none tracking-tight left-full z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 text-7xl '>
                                {"FYDE".split("").map((item, index) => (<motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.02}} key={index} className="inline-block " >{item}</motion.span>))}
                            </h1>
                            <div className="text-sm uppercase mb-2 flex items-center">
                                <span className="w-[0.7vw] h-[0.7vw] flex-shrink-0 rounded-full bg-current mr-2"></span>
                                <span>Cardboard Spaceship</span>
                            </div>

                            <div className="w-full mt-5 h-full rounded-xl overflow-hidden  relative ">
                                <Image fill alt='sd' src={'/f1.png'} className='absolute' />
                            </div>
                        </motion.div>
                        <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)
                        } className="cardcontainer relative  w-1/2 h-[80vh]   ">
                            <h1 className='absolute flex text-[#CDEA68] overflow-hidden leading-none tracking-tight right-full z-20 top-1/2 -translate-y-1/2 translate-x-1/2 text-7xl '>
                                {"VSIA".split("").map((item, index) => (<motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.02}} key={index} className="inline-block " >{item}</motion.span>))}
                            </h1>
                            <div className="text-sm uppercase mb-2 flex items-center">
                                <span className="w-[0.7vw] h-[0.7vw] flex-shrink-0 rounded-full bg-current mr-2"></span>
                                <span>Cardboard Spaceship</span>
                            </div>

                            <div className="w-full mt-5 h-full rounded-xl overflow-hidden  relative ">
                                <Image fill alt='sd' src={'/f2.png'} className='absolute' />
                            </div>
                        </motion.div>
                       


                    </div>
                </div>
            </div >
        </>
    )
}

export default Featured