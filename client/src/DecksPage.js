import React from "react";
import {Route, useRouteMatch} from "react-router-dom"
import DecksList from "./DecksList"
import DeckShow from "./DeckShow"

function DecksPage({decks}) {

    const match = useRouteMatch()
    // console.log(match)
    // console.log("^MATCH!!!")
    return (
        <ul>

            <h3>Which deck you want look at?</h3>
            <DecksList decks={decks} />
            {/* <Route exact path={match.url}>

            </Route> */}
            <Route exact path={`${match.url}/:deckId`}>
                <DeckShow decks={decks}/>
            </Route>
        </ul>
    )
}

export default DecksPage;