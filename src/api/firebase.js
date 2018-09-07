import db from '@/firebase/init'

export default {
  fetchProfile
}

const fetchProfile = (id) => {
  return new Promise((resolve, reject) => {

    let docRef = db.collection("profiles").doc(id);

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
    });

  })
}
