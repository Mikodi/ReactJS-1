import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD5w4H8A6itcQQftYV7dv1bxceplfmLXQ0",
    authDomain: "react-hw-2bc49.firebaseapp.com",
    projectId: "react-hw-2bc49",
    storageBucket: "react-hw-2bc49.appspot.com",
    messagingSenderId: "794105720027",
    appId: "1:794105720027:web:1092110dbc5e642e9d70fe",
    measurementId: "G-G6EDBV3SG0"
};


initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();


export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
}

export const signOut = async () => {
    await firebaseSignOut(auth);
}