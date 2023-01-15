// import {useState} from "react";

function HomePage({user}) {
    if(user) {
        return <h1>Welcome, {user.username}!</h1> 
    } else {
        return <h1> Login or Signup to continue </h1>
    }
}

export default HomePage;