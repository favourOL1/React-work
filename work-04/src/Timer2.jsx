import { useState, useEffect } from "react"

function Timer2() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, []);


    return (
        <div style={{textAlign: "center"}}>
            <h1> {count} </h1>
            <button onClick={() => setCount(0)}>Restart</button>
        </div>
    )
}


export default Timer2