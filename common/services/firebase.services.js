// https://www.codementor.io/@iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o
// https://stackoverflow.com/questions/41287108/deploying-firebase-app-with-service-account-to-heroku-environment-variables-wit

var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
      "private_key": process.env.FIREBASE_PRIVATE_KEY,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://my-firebase-app.firebaseio.com"
  });
module.exports = admin;