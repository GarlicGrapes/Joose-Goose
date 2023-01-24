import React from "react"
import {Link} from "react-router-dom"

function DecksList({decks}) {
    console.log("Loaded DecksList!")
    console.log(decks)
    const renderDecks = Object.keys(decks).map((deckID) => {
        console.log("in Decklist!")
        console.log(Object)
        console.log(deckID)
        return(
        <li key={deckID}>
            <Link to={`/decks/${deckID}`}>{decks[deckID].title} <div>by: {decks[deckID].user.username}</div></Link>

        </li> 
        )
        })


    return(
        <ul>
            {renderDecks}
        </ul>
    )
}

export default DecksList;