var firebaseConfig = {
  apiKey: "AIzaSyCNF27mvpsK2JpZ1gAoXYeN2AAxMeV4PY8",
    authDomain: "minnerglobal-2b5e7.firebaseapp.com",
    projectId: "minnerglobal-2b5e7",
    storageBucket: "minnerglobal-2b5e7.appspot.com",
    messagingSenderId: "121648342024",
    appId: "1:121648342024:web:3a8f8f4144b98c77091dbd",
    measurementId: "G-0VN38HCKYZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();