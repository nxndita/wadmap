import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser'
import firebase from '@firebase/app'

import firebaseConfig from './utils/config.js'

import auth from './handlers/auth.js'
dotenv.config();
const app = express();

const port  = process.env.PORT;



firebase.initializeApp(firebaseConfig)



app.use(express.json());

app.use(morgan("common"))

app.get('/',(req,res) => {
    res.send('Server is ready');
});
app.post('/register', auth.signUp);
app.post('/login' , auth.signIn)


app.use((err,req,res,next) =>{
    res.status(500).send({ message: err.message });
})

app.listen(port , () =>{
    console.log("Server is up on " + port)
})