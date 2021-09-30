import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MsgButton from '../components/button';
import { useState } from "react";
import { ChatItem } from "./chatItem/chatItem";
import { selectChats } from "./Store/chats/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addChatFb } from "./Store/chats/actions";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const InsetList = ({ onDeleteChat, onAddChat }) => {
    const classes = useStyles();

    const chats = useSelector(selectChats);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleAddChat = (event) => {
        event.preventDefault();

        dispatch(addChatFb(value));

        setValue("");
    }


    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            <ListItemIcon>
            </ListItemIcon>
            {chats.map((chat) => (
                <ChatItem chat={chat} key={chat.id} id={chat.id} onDelete={onDeleteChat} />
            ))}
            <form onSubmit={handleAddChat}>
                <input type="text" value={value} onChange={handleChange} />
                <MsgButton style={{ marginLeft: "20px" }} btnText={"Add Chat"} />
            </form>
        </List >
    );
}



