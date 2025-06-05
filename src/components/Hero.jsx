import React from 'react'
import gallery from '../assets/image.png'
import microPhone from '../assets/microphone.png'
import compass from '../assets/compass.png'
function Hero() {
    return (
        <div className='md:px-28 relative h-full'>
            <p>Hello, Dev.</p>
            <p>How Can I help you today?</p>

            <div className='h-96 border flex gap-4 items-end flex-wrap md:flex-nowrap'>
                <div className=" w-1/4 bg-violet-200 p-5 relative rounded-lg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
                    <img className='w-4 absolute bottom-4 right-6' src={compass} alt="" />
                </div>
                <div className=" w-1/4 bg-violet-200 p-5 relative rounded-lg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
                    <img className='w-4 absolute bottom-4 right-6' src={compass} alt="" />
                </div>
                <div className=" w-1/4 bg-violet-200 p-5 relative rounded-lg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
                    <img className='w-4 absolute bottom-4 right-6' src={compass} alt="" />
                </div>
                <div className=" w-1/4 bg-violet-200 p-5 relative rounded-lg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
                    <img className='w-4 absolute bottom-4 right-6' src={compass} alt="" />
                </div>
            </div>

            <div className='fixed bottom-5 left-0 right-0 border ms-0 md:px-28 md:ms-28'>
                <div className='flex bg-violet-200 p-3 rounded-full'>
                    <input className='w-full bg-transparent outline-none px-3 ' type="search" placeholder='Enter a prompt here' />
                    <div className='flex space-x-2 pe-4'>
                        <img className='w-6 cursor-pointer' src={gallery} alt="" />
                        <img className='w-6 cursor-pointer' src={microPhone} alt="" />
                    </div>
                </div>
                <div className='text-sm my-3 text-center'>
                    <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
