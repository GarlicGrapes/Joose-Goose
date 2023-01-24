import React, {useState} from "react";
import { useHistory } from "react-router";


function AddCardForm() {

    const blankCardForm = {
        "name":"",
        "cmc": 0,
        "img_url": ""
    }
    
    const [cardForm, setCardForm] = useState(blankCardForm)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    
    function handleCardFormChange(e) {
        const key = e.target.id
        setCardForm({
            ...cardForm, 
            [key]: e.target.value
        })
    }

    function handleNewCardSubmit(e) {
        e.preventDefault()
        console.log(cardForm)
        fetch('/cards', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(cardForm)
        })
        .then((res) => {
            if (res) {
                history.push("/")
            } else {
                res.json()
                .then(er => setErrors(er.errors))
            }
        })
    }   

    return (
        <div>
            <h2>Add a Card to the Card Database</h2>
            <form onSubmit={handleNewCardSubmit}>
            
            <label>Card Name</label>
            <input 
                type="text"
                id="name"
                value={cardForm.name}
                onChange={handleCardFormChange}
            />

            <br/>

            <label>Converted Mana Cost</label>
            <input 
                type="integer"
                id="cmc"
                value={cardForm.cmc}
                onChange={handleCardFormChange}
            />

            <br/>

            <label>Card Image URL</label>
            <input 
                type="text"
                id="img_url"
                value={cardForm.img_url}
                onChange={handleCardFormChange}
            />

            <br/>
            <button type="submit">Add Card</button>
            </form>
        </div>

    )
}

export default AddCardForm;