import axios from "axios"
import { useContext, useState } from "react"
import { BASE_URL } from "../helper"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigation = useNavigate()

    const { updateToken } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    async function submit (e) {

        setLoading(true)
        e.preventDefault()
        const body = {
            "password": password,
            "username": username
        }

        try {
            const response = await axios.post(BASE_URL + "auth/login", body)

            console.log(response?.data?.token)

            updateToken(response?.data?.token)

            alert("Success")

            navigation("/")
            
        } catch (e) {
            console.log(e?.response?.data)
            const errorObj = e?.response?.data

            if (errorObj?.username) {
                alert(errorObj.username[0])
            } else {
                alert("unknown error")
            }
        }
        setLoading(false)
    }


    return (
        <div className="auth-container">
            <form onSubmit={submit}>

                <label>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}  />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}  />

                <button disabled={loading}> 
                    {   loading ? "Please Wait" : "Login"  }
                </button>
            </form>
        </div>
    )
}


export default Login
