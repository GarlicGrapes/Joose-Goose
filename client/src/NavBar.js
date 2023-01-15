import React from "react";
// import {useState} from "react";
import {Link} from "react-router-dom"

function NavBar({user, setUser}) {


    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((res) =>  {
            if (res.ok) {
                setUser(null)
            }
        })  
    }


    return (

        <header className="Nav">

            <div>
                <Link to="/">Home</Link>
            </div>

            <div>
                {user ? ( 
                    <button onClick={handleLogoutClick}>Logout</button>
                    ) : (
                    <div>    
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>                 
                    </div>
                )}
            </div>

    </header>

    )
}

export default NavBar;