// components imported from packages
import React, { useContext } from "react";

// components imported from custom files
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../Context/ChatContext";

// CSS components
import './ChatComponents.scss';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          Concadmics
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;