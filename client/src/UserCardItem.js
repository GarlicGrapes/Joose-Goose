import React from "react"

function CardItem({deck_card, onUpdateCard, onDeleteCard}){

    function handleMinusButtonClick() {
        deck_card.quantity --
        onUpdateCard(deck_card)
    }

    function handlePlusButtonClick() {
        deck_card.quantity ++
        onUpdateCard(deck_card)
    }
    
    function handleCardDeleteClick(){
        onDeleteCard(deck_card)
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