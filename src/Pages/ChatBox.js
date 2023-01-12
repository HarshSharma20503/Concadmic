import React from 'react'
import Sidebar from '../Components/ChatComponents/Sidebar';
import Chat from '../Components/ChatComponents/Chat';
import '../Components/ChatComponents/ChatComponents.scss';

const ChatBox = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat/>
      </div>
    </div>
  )
}

export default ChatBox