import React from "react"
import {Link} from "react-router-dom"

function AllDecksList({decks}) {

    const renderDecks = Object.keys(decks).map((deckID) => {
        return(
        <li key={deckID}>
            <Link to={`/decks/${deckID}`}>
                {decks[deckID].title} 
                <div>
                    by: {decks[deckID].user.username}
                </div>
            </Link>
        </li> 
        )
    })


    return(
        <ul>
            {renderDecks}
        </ul>
    )
}

export default AllDecksList;