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

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAd62Enfuz4U2PsH5EpMOLUcMYty8d3xfU",
    authDomain: "volume-777.firebaseapp.com",
    databaseURL: "https://volume-777.firebaseio.com",
    projectId: "volume-777",
    storageBucket: "volume-777.appspot.com",
    messagingSenderId: "170792698185",
    appId: "1:170792698185:web:1820b66f40f0d08b"
});

const db = firebaseApp.firestore();

export { db };