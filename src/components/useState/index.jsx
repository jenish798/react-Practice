import { useRef, useState } from "react"


// const Sta = () =>{
// const [value,setValue] =useState('')
//     return(
//     <div>
//         <h1>Controlled Components eg</h1>
//         <input type="text" name='name' value={value} onChange={(e)=>setValue(e.target.value)} />
//         <button onClick={()=>console.log(value)}>Get value</button>
//     </div>
// )
// }

const Sta = ()=>{
    const inputRef= useRef(null);
return(
    <div>
        <h1>unControlled Components</h1>
        <input type ='text' ref={inputRef}/>
        <button onClick={()=>console.log(inputRef.current.value)}>
            get value
        </button>
    </div>
)
}

export default Sta