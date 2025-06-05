import React from 'react'
import UserImg from '../assets/user.png'
function Navbar() {
    return (
        <div className='flex justify-between px-8 py-4'>
            <p className='text-2xl text-gray-700'>Gemini</p>
            <img className='w-8' src={UserImg} alt="" />
        </div>
    )
}

export default Navbar
