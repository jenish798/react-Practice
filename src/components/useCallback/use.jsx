import React, {useState, useCallback} from 'react';
import ChildComponent from './useChild';

const ParentComponent1 = () =>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');


const handleClick = useCallback(()=>{
    console.log('usecallback button Clicked');
},[]);

return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <input type='text' value={text} onChange={(e) =>setText(e.target.value)}/>
    
    <ChildComponent onClick={handleClick}/>
    
    </div>
    
)
}

export default ParentComponent1