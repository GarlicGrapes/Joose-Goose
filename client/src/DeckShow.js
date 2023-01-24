import React, { useState, useEffect } from "react";
import {useParams, useHistory } from "react-router-dom"
import CardItem from "./CardItem";
import UserCardItem from "./UserCardItem"
import AddCardToDeckForm from "./AddCardToDeckForm"


function DeckShow({user}) {
    const blankDeckState = {
        "id": 0,
        "title": "",
        "user": {"username": "", "img_url": ""},
        "deck_cards": []
    }

    const [deck, setDeck] = useState(blankDeckState)
    const deckId = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/decks/${deckId.id.toString()}`)
        .then(res => res.json())
        .then(res => setDeck(res))
    }, [])

    function updateCard(updatedDeckCard) {
        console.log(updatedDeckCard.card)
        fetch(`/deck_cards/${updatedDeckCard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(updatedDeckCard),
        })
        .then((res) => res.json())
        // .then(setDeck(...deck))
    }

    function updateDeckCards(newCard){
        console.log(deck)
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
        .then((setDeck({...deck,
            deck_cards: newCardData})
            ))
        .then(console.log(deck))
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

    function deleteCard(deletedCard){
        console.log(deletedCard)
        fetch(`/deck_cards/${deletedCard.id}`, {
        method: "DELETE" })
        .then((res) => {
            if(res) {
                const newDeck = deck.filter(card => card.id == deletedCard.id)
                setDeck(newDeck)
            }
        })
    }

    if (deck && user.username == deck.user.username) {        
        const cardList = deck.deck_cards.map(card => {
        return(
            <UserCardItem 
            key={card.id}
            deck_card={card}  
            updateCard={updateCard}
            deleteCard={deleteCard}
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