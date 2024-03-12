import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import Animated_tooltip from './Animated_tooltip'

function Instractor() {
  return (
    <div className=' relative h-[4-rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground>
          <h1 className=' text-white text-6xl font-bold text-center pb-6'>Meet our instructors</h1>
          <p className=' text-white text-center'>Discover the professionals who will guide your musical journey</p>
          <div className=' flex items-center justify-center pt-8'>
          <Animated_tooltip>
            
          </Animated_tooltip>
          </div>
          

        </WavyBackground>
    </div>
  )
}

export default Instractor