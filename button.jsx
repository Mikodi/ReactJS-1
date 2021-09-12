import React from "react";
import Button from '@material-ui/core/Button';

const MsgButton = ({ children, ...props }) => {
    return (
        <Button variant="outlined"
            color="primary"
            {...props}
            className="message_btn">
            {children}
            Отправить
        </Button>
    )
}

export default MsgButton;