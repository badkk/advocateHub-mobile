import React from 'react'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
/**
 * Created by t-zikunfan
 * Date: 18:05 2017/8/9
 */
const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCmrNlszXxi8c2b6WJGyoudeaYqmRKr434";

export default function(props) {

    const MeetingMap = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={props.pos}
                // Pass the map reference here as props
                googleMapURL={googleMapURL}
                disableDefaultUI={true}
            >
                <Marker {...props.marker}/>
            </GoogleMap>)
        );
    return (
        <MeetingMap
            containerElement={
                <div style={{ height: `300px` }} />
            }
            mapElement={
                <div style={{ height: `100%` }} />
            }
            pos={props.pos}
            marker={props.marker}
        />
    );
}