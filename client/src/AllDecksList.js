import React from "react"
import {Link} from "react-router-dom"



function AllDecksList({decks}) {
    console.log(decks)
    if (decks) {
    // const renderDecks = Object.keys(decks).map((deckID) => {
    //     return(

    //     <li key={decks[deckID].id}>
    //         <Link to={`/decks/${decks[deckID].id}`}>
    //             {decks[deckID].title} <br/>
    //             by: {decks[deckID].user.username}
    //         </Link>
    //     </li> 

    // )})

        const renderDecks = decks.map((deck) => {
            console.log(deck)
            return(
                <li key={deck.id}>
                    <Link to={`/decks/${deck.id}`}>
                        {deck.title} <br/>
                        by: {deck.user.username}
                    </Link>
                </li>

            )
        })



        return <ul>{renderDecks}</ul>
    }
    else {
        return <div>loading...</div>
    }
    
}

export default AllDecksList;