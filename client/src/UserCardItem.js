import React from "react"

function CardItem({deck_card, updateCard, deleteCard}){

    function handleMinusButtonClick() {
        deck_card.quantity --
        updateCard(deck_card, (-1))
    }

    function handlePlusButtonClick() {
        deck_card.quantity ++
        updateCard(deck_card, 1)
    }
    
    function handleCardDeleteClick(){
        deleteCard(deck_card)
        // console.log(deck_card)
    }


    return(
        <li key={deck_card.id}>
            <img src={deck_card.card.img_url} height="50px"/>
            <br/>
            {deck_card.card.name} x {`${deck_card.quantity}  `} 

                <button
                onClick={handleMinusButtonClick}
                >
                    -
                </button> 
                
                <button
                onClick={handlePlusButtonClick}
                >
                    +
                </button>
                
                <button
                onClick={handleCardDeleteClick}
                >
                🗑️
                </button>


            <br/>
        </li>
    )
}

export default CardItem