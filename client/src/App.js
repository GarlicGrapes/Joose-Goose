import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {useHistory} from "react-router"
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage"
import AddDeckForm from "./AddDeckForm"
import DeckShow from './DeckShow';
import AddCardForm from './AddCardForm'

function App() {

  const [user, setUser] = useState(null)
  const [decks, setDecks] = useState([])
  const [errors, setErrors] = useState([])
  const history = useHistory()

  useEffect(() => { 
    auth() 
    getDecks()
  },[])

  function auth() {
    fetch('/auth')
    .then(res =>  {
      if(res.ok){
        res.json().then(user => {
          setUser(user)
        })
      } else {
        res.json().then(err => {
          setErrors({error: err.error, status: "rejected"})
        })
      }
    })
  }

  function onLogin(username, password) {
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({username: username, password: password})
    })
    .then((r) => {
        if(r.ok) {
            r.json()
            .then(setUser(username))
            .then(auth())
        } else {
            r.json()
            .then((er) => setErrors(er.errors))
        }
    })
    .then(history.push("/"))
  }

  function getDecks() {
    fetch('/decks')
        .then((res) => {
            if(res.ok){      
                res.json().then(decks => {
                    setDecks(decks)
                    console.log(decks)
                    })
                } else {
                    console.log("failed to fetch from /decks")
                }
            }
        )
}

function onNewDeck(newDeck){
    console.log(newDeck)
    setDecks([...decks, newDeck])
    console.log(decks)
    history.push('/')
}
  


  return (
    <div>
    <NavBar user={user} setUser={setUser} />
    
      <div className='Home'>
        {user ? (
          <Switch>

            
            <Route exact path="/">
              <HomePage
                user={user}
                decks={decks}
              />
            </Route>

            <Route exact path="/decks/:id">
              <DeckShow user={user}/>
            </Route>

            <Route exact path="/add-deck">
              <AddDeckForm
              handleNewDeck={onNewDeck}
              />
            </Route>  

            <Route exact path="/add-card">
              <AddCardForm
              />
            </Route>   

          </Switch>

        ) : (

        <Switch>

          <Route exact path="/signup">
            <SignupPage setUser={setUser} onLogin={onLogin}/>
          </Route>

          <Route exact path="/login">
            <LoginForm setUser={setUser} onLogin={onLogin}/>
          </Route>

          <Route exact path="/">
            <HomePage 
            user={user} 
            />
          </Route>

        </Switch>
        )}
        </div>
    </div>
    
  );
}

export default App;