import React, {useEffect, useState} from "react";


function AddCardToDeckForm({onDeckCardSubmit}) {

    
    const [cardList, setCardList] = useState([])

    useEffect(() => {
        fetch('/cards')
        .then(r => r.json())
        .then(r => setCardList(r))
    },[])

    const [currentCard, setCurrentCard] = useState(cardList[0])

    function handleCardFormChange(e) {
        const newCard = cardList.find((card) => card.id == e.target.value)
        setCurrentCard(newCard)
        console.log(currentCard)
    }

    function handleDeckCardSubmit(e){
        e.preventDefault()
        onDeckCardSubmit(currentCard)

    }
    const cardMap = cardList.map((card) => {
        return <option key={card.id} value={card.id}>{card.name}</option>
    })

    return(
        <form onSubmit={handleDeckCardSubmit}>
            
        <label>Add a New Card</label>
        <br/>
        <select className="dropdown" id={cardList.id} value={cardList.id} onChange={(e) => handleCardFormChange(e)} >
            {cardMap}
        </select>

        <br/>
        <button type="submit">Add Card</button>
        </form>

    )
}

export default AddCardToDeckForm;