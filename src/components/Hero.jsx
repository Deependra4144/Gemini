import React from 'react'
import gallery from '../assets/image.png'
import microPhone from '../assets/microphone.png'
import compass from '../assets/compass.png'

function Hero() {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex-1 px-4 sm:px-6 md:px-28 py-6 overflow-y-auto'>
                <div className='mb-8'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-2'>
                        Hello, Dev.
                    </h1>
                    <p className='text-lg sm:text-xl text-gray-600'>
                        How can I help you today?
                    </p>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24'>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-violet-100 hover:bg-violet-200 transition-colors duration-200 p-5 rounded-xl shadow-sm">
                            <p className='text-gray-700 mb-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                            </p>
                            <img className='w-4 ml-auto' src={compass} alt="Navigate" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed bottom input section */}
            <div className='sticky bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-6'>
                <div className='px-4 sm:px-6 md:px-28 pb-4'>
                    <div className='bg-white shadow-lg rounded-2xl border border-violet-100'>
                        <div className='flex items-center p-3'>
                            <input
                                className='flex-1 bg-transparent outline-none px-3 text-gray-700 placeholder-gray-500'
                                type="text"
                                placeholder='Enter a prompt here'
                            />
                            <div className='flex items-center gap-3 pl-4 border-l border-violet-100'>
                                <button className='p-2 hover:bg-violet-50 rounded-lg transition-colors duration-200'>
                                    <img className='w-5 h-5 opacity-70 hover:opacity-100' src={gallery} alt="Upload" />
                                </button>
                                <button className='p-2 hover:bg-violet-50 rounded-lg transition-colors duration-200'>
                                    <img className='w-5 h-5 opacity-70 hover:opacity-100' src={microPhone} alt="Voice" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-500 mt-3 px-4'>
                        <p>
                            Gemini may display inaccurate info, including about people, so double-check its responses.
                            <a href="#" className='text-violet-600 hover:underline ml-1'>Your privacy and Gemini Apps</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
