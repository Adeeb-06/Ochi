'use client'
import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0)
    // const [y, sety] = useState(second)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
            
            setRotate(angle-180)

        })
    })
    

    return (
        <>
            <div className='w-full h-screen overflow-hidden'>
                <div className=" eyes relative h-full w-full bg-cover bg-center ">
                    <div className="absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2">
                        <div className='w-[15vw] items-center flex justify-center h-[15vw] bg-zinc-100 rounded-full  '>
                            <div className=' w-2/3 relative bg-black h-2/3 rounded-full text-center flex items-center justify-center text-xl '>
                            <div style={{transform:`rotate(${rotate}deg)  `}} className="line absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 w-full h-10 ">

                                <div className='bg-zinc-100 rounded-full h-8 w-8 text-center flex items-center justify-center text-xl '>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='w-[15vw]  items-center flex justify-center h-[15vw] bg-zinc-100 rounded-full  '>
                            <div className=' w-2/3 bg-black h-2/3 rounded-full text-center relative '>
                               <div style={{transform:` rotate(${rotate}deg)  `}} className="line absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 w-full h-10 ">

                                <div className='bg-zinc-100 rounded-full h-8 w-8 text-center flex items-center justify-center text-xl '>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eyes