import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage"
import AddDeckForm from "./AddDeckForm"
import DeckPage from "./DeckPage"

function App() {

  const [user, setUser] = useState(null)
  const [decks, setDecks] = useState([])
  const [errors, setErrors] = useState([])


  useEffect(() => {
    fetch('/auth')
    .then(res =>  {
      if(res.ok){
        res.json().then(user => {
          setUser(user)
          setDecks(user.decks)
        })
      }})
  }, [])

  function onLogin(currentUser) {
    setUser(currentUser)
  }

  function onNewDeck(newDeck) {
    setDecks(...decks, newDeck)
    // setDecks(newDeck)
    // setUser(...user, newDeck)
  }
 
  // if(!user) return <LoginForm setUser={setUser}/>

  return (
    <div>
    <NavBar user={user} setUser={setUser} />
    
      <div>
        {user ? (
          <Switch>

          <Route exact path="/">
          <HomePage
              user={user}
              decks={decks}
            />
          </Route>


          <Route exact path="/add-deck">
            <AddDeckForm
             decks={decks}
             handleNewDeck={onNewDeck}
             />
          </Route>        

          <Route path="decks/:id">
            <DeckPage/>
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
            <HomePage user={user} deck={decks}/>
          </Route>

        </Switch>
        )}
        </div>
    </div>
    
  );
}

export default App;