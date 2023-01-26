import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage"
import AddDeckForm from "./AddDeckForm"
import DeckShow from './DeckShow';
import AddCardForm from './AddCardForm'

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
  console.log(user)

  return (
    <div>
    <NavBar user={user} setUser={setUser} />
    
      <div className='Home'>
        {user ? (
          <Switch>

            
            <Route exact path="/">
              <HomePage
                user={user}
              />
            </Route>

            <Route exact path="/decks/:id">
              <DeckShow user={user}/>
            </Route>

            <Route exact path="/add-deck">
              <AddDeckForm
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