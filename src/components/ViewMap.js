import React from "react";
import MapDetails from "./MapDetails.js"
import '../styles/PhotoDetails.css';

class ViewMap extends React.Component {
    render() {
        const id = this.props.currentPhoto; 
        //const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        // just in case, handle missing photos in the props
        if (this.props.photos.length > 0) {
            // find the photo object with this id
            const photo = this.props.photos.find( p => p.id === id);
            console.log("map render");
            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className="photoForm">
                            <legend>View Photo Map Details</legend>
                            <MapDetails lat= { photo.latitude } long ={ photo.longitude } title = { photo.title }/>
                            <label>Title</label>
                            <label> { photo.title } </label>
                            <label>City</label>
                            <label> { photo.city } </label>
                            <label>Country</label>
                            <label> { photo.country } </label>
                        </form>
                    </div>
                </article>
            );
        }else {
            return null;
        }
    }
}
export default ViewMap