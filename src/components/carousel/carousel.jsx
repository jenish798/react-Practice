import { useState } from "react";

const Caro = ({images}) =>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () =>{
        setCurrentIndex((currentIndex -1 + images.length)% images.length);
    }

    const goToNext = () =>{
        setCurrentIndex((currentIndex + 1)% images.length)
    }

return(
    <>
    <h1>Carousel images</h1>
    <button onClick={goToPrevious}>Previous</button>
    <img src={images[currentIndex]} alt="carousel"/>
    <button onClick={goToNext}>Next</button>
    </>
)
}

const Carousel = () =>{
    const images = [
       'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3', 
    ];
    return <Caro images={images}/>
}

export default Carousel