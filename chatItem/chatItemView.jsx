import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import MsgButton from '../button';
import ListItemText from '@material-ui/core/ListItemText';

export const ChatItemView = ({ name, id, onDelete }) => {
    return (
        <ListItem>
            <Link style={{ marginBottom: "10px" }} to={`/chats/${id}`}>{name}</Link>
            <MsgButton style={{ fontSize: "10px" }} onClick={onDelete} btnText={"Delete Chat"} />
            <ListItemText />
        </ListItem>
    );
}