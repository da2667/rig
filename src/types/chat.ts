export interface User {
  id: number
  username: string
}

export interface Message {
  id: number
  sender: User
  reciever: User
  message: string
  seen: boolean
}

export {}
