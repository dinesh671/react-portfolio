import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageTitle from "../../assets/images/logo-L.png"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'
import Logo from "./Logo";
import Loader from 'react-loaders'

const Home =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','n','e','s','h']
    const jobArray = ['f','r','o','n','t','e','n','d',' ', 'd','e','v','l','o','p','e','r','.']
    
    useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={imageTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/>
                </h1>
                <h2>Student / Frontend developer / UI designer</h2>
                <Link to="/projects" className="home-button">Checkout my work</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;