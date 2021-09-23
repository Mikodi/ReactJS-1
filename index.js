import React, { useState, useCallback, useRef, useMemo } from "react";
import Input from "../components/input";
import MessageList from "../components/messageList";
import MsgButton from "../components/button";
import '../App.css';
import '../components/style.css';
import { InsetList } from "../components/listItem";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../components/Store/chats/actions";
import { AUTHORS } from "../components/constants";
import { selectIfChatExists } from "../components/Store/chats/selectors";
import { addMessageWithReply } from "../components/Store/messages/actions"


function Chats() {
    const { chatId } = useParams();
    const inputRef = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const messages = useSelector(state => state.messages.messages);
    const chats = useSelector(state => state.chats.chats);


    const [text, setText] = useState("");

    const sendMessage = useCallback(
        (text, author) => {
            dispatch(addMessageWithReply(chatId, text, author));
        },
        [chatId]
    );


    const newMessage = (event) => {
        event.preventDefault();
        sendMessage(text, AUTHORS.HUMAN);
        setText("");
    }

    const handleAddChat = useCallback((name) => {
        dispatch(addChat(name));
    }, [dispatch]);

    const handleDeleteChat = useCallback((id) => {
        dispatch(deleteChat(id));

        if (chatId !== id) {
            return;
        }

        if (chats.length === 1) {
            history.push(`/chats/${chats[0].id}`);
        } else {
            history.push(`/chats`);
        }

    }, [chatId, dispatch, chats, history]);


    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
    const chatExists = useSelector(selectChatExists)

    return (
        <div className="App">
            <h2 className="top">Chat Messages</h2>
            <div className="content">
                <InsetList chats={chats} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} />
                <div className="Messages">
                    <div className="mess_list">
                        {Boolean(chatId) && chatExists && (
                            <>
                                {(messages[chatId] || []).map((message) => (
                                    < MessageList id={message.id} key={Math.random()} text={message.text} />
                                ))}
                            </>)}
                    </div>
                    <form className="forma" onSubmit={newMessage}>
                        <Input
                            onChange={event => setText(event.target.value)}
                            value={text}
                            inputRef={inputRef}
                            type="text"
                            label="Сообщение"
                            placeholder="Введите сообщение" />
                        <MsgButton
                            btnText={"Отправить"}
                        />
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Chats;