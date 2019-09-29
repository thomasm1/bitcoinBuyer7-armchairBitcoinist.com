export const environment = {
  production: true, 
  firebaseConfig : {
    apiKey: "AIzaSyBYsshLo1RFwQpM9pvHWTxv-VbMWUXOeKU",
    authDomain: "bitcoinbuyer-ce650.firebaseapp.com",
    databaseURL: "https://bitcoinbuyer-ce650.firebaseio.com",
    projectId: "bitcoinbuyer-ce650",
    storageBucket: "bitcoinbuyer-ce650.appspot.com",
    messagingSenderId: "696456454131",
    appId: "1:696456454131:web:b29210ff37f91664"
  }
};

/* Public-friendly apiKey .... NOT a security  risk ....
The apiKey essentially just identifies your Firebase project on the Google servers. It is not a security risk for someone to know it. In fact, it is necessary for them to know it, in order for them to interact with your Firebase project.

In that sense it is very similar to the database URL that Firebase has historically been used to identify the back-end: https://<app-id>.firebaseio.com
*/

