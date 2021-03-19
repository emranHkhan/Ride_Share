import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CheckoutInfo from './Components/CheckoutInfo/CheckoutInfo';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [vehicleType, setVehicleType] = useState('');
  return (
   
      <UserContext.Provider value={{logInfo: [loggedInUser, setLoggedInUser], transport: [vehicleType, setVehicleType]}}>
        
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

          </Switch>
        </Router>
      </UserContext.Provider>

    
  );
}

export default App;
