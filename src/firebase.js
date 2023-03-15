import firebase from 'firebase';	

const firebaseConfig = {
    apiKey: "AIzaSyBY1Mkh6YWwKKf5KoczMBGwn2YnwWEGFW0",
    authDomain: "whatsapp-clone-84025.firebaseapp.com",
    projectId: "whatsapp-clone-84025",
    storageBucket: "whatsapp-clone-84025.appspot.com",
    messagingSenderId: "498738359901",
    appId: "1:498738359901:web:42da7311d7c50ce35ea7b4",
    measurementId: "G-KFEV6KWYN4"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  