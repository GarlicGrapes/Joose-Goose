import {useState, useEffect} from "react"


function AddDeckForm({user}) {

    const blankDeckForm = {
        "user_id": user.id,
        "title":"",
        "format":""
    }
    
    const [deckForm, setDeckForm] = useState(blankDeckForm)

    function handleDeckFormChange(e) {
        const key = e.target.id
        setDeckForm({
            ...deckForm, 
            [key]: e.target.value
        })
    }

    function handleNewDeckSubmit(e) {
        e.preventDefault()
        fetch('/decks', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(deckForm)
        })
        .then((r) => r.json())
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
            {/* <label>Format</label>
                <select className="dropdown" id="format" value={movieFormData.director_id} onChange={(e) => handleMovieChange(e)} >
                    {directorsMap}
                </select> */}


            </form>
        </div>
    )
}

export default AddDeckForm