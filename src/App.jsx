import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='flex h-screen'>
      <div className='hidden md:block'>
        <Sidebar />
      </div>
      <div className='flex-grow flex flex-col h-full'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App