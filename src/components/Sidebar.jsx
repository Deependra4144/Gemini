import React, { useState } from 'react'
import menuIcon from '../assets/burger-bar.png'
import plus from '../assets/plus.png'
import question from '../assets/question.png'
import setting from '../assets/setting.png'
import history from '../assets/history.png'

function Sidebar() {
    const [collaps, setCollaps] = useState(false)
    return (
        <div className='bg-violet-100/80 h-full border-r border-violet-200 backdrop-blur-sm'>
            <div className='p-4 border-b border-violet-200'>
                <button
                    onClick={() => { setCollaps(prev => !prev) }}
                    className='p-2 hover:bg-violet-200/50 rounded-lg transition-colors duration-200'
                >
                    <img className='w-6' src={menuIcon} alt="Menu" />
                </button>
            </div>

            <div className='flex flex-col h-[calc(100%-4rem)] justify-between p-4'>
                <div className='space-y-4'>
                    <button className='flex items-center gap-3 hover:bg-violet-200/50 p-2 rounded-lg transition-all duration-200 group w-full'>
                        <img className='w-6 opacity-70 group-hover:opacity-100' src={plus} alt="New Chat" />
                        <span className={`text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200 ${collaps ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                            New Chat
                        </span>
                    </button>

                    {collaps && (
                        <div className='pt-4 border-t border-violet-200'>
                            <p className='text-sm font-medium text-gray-600 px-2 mb-2'>Recent</p>
                        </div>
                    )}
                </div>

                <div className='space-y-2'>
                    <button className='flex items-center gap-3 hover:bg-violet-200/50 p-2 rounded-lg transition-all duration-200 group w-full'>
                        <img className='w-6 opacity-70 group-hover:opacity-100' src={question} alt="Help" />
                        <span className={`text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200 ${collaps ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                            Help
                        </span>
                    </button>

                    <button className='flex items-center gap-3 hover:bg-violet-200/50 p-2 rounded-lg transition-all duration-200 group w-full'>
                        <img className='w-6 opacity-70 group-hover:opacity-100' src={history} alt="Activity" />
                        <span className={`text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200 ${collaps ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                            Activity
                        </span>
                    </button>

                    <button className='flex items-center gap-3 hover:bg-violet-200/50 p-2 rounded-lg transition-all duration-200 group w-full'>
                        <img className='w-6 opacity-70 group-hover:opacity-100' src={setting} alt="Settings" />
                        <span className={`text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200 ${collaps ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                            Settings
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
