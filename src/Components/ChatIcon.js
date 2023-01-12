import React from 'react';
import './Components.scss';
import { Link } from 'react-router-dom';

const ChatIcon = () => {
  return (
    <Link to="/chatBox">
      <div className="chat-icon" title='Message'>
        <span>
          <i className="fa fa-comment-o" />
        </span>
      </div>
    </Link>
  )
}

export default ChatIcon