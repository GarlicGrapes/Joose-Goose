import React from "react";
import {useState} from "react";


function SignupPage({onLogin}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSignupSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => onLogin(user)) 
            } else {
                res.json().then((er) => setErrors(er.errors))
            }
        })
    }

    return(
        <div>
        <form onSubmit={handleSignupSubmit}>

        <label>Username</label>

        <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <br/>

        <label>Password</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <br/>

        <button type="submit">Sign Up</button>

        <div className="errors list">
            {errors.map((error) => (
                <div key={error}>{error}</div>
            ))}
        </div>
        </form>
        </div>

    )
}

export default SignupPage;