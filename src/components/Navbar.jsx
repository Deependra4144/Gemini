import React from 'react'
import UserImg from '../assets/user.png'

function Navbar() {
    return (
        <nav className='flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-gray-100'>
            <div className='flex items-center gap-2'>
                <p className='text-xl sm:text-2xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
                    Gemini
                </p>
            </div>
            <button className='w-8 h-8 rounded-full overflow-hidden hover:ring-2 ring-violet-200 transition-all duration-200'>
                <img
                    className='w-full h-full object-cover'
                    src={UserImg}
                    alt="User Profile"
                />
            </button>
        </nav>
    )
}

export default Navbar
