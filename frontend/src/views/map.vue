<template>
  <div class="map">
  <NavBar></NavBar>
    <div class="middleInput">
    <form class="search">
      <div class="row">
      <select v-model="getLocationInput" @change.prevent="getLocation" class="savedSearch" value="Saved Locations" name="dropdown" id="dropdownlist">
          <option selected value="">Saved Locations</option>
          <option v-for="s in searches" :key="s" :value="s">{{s}}</option>
        </select>
        <FavouriteButton v-if="ifData & !this.searches.includes(this.getLocationInput)" @click="saveSearch" name="favorite"></FavouriteButton>
        <DeleteButton v-if="this.searches.includes(this.getLocationInput)" @click="deleteSearch" name="del"></DeleteButton>
        <input type="text" v-model="getLocationInput" id="q" placeholder="search for a location..." />  
        
        <button class="searchButton" v-on:click.prevent="getLocation" :disabled="ifData">🔍
        </button>
        <button class="clearButton" v-if="ifData" @click="clearData">Clear Search</button>
      </div>
    </form>
    <p class="errorMessage" v-if="ifData">You may only search for one place at a certain time, please clear your search before searching for another place</p>
    </div>


 
    
    
    <div class='mapRow'>
      <div class="mapleft">
                 <h3 class="header1">Rating Map</h3> 
        <GMapMap :center="center" :zoom="zoom" map-type-id="terrain" class="map1">
            
            <GMapCluster class="cluster" :maxZoom="15" :zoomOnClick="true" :minimumClusterSize="5" :styles="[{
            'url': 'https://raw.githubusercontent.com/googlearchive/js-marker-clusterer/gh-pages/images/m2.png',
            'height': '100',
            'width': '100',
            'textColor': '#333',
            'textSize': '18',
            'anchorText': [17,27]}]">
          

                  <GMap-marker
                  :key="index"
                  v-for="(gmp, index) in markers"
                  :position="gmp"
                  @click="center=gmp, zoom=16, openMarker(gmp.label), setlatlng(gmp.lat, gmp.lng)"
                  :clickable="true"
                  :options=" {label: String(gmp.rating)}"
                  
                  
                  >
                  
                        <GMapInfoWindow
                          :options=" {width: 40,height: 20,textColor: '#333'}"
                          :opened="open=== gmp.label"
                          :closeclick="true"
                          @closeclick="openMarker(null)"
                          :zIndex = -index>
                        <div style="color: black;"><b>{{gmp.label}}</b> <br> {{gmp.address}} </div>

                      </GMapInfoWindow>

                  </GMap-marker>

            </GMapCluster>
      </GMapMap>
      </div>

      <div class="hm">
      <h3 class="header2">Heat Map</h3>
      <heat-map class="heatmap" v-if="!ifData"       
        :points="heatData"
        :width="400"
        :height="300"
        :initialZoom = zoom
        :lat = lat
        :lng = lng
      />
      <heat-map v-if="ifData"
        :key="center"
        :points="heatData"
        :width="400"
        :height="300"
        :initialZoom = zoom
        :lat = lat
        :lng = lng

      />
      </div>
    
    </div>
      <div class="cardRow" v-if="ifData">
                <div class="navBar">
                <h4 class="recommendedheader"><b>Recommended Places</b></h4>
                
                </div>
          <Card @click="center={lat:result.lat,lng:result.lng}, openMarker(result.name), zoom=16" v-for="result in results.slice(0, 5)" :key="result" :fulladdress="result.full_address" :name="result.name" :src="result.photo_url" :rating="result.rating" ></Card>
      </div>
    
 
  </div>
  
</template>

