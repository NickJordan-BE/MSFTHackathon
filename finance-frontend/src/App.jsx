
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatBox from './routes/ChatBox'
import "./App.css"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatBox />}/>
        <Route path="/items" element={<h1>Hi</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App