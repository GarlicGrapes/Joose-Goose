import React from "react"

function CardItem({card}){

    return(
        <li>{card.name}<br/>
        {card.img_url}</li>
    )
}

export default CardItem