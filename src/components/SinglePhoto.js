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
                            <h2>Title</h2>
                            <label> { photo.title } </label>
                            <h2>Description</h2>
                            <label> { photo.description } </label>
                            <h2>City</h2>
                            <label> { photo.city } </label>
                            <h2>Country</h2>
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