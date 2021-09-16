import React from "react";

const MessageItem = (...props) => {
    return (
        <div className="message_content">
            <strong className="user_name">{props.usName}</strong>
            <div className="user_message">
                {props.message}
                {props.key}
            </div>
        </div>
    )
}

export default MessageItem;