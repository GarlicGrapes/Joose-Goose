import { useState } from "react";
import { useHistory } from "react-router";

function LoginForm({onLogin, setUser}) {

    const blankLoginFormData = {
        "username" : "",
        "password" : "",
        "format" : "Standard"
    }

    const [loginFormData, setLoginFormData] = useState(blankLoginFormData)
    const [errors, setErrors] = useState([])
    const history = useHistory()

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
        .then((r) => {
            if(r.ok) {
                r.json()
                .then((user) => onLogin(user))
            } else {
                r.json()
                .then((er) => setErrors(er.errors))
            }
        })
        .then(history.push("/"))
    }


    return(
        <div>

        <h2> Login </h2>

        <form onSubmit={handleLoginSubmit}>

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
        <div>
            {errors.map((er) => (
                <li key={er}>{er}</li>
            ))}
        </div>
        </div>


    )
}

export default LoginForm;