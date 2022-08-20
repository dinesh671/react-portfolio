import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import SimpleSlider from './carosel';

function Project() {
     useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    }, [])
    const [letterClass, setLetterClass] = useState('text-animate')
     return (
       <>
        <div className="container project-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={['P', 'r', 'o', 'j ', 'e', 'c','t', 's']}
                        idx={15}
                    />
                </h1>
            </div>
            <SimpleSlider />
            
        </div>
        <Loader type='pacman'/>
        </>
  )
}

export default Project;