import React from "react"
import "./Chat.css"

function Message(props: any) {
  const message = props.message
  return (
    <div className="message">
      <li className="list-group-item bg-secondary text-white">
        {message.seen ? <strong>(Seen)</strong> : <p>(Sent)</p>}{" "}
        {message.message}
      </li>
    </div>
  )
}

export default Message
