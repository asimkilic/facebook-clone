import { Avatar } from '@mui/material'
import React from 'react'
import "./Mainpage.css"
const ImageLayout = ({image,text}) => {
  return (
    <div className='imageLayout__container'>
        <div className='imageLayout__imglay'>
            <Avatar className='imageLayout__img' src={image}/>
        </div>
        <div className='imageLayout__text'>
            {text}
        </div>
    </div>
  )
}

export default ImageLayout