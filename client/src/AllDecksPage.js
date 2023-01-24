import React, { useEffect, useState } from "react";
import AllDecksList from "./AllDecksList"

function AllDecksPage() {

    const [allDecks, setAllDecks] = useState([])

    useEffect(() => {
        fetch('/decks')
            .then((res) => {
                if(res.ok){      
                    res.json().then(decks => {
                        setAllDecks(decks)
                        })
                    } else {
                        console.log("failed to fetch from /decks")
                    }
                }
            )
    },[]
    )

    return (
        <ul>
            <h3>Which deck you want look at?</h3>
            <AllDecksList allDecks={allDecks} />
        </ul>
    )
}

export default AllDecksPage;