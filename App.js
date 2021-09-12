import React, { useEffect, useState } from "react";
import Input from "./components/input";
import MessageList from "./components/messageList";
import MsgButton from "./components/button";
import './App.css';
import './components/style.css';
import InsetList from "./components/listItem";



function App() {

  const [messages, setMessages] = useState([

  ]);

  const [name, setName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const newMessage = (e) => {
    e.preventDefault();
    const Message = {
      id: Date.now(),
      name,
      userMessage
    }
    setMessages([...messages, Message])
    setMessages((messages) => [...messages, { name: "BOT", userMessage: `Hello, I am Bot` }])
  }

  useEffect(() => {
    if (messages[messages.length + 1] !== messages[messages.length]) {
      setMessages((messages) => [...messages, { name: "BOT", userMessage: `Hello, I am Bot` }])
    }
  }, [messages])


  return (
    <div className="App">
      <h2 className="top">Chat Messages</h2>
      <div className="content">
        <InsetList />
        <div className="Messages">
          <div className="mess_list">
            <MessageList messages={messages} />
          </div>
          <form className="forma">
            <div>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus="bool"
                type="text"
                label="Имя"
                placeholder="Введите имя" />
              <Input
                value={userMessage}
                onChange={e => setUserMessage(e.target.value)}
                type="text"
                label="Сообщение"
                placeholder="Введите сообщение" />
            </div>
            <div>
              <MsgButton onClick={newMessage} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default App;
