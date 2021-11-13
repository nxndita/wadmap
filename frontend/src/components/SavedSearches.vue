<template>
  <div id="app">
      <div v-for="item in items" :key="item"> 
         <h1>{{ item }}</h1>
    </div> 
  </div>
</template>

<style scoped>


p{
    color:black;
    padding:5px;
    font-size:15px;
}
.small{
  font-size:13px;
  background-color: white;
  border-radius: 5px;
  
}
.navBar{
    margin-top:1%;
    background-color: #70ABAF;
    color: #F0F7F4;
    display:flex;
    justify-content: space-between;
    padding:20px 50px;
    width:100%;
    height:3vh;}
.float-saved {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  width:250px;
  height:auto;
  float:left;
  margin-left:20px;
  margin-top:10px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    background-clip: padding-box;
    overflow: hidden;
  border-radius: 3px;
  background-color: #F0F7F4;
  opacity:1;
  cursor:pointer;
 
 


}

/* On mouse-over, add a deeper shadow */



  
</style>

<script>

import firebase from '../helpers/firebaseconfig.js';
// import { getAuth } from "@firebase/auth";

// const email = getAuth().currentUser.email;
const email = 'gmail.com';
const uid = email.replace(/\W/g, '');

let db = firebase.database();
let itemsRef = db.ref("/userPrefs/" + uid + "/savedSearches");

export default {
  name: 'app',
  firebase: {
    items: itemsRef
  },
  props : ['location'],
  data () {
    return {
    }
  },

  methods: {


  },

  computed: {

  }

}
</script>
