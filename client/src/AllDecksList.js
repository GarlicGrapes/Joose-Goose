import React from "react"
import {Link} from "react-router-dom"



function AllDecksList({allDecks}) {

    const renderDecks = Object.keys(allDecks).map((deckID) => {
        return(

        <li key={allDecks[deckID].id}>
            <Link to={`/decks/${allDecks[deckID].id}`}>
                {allDecks[deckID].title} <br/>
                by: {allDecks[deckID].user.username}
            </Link>
        </li> 

    )})

    return <ul>{renderDecks}</ul>
}

export default AllDecksList;