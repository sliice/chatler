import styled from "styled-components";
import './helpers/font-face.css';

const pageW = window.innerWidth;
const pageH = window.innerHeight;

export const MainBox = styled.div`
      display: grid;
      grid-template-columns: 30% 70%;  
      grid-template-rows: ${pageH}px;
      width: ${pageW}px;
      height: ${pageH}px;                     
      max-height: ${pageH}px;                     
     `;

export const ChatList = styled.div`
      display: grid;
      grid-template-rows: 10% 80% 10%;
      grid-column: 1;      
      background: #3A3A3A;        
      border-right: 1px solid #4A4A4A;
      color: white;             
      font-family: Alata;      
     `;
export const ChatBox = styled.div`
      display: grid;      
      grid-template-rows: 10% 70% 20%;
      grid-column: 2;
      background: #2A2A2A;                    
     `;
export const Title = styled.div`
      display: flex;
      grid-row: 1;   
      align-items: center;
      padding-left: 40px;   
      color: white;             
      font-family: Alata;
      font-size: 15pt;
      border-bottom: 1px solid #4A4A4A;        
     `;
export const Rooms = styled.div`
      display: flex;
      grid-row: 2;        
      flex-direction: column;
      font-size: 13pt;          
     `;

export const RoomName = styled.div`
      display: inline-block;
      align-content: center;
      padding: 15px 40px;                                           
      transition: 0.5s;
      
      &:hover {     
      background: #7A7A7A;
      transition: 0.5s;
      }   
     `;
export const Me = styled.div`
      display: inline-block;
      grid-row: 3;   
      align-content: center;
      padding: 15px 40px;  
      border-top: 1px solid #4A4A4A;                                                                
     `;

export const ScrollingArea = styled.div`
      display: block;                
      grid-row: 2;            
      overflow: scroll;
      flex: 1;
      min-height: 0;
     `;

export const Chat = styled.div`
      display: flex;           
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      position: relative;
      bottom: 0;
      font-size: 13pt;
      padding: 30px 40px;      
     `;

export const TextBox = styled.textarea`
      display: inline-block;
      grid-row: 3;   
      background: #2A2A2A;
      color: white;
      font-family: Alata;
      font-size: 13pt;      
      padding: 15px 40px;  
      border: none;
      border-top: 1px solid #4A4A4A;   
      resize: none;  
        
      &:focus {
      outline: none;
      }`;

