import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages, title }) => {
    return (
        <div className="userMessage">
            <h1>{title}</h1>
            {messages.map((message) =>
                <MessageItem message={message} key={message.id} />)}
        </div>
    )
}

export default MessageList;