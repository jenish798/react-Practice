const withClickTracking = (Comp) =>{
    return (props) =>{
        const handleClick = () =>{
            console.log("Clicked Tracked", props.trackingInfo);
        };

        return(
            <div onClick={handleClick}>
                <Comp {...props}/>
            </div>
        )
    }
}

export default withClickTracking