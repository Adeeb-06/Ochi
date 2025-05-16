'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'

const foundersGrotesk = localFont({
    src: '../app/fonts/FoundersGroteskXCond-Bold.otf',
    display: 'swap',
})
const foundersNeue = localFont({
    src: '../app/fonts/NeueMontreal-Regular.ttf',
    display: 'swap',
})

const Ready = () => {
    const [rotate, setRotate] = useState(0)
    // const [y, sety] = useState(second)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

            setRotate(angle - 180)

        })
    })

    return (
        <div className="w-full h-screen relative   bg-[#CDEA68] flex justify-center items-center px-14 flex-col ">
            <div className="absolute flex gap-10 -translate-x-[50%] -translate-y-[60%] top-1/2 left-1/2">
                <div className='w-[13vw] items-center flex justify-center h-[13vw] bg-zinc-100 rounded-full  '>
                    <div className=' w-2/3 relative bg-black h-2/3 rounded-full text-center flex items-center justify-center text-xl '>
                        <div style={{ transform: `rotate(${rotate}deg)  ` }} className="line absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 w-full h-10 ">

                            <div className='bg-zinc-100 rounded-full h-8 w-8 text-center flex items-center justify-center text-xl '>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[13vw]  items-center flex justify-center h-[13vw] bg-zinc-100 rounded-full  '>
                    <div className=' w-2/3 bg-black h-2/3 rounded-full text-center relative '>
                        <div style={{ transform: ` rotate(${rotate}deg)  ` }} className="line absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 w-full h-10 ">

                            <div className='bg-zinc-100 rounded-full h-8 w-8 text-center flex items-center justify-center text-xl '>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="textstructure  px-14 text-center flex justify-center items-center flex-col">
                {["Ready", " to Start ", "the project"].map((item, index) => (
                    <div className="masker" key={index}>

                        <div className='w-fit flex items-end overflow-hidden '>
                            <h1 className={` ${foundersGrotesk.className} pt-[2vw] -mb-[.9vw] text-[15vw] text-black uppercase leading-[.75] font-[500] tracking `}>{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button className={` uppercase  bg-zinc-900 border-1 border-zinc-300 rounded-4xl p-4  ${foundersNeue.className}`}>Start The Project</button>
            </div>
        </div>
    )
}

export default Ready