import React, { useEffect, useState } from "react";
import {Route, useRouteMatch} from "react-router-dom"
import AllDecksList from "./DecksList"
import DeckShow from "./DeckShow"

function AllDecksPage() {

    const match = useRouteMatch()
    const [allDecks, setAllDecks] = useState([])

    useEffect(() => {
        fetch('/decks')
        .then((res) => {
          if(res.ok){      
                res.json().then(decks => {
                setAllDecks(decks)
                })
          } else {
            console.log("failed to fetch from /decks")
          }
        })},[])

    // console.log(match)
    // console.log("^MATCH!!!")
    return (
        <ul>

            <h3>Which deck you want look at?</h3>
            <AllDecksList decks={allDecks} />
            <Route exact path={match.url}>

            </Route> 
            <Route exact path={`${match.url}/:deckId`}>
                <DeckShow deck={allDecks}/>
            </Route>
        </ul>
    )
}

export default AllDecksPage;