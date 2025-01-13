
const languages=['javascript','python','java','nextjs']

const Map = () =>{
    return(
        <div>
            <h1>Map method</h1>
            {languages.map((language,index)=>(
                <li key={index}>{language}</li>
            ))}
        </div>
    )
}

export default Map