import React from "react";
import {useState} from "react";
import { useHistory } from "react-router";




function SignupPage({onLogin}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [imgUrl, setImgUrl] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleSignupSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            console.log(res)
            if (res.ok) {
                res.json().then(onLogin(username, password))
            } else {
                setErrors(["There is already a user with that name. Please try another."])
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

        {/* <label>Avatar Image URL</label>
        <input
            type="text"
            id="avatar"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
        /> */}

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