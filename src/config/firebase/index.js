import firebase from "firebase/app";

// import  "firebase/auth";
// import  "firebase/firestore";
    var fbConfig = {
        apiKey: "AIzaSyBrumnn5zP_Rg7FxFKeKBuHBRc_3GuUA_U",
        authDomain: "simple-notes-firebase-1db40.firebaseapp.com",
        projectId: "simple-notes-firebase-1db40",
        storageBucket: "simple-notes-firebase-1db40.appspot.com",
        messagingSenderId: "210126709450",
        appId: "1:210126709450:web:436288bac23afe78adca33",
        measurementId: "G-VQ3DX35QHB"
    };
    // Initialize Firebase
    firebase.initializeApp(fbConfig);
    //firebase.analytics();



    export default fbConfig;