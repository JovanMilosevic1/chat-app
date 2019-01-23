import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCL891rl6imGWqmDNqUYCLXFqKfMPATVOA",
    authDomain: "vue-chat-2cd41.firebaseapp.com",
    databaseURL: "https://vue-chat-2cd41.firebaseio.com",
    projectId: "vue-chat-2cd41",
    storageBucket: "vue-chat-2cd41.appspot.com",
    messagingSenderId: "339345216023"
  };
const firebaseApp =  firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots:true })

export default firebaseApp.firestore()