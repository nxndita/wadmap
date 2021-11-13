
// import { validateSignUpData , validateLogInData } from '../utils/helpers.js';
import helper from '../utils/helpers.js';
import firebaseConfig from '../utils/config.js';
import admin from 'firebase-admin'

import firebase from '@firebase/app'



import serviceAccount from '../schoolheatmap-firebase-adminsdk-fkrr7-fb9a4f157d.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const signUp = (req, res) => {
    const newUser = {
        email: req.body.email,
        password : req.body.password,
        // phoneNumber : 
        confirmPassword: req.body.confirmPassword,
    }
    const validation = helper.validateSignUpData(newUser);

    if (!validation.valid){
        console.log('hi2')
        return res.status(400).json(validation.errors);
        
    }
    let userId ,token
    db.collection('users').where('email', '==' , newUser.email).get().then(doc => {
        if(doc.exists){
            console.log('hi3')
            return res.status(400).json({ handle: ' Error,the user ID already exists'})
            
        } else {
            console.log('hi4')
            return admin.auth().createUser(newUser.email, newUser.password)
        }
    }).then(data => {
        console.log('hi5')
        userId = data.user.uid
        return data.user.getIdToken();
    }).then(idToken => {
            console.log('hi6')
            token = idToken
            const userCredentials = {
                userId,
                email: newUser.email,
                createdAt:  new Date().toISOString(),
            }
        db.doc(`/users/${userId}`).set(userCredentials);
    }).then(() => {
        return res.status(201).json({token})
    }).catch(err => {
        if(err.code == 'auth/email-already-in-use'){
            return res.status(400).json({ email: 'Error , email already exists!'})
        }
        return res.status(500).json({error: err.message})
    });
}




const signIn = (req,res) => {
    const user = {
        email: req.body.email,
        password:req.body.password
    }
    const {valid, errors} = helper.validateLogInData(user);
    if (!valid){
        return res.status(400).json(errors)
    }
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(data => {
        return data.user.getIdToken();
    }).then(token => {
        return res.json({token})
    }).catch(err => {
        if (err.code == 'auth/wrong-password' || err.code == 'auth/user-not-found'){
            return res.status(403).json({ message: 'Wrong credentials,Please try again'});
        }
        return res.status(500).json({error:err.code}) 
    })
}

export default { signIn , signUp }