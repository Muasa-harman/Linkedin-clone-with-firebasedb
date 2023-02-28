import React from 'react'
import './Feeds.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feeds() {
  return (
    <div className='feeds'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon/>
            <form>
                <input type='text'/>
                <button type='submit'>Send</button>
            </form>
        </div>
        <div className='feed_inputOptions'>
            <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
            <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
        </div>
      </div>
      {/* posts */}
      <Post name='Harman muasa' description='the whole world doesnt care'
      message='work hard'
      />
    </div>
  )
}

export default Feeds
