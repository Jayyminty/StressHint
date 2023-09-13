import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h3>Chat</h3>
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home | </a>
        <a href="#">About</a>
        <a href="#"> | Contact</a></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <header>
        <img src="https://static.thairath.co.th/media/Dtbezn3nNUxytg04anFWUDVYRmYXNGatR95AMXpphpB9AW.webp" width="300" height="200" />
      <div style={{display: "inline-block"}}>
        <Menu />
      </div>
      </header>
      <Chat />
    </div>
  );
};


export default App;
