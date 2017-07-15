var admin = require("firebase-admin");

var serviceAccount = require("./WhatsGood-712637b72910.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://whatsgood-3582b.firebaseio.com/"
});