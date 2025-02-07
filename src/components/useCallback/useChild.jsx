import React from 'react';

const ChildComponent = ({onClick}) =>{
    console.log('usecallback child Rendered')
    return(
        <button onClick={onClick}>Click me
        </button>
    )
}
export default ChildComponent