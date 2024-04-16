import { useState } from "react"

 function TodoList () {

    const [value, setValue] = useState()



    return (
        <div>

            <input 
                value={value} 
                onChange={
                    function(e) {
                        setValue(e.target.value)
                        console.log(e)
                    }} 
                placeholder="What do you want to do" />


        </div>
    )
}

export default TodoList