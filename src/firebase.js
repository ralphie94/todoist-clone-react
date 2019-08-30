import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initialize({
    apiKey: "AIzaSyA0yGUH6rxmN-1qWpwTIrQnf_3tMNwaYp0",
    authDomain: "todoist-clone-4fc2a.firebaseapp.com",
    databaseURL: "https://todoist-clone-4fc2a.firebaseio.com",
    projectId: "todoist-clone-4fc2a",
    storageBucket: "todoist-clone-4fc2a.appspot.com",
    messagingSenderId: "347177863128",
    appId: "1:347177863128:web:7a8b8f9899aa5295"
});

export { firebaseConfig as firebase };