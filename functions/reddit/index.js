require("dotenv").config();
const functions = require("firebase-functions");
const { makeComment } = require("./client");

exports.onNewSeed = functions.firestore
  .document("seeds/{docId")
  .onWrite((change, context) => {
    // interact with reddit
    const seed = change.data();
    makeComment(seed);
  });
