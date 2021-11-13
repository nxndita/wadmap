import firebase from './firebaseconfig.js';

// this function checks the state of the user through the local storage item that we set as authUser.





export default function useAuthListener() {
    var user = JSON.parse(localStorage.getItem('authUser')
    );
    console.log(user)
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            user = authUser
        } else {
            localStorage.removeItem('authUser');
            user = null
        }
    });




    listener();
    if (user) {
        return true
    } else {
        return false
    }
}
