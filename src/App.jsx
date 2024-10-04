import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Screen from './components/Screen'
import { PlayerContexts } from './context/PlayerContext'

const App = () => {

  const {audioRef, track } = useContext(PlayerContexts)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Screen/>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App