import React from "react";
import TextField from '@material-ui/core/TextField';

const Input = ((props) => {
    return (
        <TextField
            className="inputs"
            {...props}
        />
    )
})

export default Input;
