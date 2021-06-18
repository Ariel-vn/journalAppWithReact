import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6TL-jGK0O_7FeQYgTWOq942qmhV1sxnU",
    authDomain: "journalapp-268ab.firebaseapp.com",
    projectId: "journalapp-268ab",
    storageBucket: "journalapp-268ab.appspot.com",
    messagingSenderId: "383833261325",
    appId: "1:383833261325:web:c2f1c26b33f18675799c44"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}