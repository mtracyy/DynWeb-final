const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyC8lGR3cXo81GAJQqY3nhXsx2X3Dig6a70",
    authDomain: "dynweb-exercise-four.firebaseapp.com",
    databaseURL: "https://dynweb-exercise-four.firebaseio.com",
    projectId: "dynweb-exercise-four",
    storageBucket: "dynweb-exercise-four.appspot.com",
    messagingSenderId: "728469348627",
    appId: "1:728469348627:web:7d0cacc3c3aae89c463ae6"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//create base route
app.get("/", (req,res) => res.send("Data for final"));

// const indexRoute = require('./routes/index.js');
// const aboutRoute = require('./routes/about.js');
//
//serve static files
app.use('/static', express.static('public'));
//
// //routing in express
// app.use('/', indexRoute);
// app.use('/about', aboutRoute);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);