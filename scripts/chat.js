// dom queries 
import { Chatroom } from './path/to/send.js';

export const chatList  = document.querySelector('.chat-window')
// class instances
const chatroom = new Chatroom('general', 'Syed')

//get chats and reader

chatroom.getChats(data => {
  console.log(data)
})