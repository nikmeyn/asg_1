import React, { Component } from 'react';


class UserLocation extends Component {
	constructor(props) {
        super(props);
        this.state = {distance : null};
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
		var R = 6371e3; // metres
		var φ1 = this.props.lat.toRadians();
		var φ2 = userLat.toRadians();
		var Δφ = (userLat-this.props.lat).toRadians();
		var Δλ = (userLong-this.props.long).toRadians();

		var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

		var d = R * c;
		
		this.setState({distance:d});
	}
}
export default UserLocation