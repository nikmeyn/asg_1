import React from "react";
import '../styles/PhotoDetails.css';

class ViewSinglePhoto extends React.Component {
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
                            <legend>View Photo Details</legend>
                            <img src = { imgURL+photo.path } alt = { photo.title } />
                            <label>Title</label>
                            <label> { photo.title } </label>
                            <label>Description</label>
                            <label> { photo.description } </label>
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
export default ViewSinglePhoto