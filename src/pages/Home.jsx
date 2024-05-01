import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
   <>
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto mt-5 space-y-3 md:space-x-3 ">
        <div className='flex justify-center items-center flex-col space-y-5 mx-4'>
            <h1 className='text-2xl md:text-5xl font-bold'>
                 Streamline Your Workflow with Our Task Tracker
            </h1>
            <p>
            Effortlessly manage your tasks, collaborate with your team, and track your progress. Our intuitive task tracker helps you stay organized and productive.
            </p>
            <NavLink to="/tasks" >
                <button className="right-0 group relative h-12 w-48 overflow-hidden rounded-2xl bg-slate-800 text-lg font-bold text-white">
                    Get Started
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                </button>
            </NavLink>
        </div>

        <div className='m-4'>
            <img
                src="https://ideogram.ai/api/images/direct/hrMkH2jxRH6kSfsYm1qrKA.png"
                alt="Your Image Alt Text"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
        </div>
    </div>
   </>
  )
}

export default Home