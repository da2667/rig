import React from "react"
import "./App.css"
import Chat from "./components/chat/Chat"
import { Provider } from "react-redux"
import chatStore from "./store/chat/store"

function App() {
  return (
    <div className="App">
      <Provider store={chatStore}>
        <Chat />
      </Provider>
    </div>
  )
}

export default App
