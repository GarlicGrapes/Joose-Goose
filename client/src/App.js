import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route, NavLink, BrowserRouter} from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage"

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/auth')
    .then(res =>  {
      if(res.ok){
        res.json().then(user => setUser(user))
      }  
      })
  }, [])
 
  // if(!user) return <LoginForm setUser={setUser}/>

  return (
    <div>
    <NavBar user={user} setUser={setUser} />
        {user ? (
          <Switch>

          <Route path="/">
          <HomePage
              user={user}
            />
          </Route>

          </Switch>

        ) : (

        <Switch>

          <Route path="/signup">
            <SignupPage setUser={setUser}/>
          </Route>

          <Route path="/login">
            <LoginForm setUser={setUser}/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
        )}
    </div>
    
  );
}

export default App;