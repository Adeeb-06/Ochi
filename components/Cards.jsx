import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local'

const foundersNeue = localFont({
    src: '../app/fonts/NeueMontreal-Regular.ttf',
    display: 'swap',
})

const Cards = () => {
    return (
        <>
            <div className='h-screen flex gap-10 w-full items-center px-14 bg-zinc-200'>
                <div className="containers w-1/2  h-[50vh]">
                    <div className="cards relative flex items-center justify-center  rounded-3xl w-full bg-[#004D43] h-full ">
                        <div className="img relative h-1/5  w-36 ">
                            <Image alt='lsj' src={'https://ochi.design/wp-content/uploads/2022/04/logo001.svg'} fill className='absolute' />
                        </div>
                        <button className={`absolute uppercase left-5 bottom-5 border-1 border-zinc-300 rounded-3xl py-1 px-3  ${foundersNeue.className}`}>&copy; 2019-2021</button>
                    </div>
                </div>
                <div className="containers flex h-[50vh] gap-10 w-1/2">
                    <div className="cards relative flex items-center justify-center  rounded-3xl w-1/2 bg-[#212121] h-full ">
                        <div className="img relative h-1/5  w-36 ">
                            <Image alt='ljl' src={'https://ochi.design/wp-content/uploads/2022/04/logo002.svg'} fill className='absolute' />
                        </div>
                       <button className={`absolute uppercase left-5 bottom-5 border-1 border-zinc-300 rounded-3xl py-1 px-3  ${foundersNeue.className}`}>5.0 rating on clutch</button>
                    </div>
                    <div className="cards relative rounded-3xl flex items-center justify-center  w-1/2 bg-[#212121] h-full ">
                        <div className="img relative h-1/3  w-36 ">
                            <Image alt='ljl' src={'https://ochi.design/wp-content/uploads/2022/04/logo003.png'} fill className='absolute' />
                        </div>
                        <button className={`absolute uppercase left-5 bottom-5 border-1 border-zinc-300 rounded-3xl py-1 px-3  ${foundersNeue.className}`}>Business Bootcamp Alumni</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards