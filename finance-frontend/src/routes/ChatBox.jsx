import React, { useState } from 'react'

const ChatBox = () => {
  const [text, setText] = useState("")


  return (
        <div>
          <h1>Title</h1>
          <h2>Subtitle</h2>
          <div className="textbox-container">
            <textarea 
              classNam = "chatbox"
              placeholder="Message [AI APP NAME]..." 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              rows="4" 
              cols="50"
            />
            <button className="send-button">Send</button>
    
            <p>You typed: {text}</p>
          </div>
        </div>
      )
}

export default ChatBox;
