<template>
  <div class="home">
    
    <div class="wrapper">

      <div class="feature">
          <div class="topDescriptor">
            <img class="heatLogo" src="../assets/heatmap.png">
            <h1 >ReCovid</h1>
            <p>A Website that gives you alternative recommendations in places that are not COVID Hotspots based on where you would like to go</p>
            
            
            <router-link to="/sign-in"><button class="standard">Get Started</button></router-link>
          </div>
        
        <div class="inputFeatureContainer">
          <h1>Where would you like to go?</h1>
          <div class="inputFakeSearch">
            <div class="inputFeature"><font-awesome-icon :icon="myIcon" class="fakeButton"/> <v-typical
                class="blink"
                :steps="['Bishan', 3000, 'Raffles Place', 3000, 'Newton', 3000]"
                :loop="Infinity"
                :wrapper="'h2'"
              ></v-typical>
            </div>

          </div>
        </div>
        
        <div>

        </div>
        <div class="footerText"><p>Made possible by GoogleMaps, its Heatmap Layer and the Foursquare API</p></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>


    </div>
 

    
  </div>
  
</template>

<script>
// @ is an alias to /src


// import {getInfo} from '../helpers/getInfo.js'

import VTypical from 'vue-typical';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Home',
  components:{
    VTypical,
    FontAwesomeIcon,
  }, data() {
    return {
      myIcon: faSearch,   
    }
    
  },

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

.blink{
  margin-left:10%;
  margin-top:2px;
}

.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.wrapper{
  color:black;
  font-family: 'Roboto', sans-serif;
  padding:5%;
  text-align: center;
  background-color:#99E1D9;
  height:50vh;
  width:100%;
}
.heatLogo {
  width:150px;
  height:150px;
}
.inputFeatureContainer{
  margin-top:10%;
}
.inputFeatureContainer > h1 {
  margin-bottom:5%;
}

.inputFeature{
  
  border:1px solid black;
  border-radius:5px;
  width: 300px;
  height: 4vh;
  margin: 0 auto;
  display:flex;
  
}

.fakeButton {
  width:30px;
  height:35px;
  border-right:1px solid black;
  padding:5px;
}
.topDescriptor{
  color: #32292F;
}
.topDescriptor > h1 {
  text-transform: uppercase;
}
.topDescriptor > p{
 line-height: 2.4;
 margin-bottom:25px;
}
.standard{
  background-color: #F0F7F4;
  border: 1px solid black;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width:150px;
  height:50px;
  transition: ease-in-out 0.3s;
}
.standard:hover {
  background-color: #D72638;
  color: #F0F7F4;
  border: 1px solid #F0F7F4;
}
.footerText{
  margin-top:5%;
}
</style>