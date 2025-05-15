import React from 'react'
import localFont from 'next/font/local'

const foundersNeue = localFont({
    src: '../app/fonts/NeueMontreal-Regular.ttf',
    display: 'swap',
})

const About = () => {
  return (
    <>
    <div className='w-full p-14 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className={`${foundersNeue.className} text-[4vw] leading-[4.5vw] tracking-tight `}>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-2 mt-16 pt-10 border-[#b0c75b] '>
            <div className='w-1/2'>
            <h1 className={`${foundersNeue.className} text-[4vw] leading-[4.5vw] tracking-tight `}>Our Approach:</h1>
            <div className="text mt-8 w-[35vw] text-[1.5vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis accusantium nisi neque sequi reprehenderit voluptatum consequuntur totam, magnam doloremque nesciunt maiores ut optio dolore aliquam assumenda. Exercitationem eos perferendis non officia?
            </div>
            </div>
            <div className='w-1/2 rounded-3xl h-[70vh]   bg-[#b3ca608a]   '>

            </div>
        </div>
    </div>
    </>
  )
}

export default About