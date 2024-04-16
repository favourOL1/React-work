import { useState } from 'react'

function Button() {

    const [count, setCount] = useState(0)

    const myName = "John"

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count} {myName}
            {
                count > 2 && <div>MY DIV</div>
            }
        </button>
    )
}

export default Button
