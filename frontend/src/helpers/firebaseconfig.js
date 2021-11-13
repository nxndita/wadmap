import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API,
    authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECTID ,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_SENDERID ,
    appId: process.env.VUE_APP_FIREBASE_APPID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID 
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAGCnRGJhmTTs7CbP_jkT0yCbc-9l7pwwU",
//     authDomain: "schoolheatmap-76981.firebaseapp.com",
//     databaseURL: "https://schoolheatmap-76981-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "schoolheatmap-76981",
//     storageBucket: "schoolheatmap-76981.appspot.com",
//     messagingSenderId: "1013498417889",
//     appId: "1:1013498417889:web:32f98176f852794f119da0",
//     measurementId: "G-QTD82F13DD"
//   };

firebase.initializeApp(firebaseConfig)

export default firebase;