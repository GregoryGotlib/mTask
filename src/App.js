import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import AppHeader from "./Components/AppHeader";
import RegistrationForm from "./Components/RegistrationForm";
import Home from "./Components/Home";
import store from "./Redux/store";
import setAuth from "./Utils/setAuth";
import jwt_decode from "jwt-decode";
import { setDecodedUser } from "./Redux/actions/user";

if (localStorage.userToken) {
  setAuth(localStorage.userToken);

  //Decode token
  const decoded_token = jwt_decode(localStorage.userToken);

  //Set decoded user
  store.dispatch(setDecodedUser(decoded_token));
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/login" exact component={LoginForm} />
        <Switch>
          <Route path="/Home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
