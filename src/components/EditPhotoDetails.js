import React from "react";
import '../styles/PhotoDetails.css';

class EditPhotoDetails extends React.Component {
    render() {
        const id = this.props.currentPhoto; 
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        // just in case, handle missing photos in the props
        if (this.props.photos.length > 0) {
            // find the photo object with this id
            const photo = this.props.photos.find( p => p.id === id);
            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className="photoForm">
                            <legend>Edit Photo Details</legend>
                            <img src = { imgURL+photo.path } alt = { photo.title } onChange={this.handleChange} />
                            <label>Title</label>
                            <input type='text' name='title' value = { photo.title } onChange={this.handleChange} />
                            <label>City</label>
                            <input type='text' name='city' value = { photo.city } onChange={this.handleChange} />
                            <label>Country</label>
                            <input type='text' name='country' value = { photo.country } onChange={this.handleChange} />
                            <label>Latitude</label>
                            <input type='text' name='country' value = { photo.latitude } onChange={this.handleChange} />
                            <label>Longitude</label>
                            <input type='text' name='country' value = { photo.longitude } onChange={this.handleChange} />
                        </form>
						<button onClick = { this.handleViewClick } >View</button>
						<button onClick = { this.handleMapClick } >Map</button>
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
    handleMapClick = (e) => {
        this.props.showMap(this.props.currentPhoto);
    }
    handleChange = (e) => {
        
        // find the current photo in our photo array
        const id = this.props.currentPhoto;
        const photo = this.props.photos.find( p => p.id === id);
        
        // update the photo using these 3 steps ...
        // 1. make a clone of the current photo object
        const clonedPhoto = { ...photo };

        // 2. update value of field that just changed
        clonedPhoto[e.currentTarget.name] = e.currentTarget.value;

        // 3. tell parent (or above) to update the state for this photo
        this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
    }
}
export default EditPhotoDetails