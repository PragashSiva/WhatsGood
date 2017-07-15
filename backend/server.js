var firebase = require("firebase-admin");

var serviceAccount = require("./WhatsGood-712637b72910.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://whatsgood-3582b.firebaseio.com/"
});

firebase.database().ref('/').set({
    username: "test",
    email: "test@mail.com"
});

console.log("end");