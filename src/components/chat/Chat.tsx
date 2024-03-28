import React, { useEffect } from "react"
import Friends from "./Friends"
import MessageList from "./MessageList"
import { useSelector, useDispatch } from "react-redux"
import { setMessages } from "../../store/chat/chatSlice"
import * as chat from "../../types/chat"
import "./Chat.css"

function Chat() {
  const dispatch = useDispatch()
  const messages: chat.Message[] = useSelector(
    (state: any) => state.chat.messages
  )

  const initMessages = (): void => {
    dispatch(
      setMessages([
        {
          id: 0,
          sender: {
            id: 0,
            username: "dylan",
          },
          reciever: {
            id: 1,
            username: "test",
          },
          message: "Hello World",
          seen: true,
        },
      ])
    )
  }

  useEffect(() => {
    initMessages()
  }, [])

  return (
    <div className="chat bg-black text-white">
      <Friends />
      <MessageList messages={messages} />
    </div>
  )
}

export default Chat