<style>
  .header1{
    color:black;
    margin-left:-30%;
    
  }
  .header2{
    color:black;
    margin-right:50%;

  }
  .recommendedheader{
    width:auto;

  }

  .errorMessage{
    font-size: 70%;
    color:red;
  }

  table {
    color: black;
    text-align: center;
    width: 100%;
    margin-top:1%;
  }

    .map{
      color:white;
    }
    .cool{
        color:white;
    }
    .map1{
      width:400px;
      height:300px;
      
    
    }
    /* Search */
    .search{
      margin-top:1%;
    }
    .searchButton {
        margin-right: 0.5rem;
        height:25px;
        width:5%;
        border-radius: 0 0.5rem 0.5rem 0;
        border:1px solid #302F4A;
      }
      .search input {

        width:20%;
        height:25px;
        border:1px solid #302F4A;
        padding-left: 15px;
        border-radius: 0.5rem 0 0 0.5rem;
        border-right: none;
        padding-right:15px;
      }
      .search input:focus{
          outline: 1px solid   #302F4A;
      }

      .clearButton{
        height:25px;
        width:auto;
        border-radius: 5px;
        border:1px solid #302F4A
      }
      .active {
        font-weight: bold;
      }

    .searchButton:hover{
      
      background-color:black;
      color:white;
      cursor: pointer;
    }
    .savedSearch {
      margin-right: 3%;

      width:auto;
      height:25px;
      border:1px solid #302F4A;
      padding-left: 15px;
      border-radius: 0.5rem ;
  
      padding-right:15px;
      
    }
    .hm{
      margin-left:15vw;
      
    }

    @media screen and (max-width:680px) {
      .map1{
      width:350px !important;
      height:300px;
      margin-left:-5vw !important;

   
      }
      .heatmap{
        width:350px !important;
      }
      .header2{
        margin-top:30%;
        margin-right:5%;
      }
      .header1{
        margin-top:5%;
        margin-left:-5%;
      }

      .hm{
        margin-left:-5vw !important;
        
      }
      .mapRow{
        
        padding-right:15vw !important;
        margin-bottom:20%;
        display: inline-block !important;
        max-width:100vw;
    }

      
  
      .savedSearch {
      margin-right: 3%;
      width:auto;
      height:25px;
      border:1px solid #302F4A;
      padding-left: 1%;
      border-radius: 0.5rem ;
      
      
    }
    .search input{
      padding-right:0px;
      margin-left:0px;
      width:40%;
    }
    .headerLogo{

      max-width:85px;
      max-height:55px;
      }


    }
    .mapRow{
      display:flex;
      padding-left:22vw;
      padding-top:2vh;
    }




    h4{
    margin-top:-0.5%;
    color:white;
    width:20%;
    }
  p{
    color:black;
  }
  .navBar{
    margin-top:1%;
    background-color: #70ABAF;
    color: #F0F7F4;
    display:flex;
    justify-content: space-between;
    padding:20px 50px;
    width:100%;
    height:2vh;
    }
    
</style>

<script>
// @ is an alias to /src
import HeatMap from '@/components/Heatmap.vue'
import Card from '@/components/Card.vue'
import NavBar from '@/components/navBar.vue'
import {getLL} from '../helpers/getLL.js'
import {getInfo} from '../helpers/getinfo.js'
import axios from 'axios'
import FavouriteButton from '@/components/favourite.vue'
import DeleteButton from '@/components/delete.vue'
import firebase from '../helpers/firebaseconfig'
// import SavedSearches from '../helpers/savedSearches';

