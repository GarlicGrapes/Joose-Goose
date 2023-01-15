import React from "react";
import {useState} from "react";


function SignupPage({setUser}) {

    const blankSignupFormData = {
        "username": "",
        "password": ""
    }

    const [signupFormData, setSignupFormData] = useState(blankSignupFormData)

    function handleSignupFormChange(e) {
        const key = e.target.id
        setSignupFormData({
            ...signupFormData, 
            [key]: e.target.value
        })
    }

    function handleSignupSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupFormData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => setUser(user.username))
                .then(setSignupFormData(blankSignupFormData))
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
        value={signupFormData.username}
        onChange={handleSignupFormChange}
        />

        <br/>

        <label>Password</label>
        <input
            type="password"
            id="password"
            value={signupFormData.password}
            onChange={handleSignupFormChange}
        />

        <br/>

        <button type="submit">Sign Up</button>

        </form>
        </div>

    )
}

export default SignupPage;