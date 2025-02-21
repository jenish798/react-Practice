import { useEffect, useRef, useState } from "react"

// const NewRef = () =>{
// const inputRef = useRef(null);
// const messagesRef = useRef([]);
// const [messages, setMessages] = useState([]);
 
// useEffect(()=>{
//     inputRef.current.focus();
// }, []);

// const sendMessage = ()=>{
//     const newMessage = inputRef.current.value.trim();
//     if (newMessage !== ''){
//         messagesRef.current.push(newMessage);
//         setMessages([...messagesRef.current]);
//         inputRef.current.value= ""
//     }
// };
// return(
//     <div>
//         <h2>Live chat</h2>
//         <input ref={inputRef} type="text" placeholder="'Type a message..."/>
//         <button onClick={sendMessage}>Send</button>

//         <h3>Chat History:</h3>
//         <ul>
//             {messages.map((msg, index)=>(<li key={index}>{msg}</li>))}
//         </ul>
//     </div>
// )

// }

// export default NewRef

// const NewRef = () =>{
//    const [count,setCount] = useState(0)
//    const inputRef = useRef(0)

//    const handleincrement = () =>{
//     setCount(count+1)
//     inputRef.current +=1;
//    }

//    return(
//     <>
//     <h1>useRef</h1>
//     <p>usestateCount:{count}</p>
//     <p>useRefcount:{inputRef.current}</p>
//     <button onClick={handleincrement}>Increment</button>
//     </>
//    )
// }
// export default NewRef

// const NewRef = () =>{

//     const inputuseRef= useRef(null)

//     const handleRef = () =>{
//         inputuseRef.current.focus()
//     }

//     return(
//         <>
//         <h1>useRef Focus</h1>
//         <input type="text" ref={inputuseRef} placeholder="enter name"/>
//         <button onClick={handleRef}>Focus Button</button>
//         </>
//     )
// }

// export default NewRef

const NewRef = () =>{
    const [name,setName] = useState('Jenish')
    const prevName = useRef("");

    useEffect(()=>{
        prevName.current = name
    },[name])

    return(
        <>
        <h1>useRef previous store value</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>PreviouName:{prevName.current}</p>
        </>
    )
}

export default NewRef