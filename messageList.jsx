import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ usName, id, textUser }) => {
    return (
        <div className="userMessage">
            <div className="message_content">
                <strong className="user_name">{usName}</strong>
                <div className="user_message">
                    {textUser}
                </div>
            </div>
        </div>
    )
}


export default MessageList;