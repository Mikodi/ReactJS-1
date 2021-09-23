import React from "react";
import { useSelector } from "react-redux";
import { ChatItemView } from "./chatItemView";

export const ChatItem = ({ chat, onDelete, id }) => {
    const showName = useSelector((state) => state.profile.showName);

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <ChatItemView name={chat.name} id={chat.id} onDelete={handleDelete}></ChatItemView>
    );
};
