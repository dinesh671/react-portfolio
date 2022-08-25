import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = ()=>{
    useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    }, [])
    const [letterClass, setLetterClass] = useState('text-animate')
    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={['C', 'o', 'n', 't', 'a', 'c','t', ' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div class="contact-form">
                    <form action="https://formspree.io/f/mrgdbgrp" method="POST">
                        <ul>
                            <li class="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li class="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li class="half">
                                <input placeholder='Subject' type="text" name="subject" required />
                            </li>
                            <li className="half">
                                <textarea placeholder="Message" required name="message"></textarea>
                            </li>
                            <li className='submit'>
                                <button className='flat-button' type="submit">
                                    submit
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}


export default Contact;