import { useEffect, useRef } from "react"

function Form () {

    const inputRef = useRef(null)

    function handleClick () {
        inputRef.current.focus()
    }

    useEffect(() => {
        inputRef.current.addEventListener("mouseenter", ()=> {
            inputRef.current.classList.add("life")
        })
    }, [inputRef])

    useEffect(() => {
        inputRef.current.addEventListener("change", ()=> {
            
        })
    }, [inputRef])

    console.log("RENDER")


    return (
        <div>
            <input className="normal" ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </div>
    )


}

export default Form