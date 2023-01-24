import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import CardItem from "./CardItem";


function DeckShow({user}) {
    
    const [deck, setDeck] = useState(null)
    const deckId = useParams()

    useEffect(() => {
        fetch(`/decks/${deckId.id.toString()}`)
        .then(res => res.json())
        .then(res => setDeck(res))
    }, [])

    function incrementCard() {
        console.log("+")
    }

    function decrementCard(updatedCard) {
        console.log(updatedCard)
        fetch(`/deck_cards/${updatedCard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                // quantity: (quantity-1)
            }),
        })
        .then((res) => res.json())
    
        const cardUpdate = deck.deck_cards.find(c => c.id == updatedCard.id)
        console.log(cardUpdate)
    }


    if (deck && user.username == deck.user.username) {        
        const cardList = deck.deck_cards.map(card => {
        return(
            <CardItem 
            key={card.id}
            deck_card={card} 
            user={user} 
            incrementCard={incrementCard}
            decrementCard={decrementCard}
            />
        )
        })
        return(
            <div>
                <h4>{deck.title}</h4> 
                <h5>...by:{deck.user.username}</h5>

            <div>{cardList}</div>
        </div>)
    } else if (deck && user.username != deck.user.username) {
        const cardList = deck.deck_cards.map(card => {
            return(
                <CardItem 
                key={card.id}
                deck_card={card} 
                user={user} 
                incrementCard={incrementCard}
                decrementCard={decrementCard}
                />
            )
            })
            return(
                <div>
                    <h4>{deck.title}</h4> 
                    <h5>...by:{deck.user.username}</h5>
    
                <div>{cardList}</div>
            </div>)
    } else {
        return <div>Loading...</div>
    }

}

export default DeckShow;

    // console.log(deck.deck_cards)
 
    // console.log(deckId)
    // console.log(deck[deckId].to_s)
    // console.log(deckId.id.toString())