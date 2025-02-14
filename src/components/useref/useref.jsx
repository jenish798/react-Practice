import { useEffect, useRef, useState } from "react"

const NewRef = () =>{
const inputRef = useRef(null);
const messagesRef = useRef([]);
const [messages, setMessages] = useState([]);
 
useEffect(()=>{
    inputRef.current.focus();
}, []);

const sendMessage = ()=>{
    const newMessage = inputRef.current.value.trim();
    if (newMessage !== ''){
        messagesRef.current.push(newMessage);
        setMessages([...messagesRef.current]);
        inputRef.current.value= ""
    }
};
return(
    <div>
        <h2>Live chat</h2>
        <input ref={inputRef} type="text" placeholder="'Type a message..."/>
        <button onClick={sendMessage}>Send</button>

        <h3>Chat History:</h3>
        <ul>
            {messages.map((msg, index)=>(<li key={index}>{msg}</li>))}
        </ul>
    </div>
)

}

export default NewRef


