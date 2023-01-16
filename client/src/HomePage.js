import React from "react";
import DeckContainer from "./DeckContainer"

function HomePage({user}) {
    if(user) {
        console.log("in Homepage!")
        console.log(user)
        return (
        <div>
        <h1>{`Welcome, ${user.username}`}!</h1>
        <div>
        <DeckContainer decks={user.decks}/>
        </div>
        </div>
        )
    } else {
        return <h1> Login or Signup to continue </h1>
    }
}

export default HomePage;