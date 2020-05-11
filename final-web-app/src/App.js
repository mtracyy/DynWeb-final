import React, {useEffect, useState} from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

//pages
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import SinglePost from "./pages/SinglePost";
import Header from "./components/Header";

//styles
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

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

  //check to see if user is logged in
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if(user) {
          setUserInfo(user);
          setLoggedIn(true);
      } else {
          setUserInfo({});
          setLoggedIn(false);
      }
      setLoading(false);
    });
}, []);

  function LoginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
          console.log("LOGIN RESPONSE", response);
          setLoggedIn(true);
      })
      .catch(function (error) {
          console.log("LOGIN ERROR", error)
      });
  }

  function LogoutFunction() {
    firebase
      .auth()
      .signOut()
      .then(function () {
          setLoggedIn(false);
      })
      .catch(function (error) {
          console.log("LOGOUT ERROR", error);
      });
  }

  function CreateAccountFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let username = e.currentTarget.createUsername.value;
    let password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATE", response);
        response.user.updateProfile({
            displayName: username
        })
        setLoggedIn(true);
      })
      .catch(function(e) {
        console.log("CREATE ACCOUNT ERROR", e);
      });
  }

  function createPostWithImage(e) {
    e.preventDefault();

    let postTitle = e.currentTarget.postTitle.value;
    let text = e.currentTarget.postText.value;
    const idFromTitle = postTitle.replace(/\s+/g, "-").toLowerCase().substr(0, 16);
    let userID = userInfo.uid;

    // if there's an image
    if (e.currentTarget.postImage.files[0]) {
        const storageService = firebase.storage();
        const storageRef = storageService.ref();
        const fileReference = e.currentTarget.postImage.files[0];
        const uploadTask = storageRef
        .child(`${fileReference.name}`)
        .put(fileReference);

        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
                console.log(error);
                },
            () => {
                // Do something once upload is complete
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                //send data to API
                    axios
                      .get(
                          //my API endpoint
                          //local:
                          `http://localhost:4000/create?postTitle=${postTitle}&text=${text}&id=${idFromTitle}&userID=${userID}&image=${downloadURL}`
                          //production:
                          //`https://gentle-meadow-83076.herokuapp.com/`
                      )
                      .then(function (response) {
                          // handle success
                          console.log('response', response);
                      })
                      .catch(function (error) {
                          // handle error
                          console.log(error);
                      });
                });
            }
        );
    } else {
        axios
            .get(
                //my API endpoint
                //local:
                `http://localhost:4000/create?postTitle=${postTitle}&text=${text}&id=${idFromTitle}&userID=${userID}`
                //production:
                //`https://gentle-meadow-83076.herokuapp.com/`
            )
            .then(function (response) {
                // handle success
                console.log('response', response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    window.location.reload();
  }

if (loading) return null

  return (
    <div className="App">
      <Header LogoutFunction={LogoutFunction} isLoggedIn={loggedIn}/>
      <Router>
        <Route exact path="/">
          {!loggedIn ? (<Redirect to="/login"/>
            ) : (
              <Home userInfo={userInfo}
                    createPostWithImage={createPostWithImage}/>
            )}
        </Route>
        <Route exact path="/profile">
          {!loggedIn ? (<Redirect to="/login"/>
            ) : (
              <UserProfile userInfo={userInfo}/>
            )}
        </Route>
        <Route exact path="/post/:id">
          {!loggedIn ? <Redirect to="/login"/> : <SinglePost/>}
        </Route>
        <Route exact path="/login">
          {!loggedIn ? (<Login LoginFunction={LoginFunction}/>
          ) : (
            <Redirect to="/"/>
          )}
        </Route>
        <Route exact path="/create-account">
          {!loggedIn ? (<CreateAccount CreateAccountFunction={CreateAccountFunction}/>
          ) : (
            <Redirect to="/"/>
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
