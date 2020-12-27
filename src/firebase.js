import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZIurum4ZF-CWqlDMA2gdAKcwMVkW_Ov8",
    authDomain: "linkedin-clone-de403.firebaseapp.com",
    projectId: "linkedin-clone-de403",
    storageBucket: "linkedin-clone-de403.appspot.com",
    messagingSenderId: "589354151714",
    appId: "1:589354151714:web:c05324176074df26b6ff7b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };