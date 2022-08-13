import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Card from './card'

function Projects() {
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    }, [])
    const [letterClass, setLetterClass] = useState('text-animate')
  return (
    <>
      <div className='container project-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't','s']}
              idx={15}
              />
          </h1>
        </div>
        <div className='Card_wrap'>
          <Card/>
        </div>
        
      </div>
    </>
  )
}

export default Projects