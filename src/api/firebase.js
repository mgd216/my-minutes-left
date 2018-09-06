// import db from '@/firebase/init'
import moment from 'moment'

export default {
  fetchProfile () {
    return new Promise((resolve, reject) => {
      /* var docRef = db.collection("profiles").doc("IfLRPI0zhOnKsdXjgKBE");

      docRef.get().then(function(doc) {
        if (doc.exists) {
          console.log(doc.data())
          resolve(doc.data())
        }
        else {
          resolve({ birthdate: null, gender: 'MALE' })
        }
      }).catch(function(error) {
        console.error("Error getting document:", error);
      }); */

      resolve({ birhdate: moment().add(10, 'years').toDate, gender: 'MALE' })
    })
  }
}
