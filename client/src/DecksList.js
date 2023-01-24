import React from "react"
import {Link} from "react-router-dom"

function DecksList({decks}) {
    // console.log("Loaded DecksList!")
    // console.log(decks)
    
    // const renderDecks = Object.keys(decks).map((deckID) => {
    //     // console.log("in Decklist!")
    //     // console.log(Object)
    //     //     return(
    //     // <li key={deck.id}>
    //     //     <Link to={`/decks/${deck.id}`}>{decks[deck.id].title} <div>by: {decks[deck.id].username}</div></Link>
    //     // </li>) 
    //     // })
    //     return(
    //     <li key={deckID}>
    //         <Link to={`/decks/${deckID}`}>{decks[deckID].title} <div>by: {decks[deckID].user.username}</div></Link>

    //     </li> 
    //     )
    //     })


    return(
        <ul>
            {/* {renderDecks}  */}
            <li>temp text</li>
        </ul>
    )
}

export default DecksList;