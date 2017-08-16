import React, {Component} from 'react'
import { CircularProgress } from 'material-ui'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps/lib/";
import SearchBox from 'react-google-maps/lib/places/SearchBox'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
/**
 * Created by t-zikunfan
 * Date: 18:05 2017/8/9
 */
const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry,drawing&sensor=false&key=AIzaSyCmrNlszXxi8c2b6WJGyoudeaYqmRKr434";

export function StaticMap(props) {

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
const INPUT_STYLE = {
    boxSizing: `border-box`,
    MozBoxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `32px`,
    marginTop: `10px`,
    padding: `0 12px`,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
};
const SearchBoxMap = withScriptjs(withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            /* eslint-disable no-undef */
            controlPosition={google.maps.ControlPosition.TOP}
            onPlacesChanged={props.onPlacesChanged}
            inputPlaceholder="Input your talk location"
            inputStyle={INPUT_STYLE}
        />
        {
            props.markers.map((marker, index) => (
                <Marker position={marker.position} key={index}/>
            ))
        }
    </GoogleMap>
)));
export class SearchMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounds: null,
            center: {
                lat: 47.6205588,
                lng: -122.3212725,
            },
            markers: [],
        };
        this.handleMapMounted = this.handleMapMounted.bind(this);
        this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
        this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
        this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
    }
    handleMapMounted(map) {
        this._map = map;
    }

    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });

    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }

    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();
        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));
        const address = places ? places[0].formatted_address : '';
        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;
        const lat = mapCenter.lat();
        const lng = mapCenter.lng();
        console.log(lat, lng, address);
        this.props.updateAdd(address);
        this.props.updateLat(lat);
        this.props.updateLng(lng);
        this.setState({
            center: mapCenter,
            markers,
        });
    }

    render() {
        return (
            <SearchBoxMap
                googleMapURL={googleMapURL}
                loadingElement={
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '40%', width: '100%'}}>
                        <CircularProgress size={50}/>
                    </div>
                }
                containerElement={
                    <div style={{ height: `300px`, width: '500px'}} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                center={this.state.center}
                onMapMounted={this.handleMapMounted}
                onBoundsChanged={this.handleBoundsChanged}
                onSearchBoxMounted={this.handleSearchBoxMounted}
                bounds={this.state.bounds}
                onPlacesChanged={this.handlePlacesChanged}
                markers={this.state.markers}
            />
        );
    }
}