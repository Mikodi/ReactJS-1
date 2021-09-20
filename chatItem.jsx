import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import MsgButton from '../components/button';
import ListItemText from '@material-ui/core/ListItemText';

export const ChatItem = ({ chat, onDelete, id }) => {
    const showName = useSelector((state) => state.profile.showName);

    const handleDelete = () => {
        onDelete(id);
    };

    console.log(showName);
    return (
        <ListItem>
            <Link style={{ marginBottom: "10px" }} to={`/chats/${chat.id}`}>{chat.name}</Link>
            <MsgButton style={{ fontSize: "10px" }} onClick={handleDelete} btnText={"Delete Chat"} />
            <ListItemText />
        </ListItem>
    );
};
