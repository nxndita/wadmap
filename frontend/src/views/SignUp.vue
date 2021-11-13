<template>
    <div id="wrapper">
        <div class="formContainer">

                <h1 class='formTitle'>Sign Up</h1>
                <form class="formBase" @submit.prevent='handleSignup()'>
                    <input type="text" v-model="firstName" class="formInput" placeholder="Enter your first name" />
                    <input type="text" v-model="emailAddress" class="formInput" placeholder="Enter your email address" />
                    <input type="password" v-model="password" class="formInput" placeholder="Enter a password" />
                    <button class="formSubmit" type="submit"> Sign Up</button>


                </form>
                <div class="textSmall">  Already a member ?<router-link to="/sign-in"> Sign In now.</router-link> </div> 
                
        </div>
        <div id='loader' v-if="isLoaded">Loading...</div>

    </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');
*, *:before, *:after {
    box-sizing: border-box;
}
html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    font-size: 16px;
}
#wrapper {
    background-color: #FFF;
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
  transition: ease-in-out 0.3s;
  font-family: 'Roboto', sans-serif;
  padding: 16px;
  border: 0;
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
</style>

<script>
import firebase from '../helpers/firebaseconfig.js'

export default {
  name: 'SignUp',
  data () {
    return {
      isLoaded : false,
    }
  },
  methods : {
    handleSignup : function ()  {
        
        // normally id use react states here
        const emailAddress = this.emailAddress
        const firstName = this.firstName
        const password = this.password
        
        return firebase.auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
            
            result.user
            .updateProfile({
                displayName: firstName,
            }) .then(() => {
                this.isLoaded = true
                this.$router.push({name : "Map"})
            })
            
        )
        .catch((error) => {
            console.log(error)
        });
        
    }

  }
}
</script>