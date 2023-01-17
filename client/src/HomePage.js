import React from "react";
import DeckContainer from "./DeckContainer"

function HomePage({user, decks}) {
    console.log(user)
    if(user) {
        return (
        <div>
        <h1>{`Welcome, ${user.username}`}!         
        <img src={user.img_url} height="50px"/>
        </h1>

        <div>
        <DeckContainer decks={decks}/>
        </div>
        </div>
        )
    } else {
        return <h1> Login or Signup to continue </h1>
    }
}

export default HomePage;