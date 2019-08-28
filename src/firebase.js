// import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyAd62Enfuz4U2PsH5EpMOLUcMYty8d3xfU",
//     authDomain: "volume-777.firebaseapp.com",
//     databaseURL: "https://volume-777.firebaseio.com",
//     projectId: "volume-777",
//     storageBucket: "volume-777.appspot.com",
//     messagingSenderId: "170792698185",
//     appId: "1:170792698185:web:1820b66f40f0d08b"
// }

// firebase.initializeApp(firebaseConfig)
// export default firebase

// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAd62Enfuz4U2PsH5EpMOLUcMYty8d3xfU",
//     authDomain: "volume-777.firebaseapp.com",
//     databaseURL: "https://volume-777.firebaseio.com",
//     projectId: "volume-777",
//     storageBucket: "volume-777.appspot.com",
//     messagingSenderId: "170792698185",
//     appId: "1:170792698185:web:1820b66f40f0d08b"
// });

// const db = firebaseApp.firestore();

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxRMm4aRO7KjOK4-a5itHWU3g1X1kzK90",
  authDomain: "volum-777.firebaseapp.com",
  databaseURL: "https://volum-777.firebaseio.com",
  projectId: "volum-777",
  storageBucket: "",
  messagingSenderId: "119378878046",
  appId: "1:119378878046:web:8149b369106f573c"
});
const db = firebaseApp.firestore();

export { db };
