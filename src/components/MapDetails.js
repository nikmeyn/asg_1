import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="pin"></div>;

class SimpleMap extends Component {
	constructor(props) {
        super(props);
        this.state = { zoom: 10 };
	}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAxZsj5CCckEJEDAfVOJQPbMe2QQf3xH5s" }}
          center={{lat: this.props.lat, lng:this.props.long }}
          defaultZoom={this.state.zoom}
        >
          <Marker lat={this.props.lat} lng={this.props.long}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
/*

import React from 'react';
import {Map, Marker, GoogleApiWrapper} from "google-map-react";

//const mapStyles = {
//  width: '100%',
  //  height: '100%'
//};
export class MapContainer extends React.Component{
    render() {
        return (
            <Map google={this.props.google} zoom={10} initialCenter={ {lat : this.props.lat, lng : this.props.long } }>
                <Marker
                    name={this.props.title} 
                    position = {{lat : this.props.lat, lng : this.props.long }}    
                />
            </Map>
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: "AIzaSyAxZsj5CCckEJEDAfVOJQPbMe2QQf3xH5s"
})(MapContainer);


*/
