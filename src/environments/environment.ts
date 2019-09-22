// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
