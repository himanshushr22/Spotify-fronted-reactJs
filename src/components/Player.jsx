 import React, { useContext } from 'react'
 import { assets } from '../assets/assets'
import { PlayerContexts } from '../context/PlayerContext'
 
 const Player = () => {

  const {track, seekBg, seekBar, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContexts);


   return (
     <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className=' lg:flex items-center gap-4'>
        <img className='w-12 rounded ' src={track.image} alt="" />
        <div>
          <p className='text-[8px] ml-[-1px]  lg:text-[18px] lg:mt-0'>{track.name}</p>
          <p className='hidden lg:flex'>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className=' flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="prev" />

          {playStatus 
          ? <img onKeyUpCapture={pause} onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="play" />
          :  <img onKeyUpCapture={play} onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="play" />
          }

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loop" />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w[500px] bg-gray-300 rounded-full cursor-pointer'>
          <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75 cursor-pointer'>
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className='w-20 bg-slate-50 h-1 rounded'>
        </div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
     </div>
   )
 }
 
 export default Player