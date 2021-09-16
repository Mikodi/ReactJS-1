import React, { useState, useCallback, useRef } from "react";
import Input from "../components/input";
import MessageList from "../components/messageList";
import MsgButton from "../components/button";
import '../App.css';
import '../components/style.css';
import { InsetList } from "../components/listItem";
import { useParams } from "react-router";

const initialMessages = {
    "chat-1": [
        { textUser: "Добро пожаловать в чат-1", name: "BOT", id: "mess-2" },
    ],
    "chat-2": [
        { textUser: "Добро пожаловать в чат-2", name: "BOT", id: "mess-3" },
    ],
};

const initialChats = [
    { name: "Chat 1", id: "chat-1" },
    { name: "Chat 2", id: "chat-2" },
];

function Chats() {
    const { chatId } = useParams();
    const inputRef = useRef(null);

    const [value, setValue] = useState("");
    const [messages, setMessages] = useState(initialMessages);
    const [chats, setChats] = useState(initialChats);


    const [textUser, setTextUser] = useState("");

    const sendMessage = useCallback(
        (message) => {
            setMessages((prevMess) => ({
                ...prevMess,
                [chatId]: [...prevMess[chatId], message, { name: "BOT", textUser: `Hello, I am Bot`, id: `mess-${Date.now()}` }],
            }));
        },
        [chatId]
    );


    const newMessage = (event) => {
        event.preventDefault();
        sendMessage({
            textUser,
            name: "Human",
            id: `mess-${Date.now()}`,
        })
        setTextUser("");
    }

    // const handleChange = useCallback((event) => {
    //     // setValue(event.target.value);
    //     inputRef.current.focus();
    //     setValue("");
    // }, []);



    return (
        <div className="App">
            <h2 className="top">Chat Messages</h2>
            <div className="content">
                <InsetList chats={chats} />
                <div className="Messages">
                    <div className="mess_list">
                        {Boolean(chatId) && Boolean(messages[chatId]) && (
                            <>
                                {messages[chatId].map((message) => (
                                    <MessageList id={message.id} usName={message.name} key={Math.random()} textUser={message.textUser} />
                                ))}
                            </>)}
                    </div>
                    <form className="forma" onSubmit={newMessage}>
                        <Input
                            onChange={event => setTextUser(event.target.value)}
                            value={textUser}
                            inputRef={inputRef}
                            type="text"
                            label="Сообщение"
                            placeholder="Введите сообщение" />
                        <MsgButton
                            text={"Отправить"}
                        // onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Chats;