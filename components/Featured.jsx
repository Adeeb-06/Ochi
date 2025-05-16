import React from 'react'
import localFont from 'next/font/local'

const foundersNeue = localFont({
    src: '../app/fonts/NeueMontreal-Regular.ttf',
    display: 'swap',
})
const Featured = () => {
    return (
        <>
            <div className='w-full py-14 '>
                <div className="w-full px-20 border-b-1 border-zinc-700 pb-16 ">
                    <h1 className={`${foundersNeue.className} text-7xl tracking-tight`} >Featured Projects</h1>
                </div>
                <div className="px-20">

                    <div className="cards flex gap-10 mt-10 w-full  ">

                        <div className="card rounded-xl w-1/2 h-[80vh] bg-amber-700 "></div>
                        <div className="card rounded-xl w-1/2 h-[80vh] bg-amber-700 "></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured