import React, { useState, useCallback, useRef, useMemo, useEffect } from "react";
import Input from "../components/input";
import MessageList from "../components/messageList";
import MsgButton from "../components/button";
import '../App.css';
import '../components/style.css';
import { InsetList } from "../components/listItem";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addChat, initChats } from "../components/Store/chats/actions";
import { AUTHORS } from "../components/constants";
import { selectIfChatExists } from "../components/Store/chats/selectors";
import { addMessageFb, initMessages } from "../components/Store/messages/actions"



function Chats() {
    const { chatId } = useParams();
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.messages.messages);

    const [text, setText] = useState("");

    useEffect(() => {
        dispatch(initChats());
        dispatch(initMessages())
    }, []);


    const sendMessage = useCallback(
        (text, author) => {
            dispatch(addMessageFb(text, author, chatId));
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



    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
    const chatExists = useSelector(selectChatExists);

    return (
        <div className="App">
            <h2 className="top">Chat Messages</h2>
            <div className="content">
                <InsetList onAddChat={handleAddChat} />
                <div className="Messages">
                    <div className="mess_list">
                        {Boolean(chatId) && chatExists && (
                            <>
                                {(Object.values(messages[chatId] || {}) || []).map((message) => (
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