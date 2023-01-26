import React from "react";
import {Link} from "react-router-dom"

function DeckCard({deck}) {

    return(
        
        <li key={deck.id}>{deck.title}  
            <div className="DeckLink">
                <Link to={`/decks/`}>
                    View Deck
                </Link>
            </div>        
        </li>
    )
}

export default DeckCard;