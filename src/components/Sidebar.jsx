import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[23%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
      <div className='bg-zinc-900 h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=> navigate('/')} className='flex items-center gap-3 pl-9 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="home" />
          <p className='font-bold text-white'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-9 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="search" />
          <p className='font-bold text-white'>Search</p>
        </div>
      </div>
      <div className='bg-zinc-900 h-[84%] mt-2 rounded'>
        <div className='p-5 flex items-center justify-between cursor-pointer'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="lib" />
            <p className='font-semibold text-white'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="arrow" />
            <img className='w-5' src={assets.plus_icon} alt="arrow" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 '>
          <h1 className='text-white'>Create Your First Playlist</h1>
          <p className='font-light text-white'>it's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 '>
          <h1 className='text-white'>Find Your Podcasts To Follow</h1>
          <p className='font-light text-white'>We'll Will Keep You Update On Every New Episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
        </div>
      </div> 
    </div>
  )
}

export default Sidebar