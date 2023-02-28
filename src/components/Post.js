import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'

function Post({name,description,message,photoUrl,id}) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar/>
      </div>
      <div className='post_info'>
        <h2>Harman muasa</h2>
        <p>Description</p>
        <div className='post_body'>
            <p>Message</p>
        </div>
      </div>
    </div>
  )
}

export default Post
