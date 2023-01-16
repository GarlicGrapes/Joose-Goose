import React from "react";
import DeckCard from "./DeckCard"

function DeckContainer({decks}) {
    const DecksList = decks.map(deck => <DeckCard key={deck.id} deck={deck}/> )
    
    console.log("inside Deck Container!")
    return (
        <div>
            {DecksList}
        </div>
    )
}


export default DeckContainer