import React from 'react'
//import { Link } from 'react-router-dom'
import './index.scss'

function Card({thambnail, title, description, path}) {
  return (
    <div className='Card'>
          <img src={thambnail} alt=''/>
            <div className='card-content'>
                 <a href={path} target = "_blank" rel="noreferrer" >
                    <h1 className='Card-title'> {title}</h1>
                 </a>
               <div className='description'>
                    {description}
               </div>
          </div>
     </div>
  )
}

// onClick={()=>{window.location.pathname= "/home"}}
export default Card