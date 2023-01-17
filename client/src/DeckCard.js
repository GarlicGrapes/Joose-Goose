import React from "react";
import {Link} from "react-router-dom"

function DeckCard({deck}) {
    // function handleDeckClick(e) {
    //     console.log(e)
    // }

    return(
        
        <li key={deck.id}>{deck.title}  
            <div className="DeckLink">
                <Link to={`/decks/${deck.id}`}>
                    View Deck
                </Link>
            </div>        
        </li>
    )
}

export default DeckCard;