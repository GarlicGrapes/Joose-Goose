import React from "react";
// import {useState} from "react";
import {Link, NavLink} from "react-router-dom"

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

            <div >
                

                {user ? ( 
                    <div className="nav">
                        <Link to="/" className="navlink">Home</Link>
                        <NavLink to="/add-deck" className="navlink">Add Deck</NavLink>  
                        <button onClick={handleLogoutClick} className="navlink">Logout</button>
                    </div>
                    
                    ) : (
                        <div className="nav">
                        <Link to="/" className="navlink">Home</Link>
                        <Link to="/signup" className="navlink">Signup</Link>
                        <Link to="/login" className="navlink">Login</Link>    
                        </div>   
                    
                )}
            </div>
    )
}

export default NavBar;