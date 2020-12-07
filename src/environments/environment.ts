// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url: "http://localhost:3000/users",
  // AWS Lambda-DynamoDB-APIgateway
  // aws_url: "http://localhost:3000/users",
  aws_url: "https://ccgcdpvo25.execute-api.us-east-1.amazonaws.com/Armchair_Production/armchair-users",
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
