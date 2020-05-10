const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");
//init firestore database
const db = firebase.firestore();

const posts = db.collection("posts");

// get single blog post
router.get("/", (req,res) => res.send("Please include an ID"));
router.get("/:id", (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    const queryID = req.params.id;

    posts
        .doc(queryID)
        .get()
        .then(function (doc) {
            if (doc.exists) {
                return res.send(doc.data());
            } else {
                // doc.data() will be undefined in this case
                return res.send("No such document!");
            }
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});

module.exports = router;