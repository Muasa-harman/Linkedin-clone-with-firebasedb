import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
     <div className='sidebar_top'>
        <img src='https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8&w=1000&q=80' alt=''/>
        <Avatar className='sidebar_avatar'/>
        <h2>Harman Muasa</h2>
        <h4>harman.muasa@gmail.com</h4>
     </div>
     <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2,448</p>
        </div>
     </div>
     <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('python')}
        {recentItem('java')}
        {recentItem('softwareengineering')}
        {recentItem('c++')}
        {recentItem('Angular')}
     </div>
    </div>
  )
}

export default Sidebar
