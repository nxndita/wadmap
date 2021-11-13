<template>
    <div id="wrapper">
        <div class="formContainer">

                <h1 class='formTitle'>Sign In</h1>
                <form class="formBase" @submit.prevent='handleSignin()'>
                    <input type="text" v-model="emailAddress" class="formInput" placeholder="Enter your email address" />
                    <input type="password" v-model="password" class="formInput" placeholder="Enter a password" />
                    <button class="formSubmit" type="submit"> Sign In</button>


                </form>
                <div class="textSmall">  Not a member ?<router-link to="/sign-up"> Sign Up now.</router-link> </div> 
                
        </div>
        <div class="alternateSignIn">
          <div id='loader' v-if="!isLoaded && !preLoaded">Loading...</div>
          <p>Alternatively, you can sign in with google</p>
          <button class="googleSignIn" @click.prevent='googleSignin()'>Sign in with Google</button>
        </div>

    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

#wrapper {
    background-color: #FFF;
    font-family: 'Roboto', sans-serif;
    border: 1px solid black;
    height:100vh;
} 
.formTitle{
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
}
.formContainer {
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: #70ABAF;
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 50px;
  margin-top: 25px;
}
.formBase {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
}
.formInput {
  background: #F0F7F4;
  border-radius: 4px;
  border: 0;
  color: #32292F;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
}
.formInput:last-of-type{
  margin-bottom: 30px;
}
.formSubmit{
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  font-family: 'Roboto', sans-serif;
  padding: 16px;
  transition: ease-in-out 0.3s;
  color: white;
  cursor: pointer;
}
.formSubmit:hover{
  background:#bd040e;
}
.textSmall {
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #F0F7F4;
}
.googleSignIn{
  background: #32293F;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: #F0F7F4;
  cursor: pointer;
}
</style>

<script>
import { getAuth,signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import firebase from '../helpers/firebaseconfig.js'


export default {
  name: 'SignIn',
  data () {
    return {
      isLoaded : false,
      preLoaded : true,
    }
  },
  methods : {
    handleSignin : function ()  {
    this.preLoaded = false
    //this checks if the form input elements are valid
    var emailAddress = this.emailAddress;
    var password = this.password;

    firebase.auth().signInWithEmailAndPassword(emailAddress,password).then((result)=> {
      const user = result.user;
      console.log("this is user",user);
      localStorage.setItem('authUser', JSON.stringify(user));
      if(user){
        this.$router.push({name : "Map"});}
    }).catch((e) => {
        emailAddress = ''
        password = ''
        console.log(e)
    })
  
  }, 
  googleSignin : function () {
    this.preLoaded = false
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log("this is user",user);
      localStorage.setItem('authUser', JSON.stringify(user));
      if(user){
        this.isLoaded = true
        this.$router.push({name : "Map"})
      }
    }).catch((error) => {
      // Handle Errors here.

      const errorMessage = error.message;
      console.log(errorMessage)

    });
  }}
}
</script>