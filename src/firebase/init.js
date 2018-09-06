import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyDMhUoCGvw8xyIRS6Sn-lGvpxWg0DJEk8o',
  authDomain: 'my-minutes-left.firebaseapp.com',
  databaseURL: 'https://my-minutes-left.firebaseio.com',
  projectId: 'my-minutes-left',
  storageBucket: 'my-minutes-left.appspot.com',
  messagingSenderId: '578108008653'
})

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase.firestore()
