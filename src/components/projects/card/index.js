import React from 'react'
import './index.scss'

function Card({thambnail, title, description}) {
  return (
    <div className='Card'>
          <img src={thambnail} alt=''/>
          <div className='card-content'>
               <h1 className='Card-title'>{title}</h1>
               <div className='description'>
                    {description}
               </div>
               <div className='button'>
                    View more
               </div>
          </div>
     </div>
  )
}

export default Card