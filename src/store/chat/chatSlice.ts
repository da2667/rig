import { createSlice } from "@reduxjs/toolkit"
import * as chat from "../../types/chat"

export const chatSlice = createSlice({
  name: "counter",
  initialState: {
    currentUser: {} as chat.User,
    messages: [] as chat.Message[],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload
    },
  },
})

export const { setMessages } = chatSlice.actions

export default chatSlice.reducer
