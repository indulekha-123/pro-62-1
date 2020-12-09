import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAjKTZI0plL408DdHT47oOMf1wGCudVmFk",
    authDomain: "school-attendence-ec795.firebaseapp.com",
    databaseURL: "https://school-attendence-ec795.firebaseio.com",
    projectId: "school-attendence-ec795",
    storageBucket: "school-attendence-ec795.appspot.com",
    messagingSenderId: "923484076934",
    appId: "1:923484076934:web:8a0521d1ea6ede82038a07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.database();