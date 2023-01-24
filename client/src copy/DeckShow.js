import { getImageListItemBarUtilityClass } from "@mui/material";
import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import CardItem from "./CardItem";


function DeckShow({deck}) {

    const [currentDeck, setCurrentDeck] = useState({})
    const {deckId} = useParams()

    useEffect(() =>{
        fetch(`decks/${deckId}`)
        .then(res=> {
            if (res.ok) {
                res.json().then(
                    setCurrentDeck(res)
                )
            } else {
                console.log('FAILED TO RETREIVE CURRENT DECK')
            }
        })
    })

    // useEffect(() =>)
    //state deck
    //
  
    // console.log(params)
    // console.log(decks)
    console.log(deckId)
    console.log(deck[deckId].to_s)
    console.log(deck)
    // const cardList = deck[params.deckId].deck_cards.map(card => {
    //     return(
    //         <CardItem card={card}/>
    //     )
    // })
    return(
        <div>
            <h4>{deck[deckId].title}</h4>
            {/* <div>{cardList}</div> */}
        </div>
)}

export default DeckShow;