import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const InsetList = ({ chats }) => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            <ListItemIcon>
            </ListItemIcon>
            {Boolean(chats) && (
                chats.map((chat) => (
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                        <ListItemText />
                    </ListItem>))
            )}
        </List >
    );
}



