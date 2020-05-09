const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");
//init firestore database
const db = firebase.firestore();
const posts = db.collection("posts");

//(req, res) is (request, response)
router.get("/", (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //create empty array
    const postsArray = [];
    //get posts
    posts
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //push document into array every time the query loops over existing articles
            postsArray.push(doc.data());
        });
        return res.send(postsArray);
    })
    .catch(function (error) {
          console.log("Error:", error);
          return res.send(error);
    });
});

module.exports = router;