{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}

// import axios from 'axios';
// import {getLL} from '../helpers/getLL.js'
// import {getInfo} from './getinfo.js';


// const BASE_URL = 'https://api.foursquare.com/v2/venues/explore?client_id=Y54M35CHHAGKEBOQ52JLWJAMD0NRSYEZRPTHS0SI45YLIEQJ&client_secret=MRB55DCTOSGJCJOX4XDLCQ0U4YN04QHGJH3KFDUBT1GDF1SO&v=20211021&ll=';

// //https://api.foursquare.com/v2/venues/{venue_id}?client_id=Y54M35CHHAGKEBOQ52JLWJAMD0NRSYEZRPTHS0SI45YLIEQJ&client_secret=MRB55DCTOSGJCJOX4XDLCQ0U4YN04QHGJH3KFDUBT1GDF1SO&v=20211021
// export async function getRecs(q) {
//     try {

//         var ll = await getLL(q);
//         // console.log("this is recs ll",ll)
//         const response = await axios.get(`${BASE_URL}${ll}`)

//         // console.log(response.data);
//         const recs = response.data;
//         var items = recs.response.groups[0].items;
//         // console.log(items);

//         var results = [];

//         for (let i = 0; i < items.length; i++) {
//           var id = items[i].venue.id

//           // var info = await getInfo(id);

//           results.push(info);
//         }


        
//         console.log(results);
        
//         return results;
      

//     } catch (error) {
//       console.error(error);
//     }
//   }

