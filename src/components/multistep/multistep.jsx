import { useState } from "react"

const Step1 = ({next}) =>{
    return(
    <div>
        <h2>Step 1</h2>
        <button onClick={next}>Next</button>
    </div>
    )
}

const Step2 = ({next, previous}) =>{
    return(
    <div>
        <h2>Step 2</h2>
        <button onClick={next}>Next</button>
        <button onClick={previous}>Previous</button>
    </div>
    )
}

const Step3 = ({previous}) =>{
    return(
    <div>
        <h2>Step 3</h2>
        <button onClick={previous}>Previous</button>
        <button type="Submit"></button>
    </div>
    )
}

const Index = () =>{
    const [step, setStep] = useState(1)

    const nextStep = () =>{
        setStep(step+1)
    }

    const previousStep = () =>{
        setStep(step-1)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form submitted')
    }

    return(
        <form onSubmit={handleSubmit}>
            {step ===1 && <Step1 next={nextStep}/>}
            {step ===2 && <Step2 next={nextStep} previous={previousStep}/>}
            {step ===3 && <Step3 previous={previousStep}/>}
        </form>
    )
}

const MultiStep = () =>{
    return(
        <div>
<h1>MultiStep</h1>
<Index/>
        </div>
    )
}

export default MultiStep