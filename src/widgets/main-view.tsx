import React from 'react'
import Mindmap from './mind-map'
import { ParticlesBackground } from './particles-background'

export const MainView = () => {
  return (
    <div id='main-view'>
      <div className='content'>
        <Mindmap />
      </div>
      <ParticlesBackground />
    </div>
  )
}
