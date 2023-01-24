import React from "react"

function CardItem({deck_card, incrementCard, decrementCard}){

    function handleMinusButtonClick(e) {
        
    }

    function handlePlusButtonClick(e) {
        console.log(e)
    }
    
    return(
        <li key={deck_card.id}>
            <img src={deck_card.card.img_url} height="50px"/>
            <br/>
            {deck_card.card.name} x {`${deck_card.quantity}  `} 

                <button
                onClick={handleMinusButtonClick}
                >-</button> 
                <button
                onClick={handlePlusButtonClick}
                >
                    +
                </button>


            <br/>
        </li>
    )
}

export default CardItem