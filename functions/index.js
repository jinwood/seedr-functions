const { firestore } = require("firebase-admin");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { firebaseConfig } = require("./config");

admin.initializeApp(firebaseConfig);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.postComment = functions.firestore
  .document("seeds/{seedId}")
  .onCreate((snap, context) => {
    const newValue = snap.data();
    const pathId = context.params.id;
    console.log(`the id is ${pathId}`);
    return firestore().doc(`seeds/${pathId}`).set({
      foo: "bar",
    });
  });
