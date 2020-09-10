//https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/#:~:text=The%20easiest%20way%20to%20encode,Buffer%20object%20in%20your%20applications.
//https://www.codota.com/code/javascript/functions/crypto/createHashnpm install firebase-key --save
'use strict';
// https://stackoverflow.com/questions/41287108/deploying-firebase-app-with-service-account-to-heroku-environment-variables-wit
// https://github.com/cartant/firebase-key
// https://stackoverflow.com/questions/44422694/how-would-someone-connect-their-mlab-mongodb-database-to-robomongo-when-mlab-onl
const firebaseKey = require("firebase-key");
module.exports = {
    encode: (str) => {
        return firebaseKey.encode(str)
    },
    decode: (key) => {

       return firebaseKey.decode(key)
    }
}