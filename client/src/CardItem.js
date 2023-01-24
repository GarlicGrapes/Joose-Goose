import React from "react"

function CardItem({deck_card}){


    
    return(
        <li key={deck_card.id}>
            <img src={deck_card.card.img_url} height="50px"/>
            <br/>
            {deck_card.card.name} x {`${deck_card.quantity}  `} 
            <br/>
        </li>
    )
}

export default CardItem