import React from "react";
import DeckCard from "./DeckCard"

function DeckContainer({decks}) {
    // if (decks) 
    const DecksList = decks.map(deck => <DeckCard key={deck.id} deck={deck}/> )
     

    return (
        <div>
            {DecksList? (DecksList) : "Loading..."}
        </div>
    )
}


export default DeckContainer