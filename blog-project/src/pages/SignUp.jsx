import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../helper"
import { useNavigate } from "react-router-dom"

const SignUp = () => {

    const navigation = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)

    async function submit (e) {
        setLoading(true)
        e.preventDefault()
        const body = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password,
            "username": username
        }

        try {
            const response = await axios.post(BASE_URL + "auth/create-account", body)

            console.log(response.data)

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

                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}  />

                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}  />

                <label>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}  />

                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}  />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}  />

                <button disabled={loading}> 
                    {   loading ? "Please Wait" : "Create Account"  }
                </button>
            </form>
        </div>
    )
}


export default SignUp
