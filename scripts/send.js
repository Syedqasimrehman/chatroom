
import { getFirestore, collection, onSnapshot,
   serverTimestamp, addDoc, where, query, orderBy } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// import { Chatroom } from "./chat.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKO-MCFjtvf_Clct1YS37lY2gm7YY51I8",
  authDomain: "real-time-chat-room-3fb32.firebaseapp.com",
  projectId: "real-time-chat-room-3fb32",
  storageBucket: "real-time-chat-room-3fb32.appspot.com",
  messagingSenderId: "783723490536",
  appId: "1:783723490536:web:cd9968f32d959a10af2d5d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();



module.export,class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, 'real chat');
    this.Unsubscribe;
  }
  async addChat(message) {
    const now = new Date();
    addDoc(this.chats, {
      message,
      username: this.username,
      room: this.room,
      created_at: serverTimestamp(now)
    });

    const response = this.chats
    return response;
  }
  getChats(callback) {
    onSnapshot(
      query(
        this.Unsubscribe = this.chats
        , where('room', '==', this.room )
        ,where('username' , '==' , this.username)
        // , orderBy('Created_at')
        )
      , snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            callback(change.doc.data());
          }
        });
      });
  }
  UpdateName(username){
    this.username = username;
  }
  UpdateRoom(room){
    this.room = room;
    console.log("room updated")
    if(this.Unsubscribe){
      this.Unsubscribe;
    }
  }
}











// // dom queries 
// const chatList  = document.querySelector('.chat-window')
// // class instances
// const chatroom = new Chatroom('general', 'Syed')

// //get chats and reader

// chatroom.getChats(data => {
//   console.log(data)
// })
