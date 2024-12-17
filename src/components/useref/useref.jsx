import { useEffect, useRef, useState } from "react"


const NewRef = () =>{

    const inputRef = useRef(null);

    const focusInput = () =>{
        inputRef.current.focus();
    };

    return(
        <div>
            <h2>Use Ref</h2>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

const CountRef = () =>{
const [count,setCount] = useState(0);
const InputNew = useRef(0);

useEffect(()=>{
    InputNew.current++;
})
return(
    <div>
        <p>Count: {count}</p>
        <p>This component has re-rendered {InputNew.current} times</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
)
}

const NameRef = () =>{
    const [name,SetName] = useState('jenish')
    const NameRef = useRef('');

    useEffect(()=>{
        NameRef.current = name;
    },[name])

    return(
        <div>
            <p>Current Name:{name}</p>
            <p>Previous Name:{NameRef.current}</p>
            <input type="text"
            value={name}
            onChange={(e)=>SetName(e.target.value)}/>
        </div>
    )
}

const TimeRef = () =>{

    const [time,setTime] = useState(0);
    const TimeRef = useRef(null);

    useEffect(()=>{
        TimeRef.current = setInterval(()=>{
            setTime((prevCount)=>prevCount+1);
        },1000);

        return ()=>{
            clearInterval(TimeRef.current)
        }
    },[]);

    return(
        <p>Count:{time}</p>
    )
}

export {NewRef,CountRef,NameRef,TimeRef}


