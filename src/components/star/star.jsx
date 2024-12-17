import { useState } from "react"

const Index = ({totalStars = 5}) =>{

    const [rating,setRating]=useState(0)
    return(
    <>
    {[...Array(totalStars)].map((star,index)=>{
        const starValue = index + 1;
        return(
            <span
            key={index}
            onClick={() => setRating(starValue)}
            style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray' }}
          >
            ★
          </span>
        )
    })}
    </>
)
}

const Star = () =>{
    return(
        <div>
        <h1>Star Rating</h1>
<Index/>
</div>
    )
}

export default Star