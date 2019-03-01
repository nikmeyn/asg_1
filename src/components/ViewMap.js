import React from "react";
import MapDetails from "./MapDetails.js"
import UserLocation from "./UserLocation.js"
import '../styles/PhotoDetails.css';

class ViewMap extends React.Component {
    render() {
        const id = this.props.currentPhoto; 
        //const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        // just in case, handle missing photos in the props
        if (this.props.photos.length > 0) {
            // find the photo object with this id
            const photo = this.props.photos.find( p => p.id === id);
            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className="photoForm">
                            <legend>View Photo Map Details</legend>
                            <MapDetails lat= { photo.latitude } long ={ photo.longitude } title = { photo.title }/>
                            <label>Title:</label>
                            <label> { photo.title } </label>
                            <label>City:</label>
                            <label> { photo.city } </label>
                            <label>Country:</label>
                            <label> { photo.country } </label>
							<label>Distance from You (in km):</label>
                            <UserLocation lat= { photo.latitude } long ={ photo.longitude }/>
                        </form>
						<button onClick = { this.handleViewClick } >View</button>
						<button onClick = { this.handleEditClick } >Edit</button>
                    </div>
                </article>
            );
        }else {
            return null;
        }
    }
	handleViewClick = (e) => {
        this.props.viewSinglePhoto(this.props.currentPhoto);
    }
    handleEditClick = (e) => {
        this.props.editImageDetails(this.props.currentPhoto);
	}
}
export default ViewMap