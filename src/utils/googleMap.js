import React from 'react'
import {
    GoogleMap,
    Marker,
} from "react-google-maps";
/**
 * Created by t-zikunfan
 * Date: 18:05 2017/8/9
 */
const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyAAo8Kywz_wD6ptjSEAGbdEltqxWpXUBSc";
export default function ({}) {
   return (
       <GoogleMap
           defaultZoom={3}
           defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
           // Pass the map reference here as props
           googleMapURL={googleMapURL}
       >
       </GoogleMap>
   );
}