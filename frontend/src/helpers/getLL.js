{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}

import axios from 'axios';

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?region=sg&key=AIzaSyAjnoiL_PASCr0AG9l4LU00PUokxfFC28A&address=';
// var q = 'Dhoby Ghaut';

export async function getLL(q) {
    try {
          const something = await axios.get(`${BASE_URL}${q}`).then((response) => {
          // console.log(response.data);
          const LL = response.data;
          var lat = LL.results[0].geometry.location.lat;
          var lng = LL.results[0].geometry.location.lng;
          
          // console.log(`GET: Here's the lat`, lat);
          // console.log(`GET: Here's the lat`, lng);
          var latLng = lat+","+lng;
          return latLng;
        })

        return something
    } catch (error) {
      console.error(error);
      return error
    }
  }



// const test = getLL(q).then(function(x){
// console.log(x)
// })

// test