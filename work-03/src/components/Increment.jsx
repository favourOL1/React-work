import { useState } from "react"

const Increment = ()  => {

    const [count, setCount]  = useState(0)

 

    function increase  () {
        setCount(count + 1)
    
    } 

    function decrease () {
        setCount(count - 1)
    }



    return (
        <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", width: "100%"}}>

            <h1 style={{width: "100%", }}>{count}</h1>

            <div>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}

export default Increment

