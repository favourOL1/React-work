import { useState } from "react"

function Form2 () {

    const [life, setLife] = useState("")

    console.log("RENDER")
    console.log(life)


    return (
        <div>
            <input className={"normal " + life} onMouseEnter={() => setLife("life")} />
            <button>
                Focus the input
            </button>
        </div>
    )


}

export default Form2