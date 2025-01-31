import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ChatApi from '../api/ChatApi'



const ChatBox = () => {
  const [text, setText] = useState(""); // Text from the textarea
  const [messages, setMessages] = useState([]); // Store messages
  const [isChatVisible, setIsChatVisible] = useState(false); // Manage chat visibility

  // Toggle the chat visibility
  const toggleVis = () => {
    setIsChatVisible(true); // Show the chat container
  };

  // Handle sending a message
  const handleSend = async () => {
    if (text.trim() === "") return; // Prevent sending empty messages
    
    toggleVis(); // Ensure the chat becomes visible when a message is sent
    let newMessages = [...messages, { sender: "user", content: text }];
    
    try {
      await ChatApi.post("/chat", {
        message: text.trim(),
        thread_id: "abc123",
      }, {headers: {
        'Content-Type': 'application/json'
      }}).then((response) => {
        console.log(response.data);
        newMessages = [...newMessages, { sender: "bot", content: response.data }];
      });

    } catch (err) {
      console.log(err)
    }

    setMessages(newMessages);

    // Add the user's message to the messages array
    setText(""); // Clear the input field
  };


  return (
    <>
      <NavBar />
      <h1>Title</h1>
      <h2>Subtitle</h2>

      {/* Chat container with conditional visibility */}
      <div className={isChatVisible ? "chat-container show" : "chat-container hidden"} id="chat">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user-message" : "output-message"}`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input and Send Button */}
      <div className="textbox-container">
        <textarea
          className="chatbox"
          placeholder="Message [AI APP NAME]..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          cols="50"
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>

        <p>You typed: {text}</p>
      </div>
    </>
  );
}

export default ChatBox;