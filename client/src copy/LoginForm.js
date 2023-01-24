import { useState } from "react";
import { useHistory } from "react-router";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function LoginForm({onLogin, setUser}) {
//setUser
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
            // console.log("IN LOGIN FORM")
            // console.log(r)
            if(r.ok) {
                r.json()
                .then((user) => onLogin(user))
            } else {
                r.json()
                .then((er) => setErrors(er.errors))
            }
        })
        // .then(setLoginFormData(blankLoginFormData))
        // .then((r) => console.log(r))
        // .then(setUser(loginFormData))
        // .then(onLogin(loginFormData))
        .then(history.push("/"))
    }

    // useEffect(() => {
    //     fetch('/auth')
    //     .then(res =>  {
    //       if(res.ok){
    //         res.json().then(user => {
    //           console.log(user)
    //           setUser(user)
    //         })
    //       }})
    //   }, [])



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