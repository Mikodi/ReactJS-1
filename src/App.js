import './App.css';

function App(props) {
  return (
    <div>
      <Message {...props} text="Glad to see you on the page"></Message>
    </div>
  )
}

function Message(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Message-text">Hello, {props.name}</h2>
        <h3 className="Message-text">{props.text}</h3>
      </header>
    </div>
  )
}

export default App;
