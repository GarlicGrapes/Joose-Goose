import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage"
import AddDeckForm from "./AddDeckForm"
import DecksPage from "./DecksPage"
import DecksList from "./DecksList"
import AllDecksPage from './AllDecksPage';

function App() {

  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])

  useEffect(() => {
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
},[])

  function onLogin(currentUser) {
    setUser(currentUser)
  }

  // function onNewDeck(newDeck) {
  //   setDecks(...decks, newDeck)

  // }
 
  // if(!user) return <LoginForm setUser={setUser}/>

  return (
    <div>
    <NavBar user={user} setUser={setUser} />
    
      <div className='Home'>
        {user ? (
          <Switch>

          {/* <Route path="/decks">
            <DecksPage decks={decks}/>
            <Route path=":id" element={<DecksList/>}>
            </Route>
          </Route> */}

          {/* <Route path="/decks">
            <AllDecksPage/>
            <Route path=":id" element={<DecksList/>}>
            </Route>
          </Route> */}
          
          <Route exact path="/">
          <HomePage
              user={user}
              // decks={decks}
            />
          </Route>


          <Route exact path="/add-deck">
            <AddDeckForm
            //  decks={decks}
            //  handleNewDeck={onNewDeck}
             />
          </Route>        



          </Switch>

        ) 
        : (

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
            // deck={decks}
            />
          </Route>

        </Switch>
        )}
        </div>
    </div>
    
  );
}

export default App;