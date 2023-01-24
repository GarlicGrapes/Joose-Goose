import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";


function AddDeckForm({handleNewDeck}) {

    const blankDeckForm = {
        "title":"",
        "format":"Standard"
    }
    
    const [deckForm, setDeckForm] = useState(blankDeckForm)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const formats = ["Standard", "Explorer", "Historic", "Brawl", "Casual"]
    
    const formatMap = formats.map((format) => {
        return <option key={format} value={format}>{format}</option>
    })
    
    function handleDeckFormChange(e) {
        const key = e.target.id
        setDeckForm({
            ...deckForm, 
            [key]: e.target.value
        })
    }

    function handleNewDeckSubmit(e) {
        e.preventDefault()
        console.log(deckForm)
        fetch('/decks', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(deckForm)
        })
        .then((res) => {
            if (res) {
                handleNewDeck(deckForm)
                history.push("/")
            } else {
                res.json()
                .then(er => setErrors(er.errors))
            }
        })
    }   

    return (
        <div>
            <h2>Add Deck</h2>
            <form onSubmit={handleNewDeckSubmit}>
            
            <label>Deck Title</label>
            <input 
                type="text"
                id="title"
                value={deckForm.title}
                onChange={handleDeckFormChange}
            />

            <br/>

            <label>Format</label>
                <select className="dropdown" id="format" value={deckForm.format} onChange={(e) => handleDeckFormChange(e)} >
                    {formatMap}
                </select>

            <br/>
            <button type="submit">Create Deck</button>
            </form>
        </div>

    )
}

export default AddDeckForm;