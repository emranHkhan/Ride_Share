import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CheckoutInfo from './Components/CheckoutInfo/CheckoutInfo';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        
        <Router>
          <Header />
          <Switch>

            <Route path="/home">
              <Home />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute exact path="/checkoutinfo">
              <CheckoutInfo />
            </PrivateRoute>

            <PrivateRoute exact path="/checkoutinfo/:type">
              <CheckoutInfo />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route to="/blog">
              <Blog />
            </Route>

            <Route to="/contact">
              <Contact />
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>

    
  );
}

export default App;
