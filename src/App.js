import React, {useState} from 'react';
import {
    MainBox,
    ChatList,
    ChatBox,
    Title,
    Rooms,
    Chat,
    RoomName,
    Me,
    TextBox
} from './Components'
import {answer} from "./Answer";
import './helpers/font-face.css';

const App = () => {

    document.title = 'Chatler';
    const [room, switchRoom] = useState(1);

    const wannaSwitchRoom = async (e) => {
        e.preventDefault();
        let length = e.target.id.length;
        let id = e.target.id;
        await switchRoom(id.slice(length - 1, length));
    }

    const checkMessage = e => {
        if (e.which === 13 || e.keyCode === 13){
            pushMessage(e);
        }
    }

    const pushMessage = e => {
        e.preventDefault();
        let text = document.getElementById('messageArea').value;
        if (text){
            let newMessage = document.createElement('div');
            newMessage.style = `display: block;     
             max-width: 800px;    
             overflow: visible;
             border: 1px solid white;  
             border-radius: 60px;              
             font-size: 13pt; 
             font-family: Alata;   
             color: white;   
             padding: 15px 40px;
             margin-bottom: 15px;          
            `;

            newMessage.innerHTML = text;
            document.getElementById('chat').append(newMessage);
            document.getElementById('messageArea').value = '';
            document.getElementById('messageArea').focus();

            setTimeout(() => {
                let newAnswer = document.createElement('div');
                newAnswer.style = `display: block;  
                 align-self: flex-start;   
                 max-width: 800px;    
                 overflow: visible;
                 border: 1px solid tomato;  
                 border-radius: 60px;              
                 font-size: 13pt;    
                 font-family: Alata; 
                 color: white;   
                 padding: 15px 40px;
                 margin-bottom: 15px;             
                `;
                newAnswer.innerHTML = answer(text);
                document.getElementById('chat').append(newAnswer);
            }, 1000);
        }
    }


  return (
      <MainBox>

          <ChatList>
              <Title> Rooms </Title>
              <Rooms>
                  <RoomName id = 'room1' onClick = {e => wannaSwitchRoom(e)}>Room 1</RoomName>
                  <RoomName id = 'room2' onClick = {e => wannaSwitchRoom(e)}>Room 2</RoomName>
                  <RoomName id = 'room3' onClick = {e => wannaSwitchRoom(e)}>Room 3</RoomName>
              </Rooms>
              <Me> Hello, user! </Me>
          </ChatList>

          <ChatBox>
              <Title> Room {room} </Title>
              <Chat id = 'chat'/>
              <TextBox id = 'messageArea' placeholder = 'Type your message and press enter' onKeyDown = {e => checkMessage(e)}/>
          </ChatBox>

      </MainBox>
  );
}

export default App;
