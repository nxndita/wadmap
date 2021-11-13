<template>
    <div class="float-container">
        <div class="float-card">
            <img v-bind:src="src" alt="" width="250" height="180">
            <p><b>{{name}}</b></p>
            <p class="small">{{fulladdress}}</p>
            <!-- <p>Mobile No.</p> -->
            <!-- <p> Rating: {{rating}}</p> -->
            
        </div> 

    </div>
</template>

<style scoped>
.float-container{
  width:100%;
}

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
.float-card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  width:250px;
  height:auto;
  float:left;
  margin-left:2%;
  margin-top:10px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    background-clip: padding-box;
    overflow: hidden;
  border-radius: 3px;
  background-color: #F0F7F4;
  opacity:1;
  cursor:pointer;
 
 


}
@media screen and (max-width:680px) {
  .float-card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  width:250px;
  height:auto;
  float:left;
  margin-left:20%;
  margin-top:10px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    background-clip: padding-box;
    overflow: hidden;
  border-radius: 3px;
  background-color: #F0F7F4;
  opacity:1;
  cursor:pointer;}
 

}

/* On mouse-over, add a deeper shadow */



  
</style>

<script>


export default {
  name: 'Card',
  props : ['name' , 'fulladdress', 'src', 'rating'],
  data () {
    return {
      pic: ''
    }
  },

  methods: {


  },

  computed: {

  }

}
</script>
