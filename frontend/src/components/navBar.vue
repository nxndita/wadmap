<template >
  <div class="navBar">
     <div class="logoLeft"><h3>ReCovid</h3></div>

      <div class="leftLinks"> 
        <router-link to="/" class='routerLink'>Home</router-link> |
        <router-link to="/sign-up" class='routerLink' v-if='!isLoggedIn'>Sign Up</router-link>
        <button class='navButton' @click="signOut()" v-if='isLoggedIn'>Log out</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import firebase from "../helpers/firebaseconfig.js";

export default {
  name: 'NavBar',
  data () {
    return {
      searches: []
    }
  },
  methods: {
    //   async getAll() {
    //     // const email = firebase.auth().currentUser.email;
    //     const email = "gmail.com";
        
    //     const uid = email.replace(/\W/g, '');
    //     const db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");
    //     console.log(uid)
    //     var searches = [];
        
    //     await db.once('value', (snapshot) => {
    //         // console.log(snapshot.val())
    //         for (const [key] of Object.entries(snapshot.val())) {
    //             searches.push(key) }
    //         console.log("im running");
    //         console.log(searches);
            
    //     }, (errorObject) => {
    //         console.log('The read failed: ' + errorObject.name);
    //     });
    //     return searches;
    //   },
    // async showSearch() {
    //   try {
    //     this.searches = await this.getAll()
    //     console.log(JSON.parse(JSON.stringify(this.searches)))
    //     this.searches = JSON.parse(JSON.stringify(this.searches))
    //     for (var loc of this.searches) {
    //       document.getElementById("dropdownlist").innerHTML += `<option @click="getLocation()" this.getLocationInput="`+loc+`" value="`+loc+`"
          
    //       > ${loc}
    //       </option>`
          
    //     }
      
    //   } catch (e) {
    //       console.log(e);
    //   }
  

      


    

    //   for (const [key, value] of Object.entries(SavedSearches.getAll())) {
    //   this.searches.push(key); 
    // }
       
    //   console.log(this.searches);
      
    // },
    signOut () {
      return firebase.auth().signOut().then(() => {
          this.$router.push({name : "Home"});
      })
    }
  },
  computed: {
    isLoggedIn () {
          var user = JSON.parse(localStorage.getItem('authUser'));
          if (user){
            return true
          } else {
            return false
            
          }
    }
  }
  

}
</script>

<style scoped>
 .navBar{
    background-color: #70ABAF;
    color: #F0F7F4;
    display:flex;
    justify-content: space-between;
    padding:20px 50px;
    width:100%;
    height:7vh;
    margin-top: 0%;
 }
 .logoLeft{
   width:20%;
   margin-top:-1%;
   font-size: 1.5em;
 }
 @media screen and (max-width:680px) {
   .logoLeft{
   width:20%;
   margin-top:-3%;
   font-size: 1.5em;
 }
 }

 .SavedButton {
margin-right: 1%;
 }
 
 /* .leftLinks{
   display: flex;
   width:20%;
   margin-top:-1.3%;
  
 } */
 .routerLink{
   color:white;
 }

.searchButton{
    background-color:#FFF;
    border:1px solid #000;
    color:#000;
}
.savedLocations{

  width:20px;
  height:20px;

}
.navButton{
  background: #ffffff;
  border-radius: 4px;
  padding:7px;
  font-weight: bold;
  border: 0;
  color: black;
  cursor: pointer;
}




</style>