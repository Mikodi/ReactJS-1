import React from "react";
import Button from '@material-ui/core/Button';

const MsgButton = ({ text, ...props }) => {
    return (
        <Button variant="outlined"
            type="submit"
            color="primary"
            {...props}
            className="message_btn">
            {text}

        </Button>
    )
}

export default MsgButton;