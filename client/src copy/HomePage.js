import React from "react";
import AllDecksPage from "./AllDecksPage";
import DeckContainer from "./DeckContainer"

function HomePage({user}) {
    if(user) {
        return (
        <div>
        <h1>{`Welcome, ${user.username}`}!         
        <img src={user.img_url} height="50px"/>
        </h1>

        <div>
            <AllDecksPage/>
        {/* <DeckContainer decks={decks}/> */}
        </div>
        </div>
        )
    } else {
        return <h1> Login or Signup to continue </h1>
    }
}

export default HomePage;