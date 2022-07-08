import './index.scss'
import { useEffect,useState } from 'react';
import AnimatedLetters from "../AnimatedLetters";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders'
import figma from "../../assets/images/figma.svg"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

     useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    }, [])
    return(
        <>
        <div class="container about-page">
        <div class="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass}
                    strArray ={['A','b','o','u','t',' ', 'm', 'e']}
                    idx={15}
                    
                    />
            </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p >
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, sutdent a good son for my mom, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
        </div>

        <div class="stage-cube-cont">
        <div class="cubespinner">
            <div class="face1">
                <img src={figma} alt="figmaIcon"/>
            </div>
            <div class="face2">
                <FontAwesomeIcon icon={faHtml5}  color="#F06529"/>
            </div>
            <div class="face3">
                <FontAwesomeIcon icon={faCss3}  color="#28a4D9"/>
            </div>
            <div class="face4">
                <FontAwesomeIcon icon={faReact}  color="#5ED4f4"/>
            </div>
            <div class="face5">
                <FontAwesomeIcon icon={faJsSquare}  color="#EfD81D"/>
            </div>
            <div class="face6">
                <FontAwesomeIcon icon={faGitAlt}  color="#EC4D28"/>
            </div>
        </div>
    </div>
    </div>
    <Loader type='pacman'/>
    </>
    )
}

export default About;