export default {
  name: 'Mapper',
  components: {HeatMap,NavBar,Card, FavouriteButton, DeleteButton},
  data() {
    return {
      open: null,
      center: {lat: 1.3521, lng: 103.8198},
      lat: 1.3521,
      lng: 103.8198,
      zoom: 11,
      markers: [
          
         // Along list of clusters
      ],
      getLocationInput: '',
      heatData: [],
      results: [],
      ifData: false,
      name: '',
      id: '',
      venue_lat: 0,
      venue_lng: 0,
      final_full_add: '',
      categories: '',
      city: '',
      rating: 0,
      api_count: 0,
      label: 'B',
      searches: [],
      selected: ''
      // sections: ['food','drinks', 'coffee'],
      // selected_section : ""
      
    }
  },
  created: function () {
      this.searches = [];
      this.showSearch();
    }, 
  methods: {
    async ratingGetter(id) {
      const test = await getInfo(id)
      if (test.rating == "undefined") {
        return "-"
      }
      return test.rating
    },
    async getLocation() {
      // this function is working by saying its being pressed

      if (this.results != []) {
        this.results = [];
      }

      if (this.markers != []) {
        this.markers = [];
      }

      if (this.heatData != []) {
        this.heatData = [];
      }

      if (this.selected != '') {
          this.getLocationInput = this.selected
      }

      // your url to get , this url needs a latitude and longitude from a location, so we need to use Google to get this for us
      const BASE_URL_1 = 'https://api.foursquare.com/v2/venues/explore?client_id=CYYH5UN4KPR4E2B4CZRL4WXF3TODYG4OBWRN45EYWYLBSXYK&client_secret=2VJF5EMBFIIK1BKHP3D5NWE3L3J4ZWAO2D0ENJ0OU2O5HKB4&v=20211021&ll=';
      const BASE_URL_2 = "&section="
      try {
        // calls getLL which is another axios call to get the lat and long coordinates from google API
        // you can combine strings to form one full URL link and this url link is your next url to make another axios call to foursquare
        getLL(this.getLocationInput).then((x) =>{ 

          //centering map to LL
          var latlng = x.split(",");
          this.center = {lat:Number(latlng[0]),lng:Number(latlng[1])};
          this.lat = Number(latlng[0]);
          this.lng = Number(latlng[1]);


          //change zoom to LL
          this.zoom = 14;
          
          // console.log("section",this.selected_section)

          
          axios.get(`${BASE_URL_1}${x}${BASE_URL_2}${this.selected_section}`).then((response) => {
          this.ifData = true
          const recs = response.data;
          var items = recs.response.groups[0].items;

          var results = this.results;
          for (let i = 0; i < items.length; i++) {
            // here we are filtering through the api response to get the nested information that we need
            const info = items[i].venue;
            this.id = info.id;
            
            this.name = info.name;
            this.city = info.location.city;

            var formatted_address = info.location.formattedAddress;
            var full_address = ""
            for (var item of formatted_address) {
                          full_address += item + ", "
                        }            
            this.final_full_add = full_address.substring(0, full_address.length-2)

            
            this.venue_lat = info.location.lat;
            this.venue_lng = info.location.lng;

            this.categories = [];
            var cat_array = info.categories;

          for (let i = 0; i < cat_array.length; i++) {
            const element = cat_array[i];
            this.categories.push(element.name);
          }

          // const test = 0;
          // getInfo(this.id).then((info) => {

          //   this.rating = info.rating;
            
          // console.log("output",ratingVal); //this is output
            
          // })
          // .then(() => {
          //   console.log("this should give rating",this.rating);})
          // .catch(error => {
          //   this.rating = 5;
          //   console.log(this.rating);
          //   console.log(error);
          // })

          // this.rating = info.rating

          results.push({"name":this.name, "id":this.id, "full_address":this.final_full_add, "categories":this.categories, "city":this.city,
            "lat":this.venue_lat, "lng":this.venue_lng, "rating":0, "photo_url": ''});
          
        
          // for marker points 
          var markerPoint = {lat:this.venue_lat , lng:this.venue_lng , label:this.name, rating:this.rating, address:this.final_full_add}
          this.markers.push(markerPoint)
          
          // for heatmap points
          var heatPoint = {lat:this.venue_lat , lng:this.venue_lng }
          this.heatData.push(heatPoint)

        }

          var categories = [];
          
          for (let i = 0; i < results.length; i++) {
            const r = results[i];
            const m = this.markers[i];
            try{

              getInfo(r.id).then((y) => {
                r.rating = y.rating
                m.rating = y.rating

                r.photo_url = y.photo_url
              })

              r.categories.forEach(cat => {
                if (!categories.includes(cat)) {
                  categories.push(cat);
                }
              })
            }catch(e){
              console.log(e)
            }
            
          }

          // results.forEach(r => {

          //   try{

          //     getInfo(r.id).then((y) => {
          //       r.rating = y.rating
          //     })

          //     r.categories.forEach(cat => {
          //       if (!categories.includes(cat)) {
          //         categories.push(cat);
          //       }
          //     })
          //   }catch(e){
          //     console.log(e)
          //   }
            
            
          // });

        
        });

          
          
        });
        

    } catch (error) {
      console.error(error);
    }
    },

    openMarker(thing) {
      this.open = null;
      this.open = thing;
    },

    setlatlng(lat,lng) {
      this.lat = lat;
      this.lng = lng;
      HeatMap.se
    }, 
    clearData() {
        this.results = [];
        this.ifData = false;
        this.getLocationInput = '';
    },
    // sortPlaces(section) {
    //   var result = this.getLL()
    //   var sorted = result[section]
    //   getLocation()
      
    // },
    saveSearch() {
      const user = JSON.parse(localStorage.getItem('authUser'));
      const userEmail = user.email;
      const uid = userEmail.replace(/\W/g, '');
      const db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");
      var location = this.getLocationInput.toLowerCase();
      db.update({[location]: true})
        .then(() => {
          alert("You have saved the location! Refresh the page to see it in the dropdown");
        })
        .catch(e => {
          alert(e);
        });
      
    },
    async getAll() {
        const user = JSON.parse(localStorage.getItem('authUser'))
        const userEmail = user.email
        const uid = userEmail.replace(/\W/g, '');
        const db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");
        var searches = [];
        
        await db.once('value', (snapshot) => {
            for (const [key] of Object.entries(snapshot.val())) {
                searches.push(key) }

            
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
        });
        return searches;
      },

    async showSearch() {
      try {
        this.searches = [];
        this.searches = await this.getAll()
        this.searches = JSON.parse(JSON.stringify(this.searches))
        // for (var loc of this.searches) {
        //   document.getElementById("dropdownlist").innerHTML += `<option value="`+loc+`"
        //   > ${loc}
        //   </option>`
        // }
      } catch (e) {
          console.log(e);
      }
    },
    deleteSearch() {
    const user = JSON.parse(localStorage.getItem('authUser'))
    const userEmail = user.email
    const uid = userEmail.replace(/\W/g, '');
    const db = firebase.database().ref("/userPrefs/"+ uid + "/savedSearches");
    var location = this.getLocationInput.toLowerCase();
    var index = this.searches.indexOf(location);
    if (index !== -1) {
      this.searches.splice(index, 1);
    } 
    db.child(location).remove()
    .then(() => {
          alert("You have deleted the location!");
        })
    .catch(e => {
          alert(e);
        });
    }

    
    
  },
    
  }
</script>
