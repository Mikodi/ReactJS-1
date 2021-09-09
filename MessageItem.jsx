import React from "react";

const MessageItem = (props) => {
    return (
        <div className="message">
            <div className="message_content">
                <strong className="user_name">{props.message.name}</strong>
                <div className="user_message">
                    {props.message.userMessage}
                </div>
            </div>
        </div>
    )
}

export default MessageItem;