import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyDMhUoCGvw8xyIRS6Sn-lGvpxWg0DJEk8o',
  authDomain: 'my-minutes-left.firebaseapp.com',
  databaseURL: 'https://my-minutes-left.firebaseio.com',
  projectId: 'my-minutes-left',
  storageBucket: 'my-minutes-left.appspot.com',
  messagingSenderId: '578108008653'
})

firebase.firestore().settings({ timestampsInSnapshots: true })

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User log in success", user);
      func(true, user)
    }
    else {
      console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const db = firebase.firestore()

export const firebaseAuth = firebase.auth

export const googleProvider = new firebase.auth.GoogleAuthProvider()
