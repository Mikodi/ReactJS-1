import React from "react";

const MsgButton = ({ childrens, ...props }) => {
    return (
        <button {...props} className="message_btn">
            {childrens}
            Отправить
        </button>
    )
}

export default MsgButton;