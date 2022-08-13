import React from 'react'
import './index.scss'

function Card(thambnail, title, description) {
  return (
    <div className='Card'>
          <img src='https://res.cloudinary.com/dz209s6jk/image/upload/v1641741808/Screenshots/yy5w1ocjfm6esvlaka0e.jpg' alt=''/>
          <h1 className='Card-title'>
               Social Media Dash Board
          </h1>
          <div className='description'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </div>
            <div className='button'>
                 View more
            </div>
     </div>
  )
}

export default Card