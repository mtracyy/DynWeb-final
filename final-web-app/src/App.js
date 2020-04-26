import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

//pages
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyBw_pRdDAEJlsFGF_4rMd2kQIeBdbQ_5s4",
    authDomain: "dynweb-final.firebaseapp.com",
    databaseURL: "https://dynweb-final.firebaseio.com",
    projectId: "dynweb-final",
    storageBucket: "dynweb-final.appspot.com",
    messagingSenderId: "1060203938744",
    appId: "1:1060203938744:web:aac416a100ce6fc913854d"
  };

  //Ensure app is initialized when it is ready to be
  useEffect(() => {
    //ensure app is not init more than once - is firebase already initialized?
    if (!firebase.apps.length) {
      //initialize firebase
      firebase.initializeApp(firebaseConfig);
    }

    //setting auth to be persistent in SESSION storage
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function (e) {
        console.log('INSTANTIATING AUTH ERROR', e);
      });
  }, [firebaseConfig]);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <UserProfile/>
        </Route>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction}/>
        </Route>
        <Route exact path="/create-account">
          <CreateAccount CreateAccountFunction={CreateAccountFunction}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
