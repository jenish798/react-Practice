import { useState } from "react"

const Index = ({items}) =>{
const [query, setQuery]= useState('');

const filterItem = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
)

return(
    <div>
        <h1>Search Filter</h1>
<input
type="text"
value={query}
onChange={e=>setQuery(e.target.value)}
placeholder="search..."/>

<ul>
    {filterItem.map((it,index)=>(
        <li key={index}>{it}</li>
    ))}
</ul>
    </div>
)
}

const Search = () =>{
    const items = ['apple','orange','mango','kiwi','grapes']
    return(
        <>
        <Index items={items}/>
        </>
    )
}
export default Search