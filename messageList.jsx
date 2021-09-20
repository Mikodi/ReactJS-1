import React from "react";

const MessageList = ({ id, text }) => {
    return (
        <div className="userMessage">
            <div className="message_content">
                <div className="user_message">
                    {text}
                </div>
            </div>
        </div>
    )
}


export default MessageList;