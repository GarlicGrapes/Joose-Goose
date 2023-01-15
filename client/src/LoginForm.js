import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function LoginForm({setUser}) {

    const blankLoginFormData = {
        "username" : "",
        "password" : ""
    }

    const [loginFormData, setLoginFormData] = useState(blankLoginFormData)

    function handleLoginFormChange(e) {
        const key = e.target.id
        setLoginFormData({
            ...loginFormData, 
            [key]: e.target.value
        })
    }

    function handleLoginSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(loginFormData)
        })
        .then((r) => r.json())
        .then(setUser(loginFormData.username))
        .then(setLoginFormData(blankLoginFormData))
    }



    return(
        <form onSubmit={handleLoginSubmit}>

        <h2> Login </h2>

        <label>Username</label>

        <input 
        type="text"
        id="username"
        value={loginFormData.username}
        onChange={handleLoginFormChange}
        />

        <br/>

        <label>Password</label>
        <input
            type="password"
            id="password"
            value={loginFormData.password}
            onChange={handleLoginFormChange}
        />

        <br/>

        <input
        type="submit"
        value="Login"
        />

        </form>


    )
}

export default LoginForm;