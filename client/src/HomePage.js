import React from "react";
import AllDecksPage from "./AllDecksPage";

function HomePage({user}) {
    if(user) {
        return (
        <div>
            <h1>{`Welcome, ${user.username}`}!         
                <img src={user.img_url} height="50px"/>
            </h1>

            <div>
                <AllDecksPage/>
            </div>
        </div>
        )
    } else {
        return (
            <div className="greeting">
                <h1>Welcome to MTG Deckbuilder!</h1>
                <h2> Login or Signup to continue </h2>
            </div>
        )
    }
}

export default HomePage;