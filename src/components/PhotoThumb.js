import React from "react";

class PhotoThumb extends React.Component {
    render() {
        const imgURL =  `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
        return (
            <div className="photoBox" onClick = {this.handleViewClick}>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title} />
                </figure>
                <div>
                    <h3>{this.props.photo.title}</h3> 
                    <p>{this.props.photo.city}, {this.props.photo.country}</p> 
                    <button onClick = { this.handleViewClick }>View</button>
                    <button onClick = { this.handleFavClick }>❤</button>
                    <button onClick = { this.handleMapClick }>Map</button>
                    <button onClick = { this.handleEditClick }> Edit </button>
                </div>
            </div>
        );
    }
    handleViewClick = (e) => {
        this.props.viewSinglePhoto(this.props.photo.id);
    }
    handleEditClick = (e) => {
        this.props.editImageDetails(this.props.photo.id);
        e.stopPropagation();
    }
    handleFavClick = (e) => {
        this.props.addToFavs(this.props.photo.id);
    }
    handleMapClick = (e) => {
        this.props.showMap(this.props.photo.id);
    }
}
export default PhotoThumb