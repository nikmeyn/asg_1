import React, { Component } from 'react';


class UserLocation extends Component {
	constructor(props) {
        super(props);
        this.state = {distance : 0};
    }

    async componentDidMount() {
        try {

        } catch (error) {
            console.error(error);
        }
    }
	
    render() {
		if ("geolocation" in navigator){
        	navigator.geolocation.getCurrentPosition( this.success );
		}
		else{
			console.log("no geolocation available");
		}
		
		return(
			<label> {this.state.distance} km</label>
		)

    }
	success = (position) => {
		this.calculateDistance(position.coords.latitude, position.coords.longitude);
	}
	error = () => {
		console.log("no geo found");
	}
	calculateDistance = (userLat, userLong) => {
		console.log("in calc")
		
		var lat1 = this.props.lat;
		var lon1 = this.props.long;
		
		var lat2 = userLat;
		var lon2 = userLong;
		
		var R = 6371; // Radius of the earth in km
		var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
		var dLon = (lon2 - lon1) * Math.PI / 180;
		var a = 0.5 - Math.cos(dLat)/2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon))/2;

		console.log(lat1+ "----" + lat2 + "----" + lon2 + "----" + lon1 + "----" + R + "----" + dLat + "----" +  dLon + "----" + a);
		var d = R * 2 * Math.asin(Math.sqrt(a));
		
		d.toFixed(2);
		
		this.setState({distance:d});
	}
}
export default UserLocation