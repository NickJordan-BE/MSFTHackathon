import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  return (
    <>
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <div className="textbox-container">
        <textarea 
          class = "chatbox"
          placeholder="Message [AI APP NAME]..." 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          rows="4" 
          cols="50"
        />
        <button class="send-button">Send</button>

        <p>You typed: {text}</p>
      </div>
    </>
  )
}

export default App