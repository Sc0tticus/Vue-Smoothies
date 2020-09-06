import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBeV8VdSMhp9F_rvZ8k7rUIzARV2QFLunA",
  authDomain: "vuethies.firebaseapp.com",
  databaseURL: "https://vuethies.firebaseio.com",
  projectId: "vuethies",
  storageBucket: "vuethies.appspot.com",
  messagingSenderId: "387374184885",
  appId: "1:387374184885:web:ea320b5987dc1782b2c1fc",
  measurementId: "G-L7YSJVSKEL"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

// export firestore database
export default firebaseApp.firestore()