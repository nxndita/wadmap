import firebase from "./firebaseconfig.js";
// import { getDatabase, ref, get } from "firebase/database";

// const email = firebase.auth().currentUser.email;
// console.log(email);
// const email = "gmail.com";
// const uid = email.replace(/\W/g, '');
// const db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");

const user = JSON.parse(localStorage.getItem('authUser'));
const userEmail = user.email;
const uid = userEmail.replace(/\W/g, '');
const db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");


class SavedSearches {
  getAll() {
    var searches = [];
    db.once('value', (snapshot) => {
        // console.log(snapshot.val())
        for (const [key] of Object.entries(snapshot.val())) {
            searches.push(key) }
        
        return searches;
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    });
  }

  create(savedSearch) {
    let db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");
    return db.update({[savedSearch]: true});
  }

  delete(savedSearch) {
    return db.child(savedSearch).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new SavedSearches();