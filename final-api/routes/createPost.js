const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");
//init firestore database
const db = firebase.firestore();
//create empty array
//reference to collections
const posts = db.collection("posts");

// /create
router.get("/", (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    const queryParams = req.query;
    res.send(queryParams);

    posts
        .doc(queryParams.id)
        .set(queryParams)
        .then(function (doc) {
            res.send({success: "Successful submission"});
        })
        .catch(function (error) {
            console.log("Error", error);
            res.send(`Error submitting: ${error.toString()}`);
        });
});


module.exports = router;