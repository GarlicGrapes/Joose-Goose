import React, { useState, useEffect } from "react";
import {useParams, useHistory } from "react-router-dom"
import CardItem from "./CardItem";
import UserCardItem from "./UserCardItem"
import AddCardToDeckForm from "./AddCardToDeckForm"


function DeckShow({user}) {
    
    const [deck, setDeck] = useState(null)
    const deckId = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/decks/${deckId.id.toString()}`)
        .then(res => res.json())
        .then(res => setDeck(res))
    }, [])

    function updateCard(updatedCard) {
        console.log(updatedCard)
        fetch(`/deck_cards/${updatedCard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(updatedCard),
        })
        .then((res) => res.json())
        // .then(setDeck(...deck))
    }

    function updateDeckCards(newCard){
        const newCardData = {
            card_id: newCard.id,
            deck_id: deck.id,
            quantity: 1
        }
        fetch(`/deck_cards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(newCardData),
        })        
        .then((res) => res.json())
        // .then(setDeck(...deck, newCardData))
    }

    function handleDeleteDeck(){
        fetch(`/decks/${deck.id}`,{
            method: "DELETE"
        }).then(res => {
            if(res) {
                history.push("/")
            }}
        )
    }

    if (deck && user.username == deck.user.username) {        
        const cardList = deck.deck_cards.map(card => {
        return(
            <UserCardItem 
            key={card.id}
            deck_card={card}  
            updateCard={updateCard}
            />
        )
        })
        return(
            <div>
                <h4>{deck.title}</h4> 
                <h5>...by:{deck.user.username}</h5>

            <div>{cardList}</div>
            <AddCardToDeckForm onDeckCardSubmit={updateDeckCards}/>
            <button onClick={handleDeleteDeck}>Delete Deck</button>
        </div>)
    } else if (deck && user.username != deck.user.username) {
        const cardList = deck.deck_cards.map(card => {
            return(
                <CardItem 
                key={card.id}
                deck_card={card} 
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