import { useState, useEffect } from "react"

function Timer() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }, []);


    return (
        <div style={{textAlign: "center"}}>{count}</div>
    )
}


export default Timer