import { useState, useEffect } from "react"

function Counter() {

    const [count, setCount] = useState(1);
    const [counterPro, setCounterPro] = useState(0)


    useEffect(() => {
      setCounterPro(count * 20)
    }, [count]);


    return (
        <div style={{textAlign: "center"}}>
            <h1> Counter: {count} </h1>
            <h1> Counter Pro: {counterPro} </h1>
            <button 
                onClick={
                    () => setCount((x) => { 
                        return (x + 1)
                    }
                )}>Increase</button>
            <button onClick={() => setCount((x) => x - 1)}>Decrease</button>
        </div>
    )
}


export default Counter