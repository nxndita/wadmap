{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}

import axios from 'axios';

const BASE_URL_1 = 'https://api.foursquare.com/v2/venues/';
//need to change client_id when error 429 has been hit
const BASE_URL_2 = '?client_id=Y54M35CHHAGKEBOQ52JLWJAMD0NRSYEZRPTHS0SI45YLIEQJ&client_secret=MRB55DCTOSGJCJOX4XDLCQ0U4YN04QHGJH3KFDUBT1GDF1SO&v=20211021';

export async function getInfo(id) {
    try {
          const something = await axios.get(`${BASE_URL_1}${id}${BASE_URL_2}`).then((response) => {
          
          const info = response.data.response.venue;

          var name = info.name;
          // var address = info.location.address;
          // var crossStreet = info.location.crossStreet;
          // var postalCode = info.location.postalCode;

          // var full_address = crossStreet+", "+address+", Singapore "+postalCode;
          
          // var lat = info.location.lat;
          // var lng = info.location.lng;

          // var categories = [];
          // var cat_array = info.categories;

          // for (let i = 0; i < cat_array.length; i++) {
          //   const element = cat_array[i];
          //   categories.push(element.name);
          // }
  
          var rating = info.rating;
          // var photos = info.photos.groups[0].items.length-1

          //return idx from 0 to length-1
          // var photo_idx = Math.floor(Math.random() * photos);
          // var photo_idx = 1;

          // var prefix = info.photos.groups[0].items[photo_idx].prefix;
          // var suffix = info.photos.groups[0].items[photo_idx].suffix;

          var photo_url = '';

          if (info.bestPhoto) {
            var prefix = info.bestPhoto.prefix;
            var suffix = info.bestPhoto.suffix;
            photo_url = prefix + "original" + suffix;
          }
          else {
            photo_url = 'wadmap-main/frontend/src/assets/No_Image_Available.jpg'
          }

          
          


          


          // var latLng = lat+","+lng;
          // return latLng;

        //   return {"name":name, "rating":rating, "full_address":full_address, "categories":categories,
        // "lat":lat, "lng":lng}

          return {"name":name, "rating":rating, "photo_url":photo_url}
        })

        return something
    } catch (error) {
      console.error(error);
      return error
    }
  }
//https://api.foursquare.com/v2/venues/5030bc2de4b0bf3e6aab1f5a?client_id=Y54M35CHHAGKEBOQ52JLWJAMD0NRSYEZRPTHS0SI45YLIEQJ&client_secret=MRB55DCTOSGJCJOX4XDLCQ0U4YN04QHGJH3KFDUBT1GDF1SO&v=20211021


// const test = getInfo('5030bc2de4b0bf3e6aab1f5a').then(function(x){
// console.log(x)
// });

// console.log(test);