import React, {useEffect, useState} from "react";
import DeckCardCard from "./DeckCardCard"

function DeckPage() {
    const [deck, setDeck] = useState(null)

    useEffect(() => {
        fetch(`/decks/${deck.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("DECKPAGE")
            console.log(data)
            setDeck(data)
        })
    },[])

    if(!deck) return (<h2>Loading...</h2>)
    
    console.log("fetched deck")
    console.log(deck)


    return (
        <div>
            <h2>{deck.title}</h2>
            
        </div>
    )
}

export default DeckPage;