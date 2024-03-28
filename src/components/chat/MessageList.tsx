import React from "react"
import Message from "./Message"
import "./Chat.css"

function MessageList(props: any) {
  const messages: [] = props.messages
  return (
    <div className="message-list">
      <div className="card bg-black text-white rounded">
        <ul className="list-group list-group-flush">
          {messages.map((message: any, idx: any) => (
            <Message key={idx} message={message} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MessageList
