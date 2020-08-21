import React, {useState} from 'react';
import styled from 'styled-components';
import './font-face.css';

const App = () => {

    const pageW = window.innerWidth;
    const pageH = window.innerHeight;

    const [room, switchRoom] = useState(1);
    const [message, setMessage] = useState('');

    const MainBox = styled.div`
      display: grid;
      grid-template-columns: 30% 70%;  
      width: ${pageW}px;
       height: ${pageH}px;                     
     `;
    const ChatList = styled.div`
      display: grid;
      grid-template-rows: 10% 80% 10%;
      grid-column: 1;      
      background: #3A3A3A;        
      border-right: 1px solid #4A4A4A;
      color: white;             
      font-family: Alata;      
     `;
    const ChatBox = styled.div`
      display: grid;
      grid-template-rows: 10% 70% 20%;
      grid-column: 2;
      background: #2A2A2A;              
     `;
    const Title = styled.div`
      display: flex;
      grid-row: 1;   
      align-items: center;
      padding-left: 40px;   
      color: white;             
      font-family: Alata;
      font-size: 15pt;
      border-bottom: 1px solid #4A4A4A;     
     `;
    const Rooms = styled.div`
      display: flex;
      grid-row: 2;        
      flex-direction: column;
      font-size: 13pt;          
     `;

    const Chat = styled.div`
      display: flex;     
      grid-row: 2;             
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;      
      font-size: 13pt;
      padding: 30px 40px;          
     `;

    const Message = styled.div`
     display: block;
     // height: 40px;
     max-width: 50px;    
     border: 1px solid white;  
     border-radius: 60px;              
     font-size: 13pt;    
     color: white;   
     padding: 15px 40px;       
     `;

    const RoomName = styled.div`
      display: inline-block;
      align-content: center;
      padding: 15px 40px;                                           
      transition: 0.5s;
      
      &:hover {     
      background: #7A7A7A;
      transition: 0.5s;
      }   
     `;
    const Me = styled.div`
      display: inline-block;
      grid-row: 3;   
      align-content: center;
      padding: 15px 40px;  
      border-top: 1px solid #4A4A4A;                                                                
     `;

    const TextBox = styled.textarea`
      display: inline-block;
      grid-row: 3;   
      background: #2A2A2A;
      color: white;
      font-size: 15pt;      
      padding: 15px 40px;  
      border: none;
      border-top: 1px solid #4A4A4A;       
      &:focus {
      outline: none;
      }                                                               
     `;

    const SendButton = styled.div`
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background: #EE0000;
        position: absolute;
        right: 50px;
        bottom: 60px;
    `;

    const wannaSwitchRoom = async (e) => {
        e.preventDefault();
        let length = e.target.id.length;
        let id = e.target.id;
        await switchRoom(id.slice(length - 1, length));
    }

    const checkMessage = async (e) => {
        e.preventDefault();
        if (e.which == 13 || e.keyCode == 13){
            alert('hello');
            // messages[room].push(e.target.value);
            // e.target.value = '';
        } else {
            await changeMessage(e);
        }
    }

    const changeMessage = async (e) => {
        e.preventDefault();
        await setMessage(e.target.value);
    }

    const pushMessage = e => {
        e.preventDefault();
        let newMessage = document.createElement('Message');
        newMessage.innerHTML = document.getElementById('messageArea').value;
        document.getElementById('chat').appendChild(newMessage);
    }


  return (
      <MainBox>
          <ChatList>
              <Title>
                  Rooms
              </Title>
              <Rooms>
                  <RoomName id = 'room1' onClick = {e => wannaSwitchRoom(e)}>Room 1</RoomName>
                  <RoomName id = 'room2' onClick = {e => wannaSwitchRoom(e)}>Room 2</RoomName>
                  <RoomName id = 'room3' onClick = {e => wannaSwitchRoom(e)}>Room 3</RoomName>
              </Rooms>
              <Me>
                  Hello, sliice!
              </Me>
          </ChatList>

          <ChatBox>
              <Title>
                  Room {room}
              </Title>
              <Chat id = 'chat'>
                  {/*<Message>hahah</Message>*/}
                  <SendButton onClick = {e => pushMessage(e)}/>
              </Chat>

              <TextBox id = 'messageArea' placeholder = 'Type your message' value = {message}
                       onChange = {e => changeMessage(e)}
              //         onKeyPress = {e => checkMessage(e)}
              >

              </TextBox>
          </ChatBox>
      </MainBox>
  );
}

export default App;
