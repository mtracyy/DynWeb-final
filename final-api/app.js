const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyBw_pRdDAEJlsFGF_4rMd2kQIeBdbQ_5s4",
    authDomain: "dynweb-final.firebaseapp.com",
    databaseURL: "https://dynweb-final.firebaseio.com",
    projectId: "dynweb-final",
    storageBucket: "dynweb-final.appspot.com",
    messagingSenderId: "1060203938744",
    appId: "1:1060203938744:web:aac416a100ce6fc913854d"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//create base route
app.get("/", (req,res) => res.send("Data for final"));

const indexRoute = require('./routes/index.js');
const singlePostRoute = require('./routes/singlePost.js');
//
//serve static files
app.use('/static', express.static('public'));
//
// //routing in express
app.use('/', indexRoute);
app.use('/post', singlePostRoute);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);