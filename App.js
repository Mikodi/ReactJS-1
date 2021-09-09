import React, { useEffect, useState } from "react";
import Input from "./components/input";
import MessageList from "./components/messageList";
import MsgButton from "./components/button";
import './App.css';
import './components/style.css';



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
      <form className="forma">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="name" />
        <Input
          value={userMessage}
          onChange={e => setUserMessage(e.target.value)}
          type="text"
          placeholder="message" />
        <MsgButton onClick={newMessage} />
      </form>
      <MessageList messages={messages} />
    </div>
  )
}


export default App;
