import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MsgButton from '../components/button';
import { useState } from "react";
import { ChatItem } from "./chatItem";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const InsetList = ({ chats, onDeleteChat, onAddChat }) => {
    const classes = useStyles();

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {

            onAddChat(value);
        };
    }

    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            <ListItemIcon>
            </ListItemIcon>
            {Boolean(chats) && (
                chats.map((chat) => (
                    <ChatItem chat={chat} key={chat.id} id={chat.id} onDelete={onDeleteChat} />
                )))}
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <MsgButton style={{ marginLeft: "20px" }} btnText={"Add Chat"} />
            </form>
        </List >
    );
}



