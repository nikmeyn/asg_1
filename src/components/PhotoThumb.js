import React from "react";
import '../styles/photoThumb.css'

class PhotoThumb extends React.Component {
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
        return (
            <span className="photoBox" onClick={this.handleViewClick}>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.photo.title}
                         alt={this.props.photo.title}/>

                </figure>
                <div>
                    <h3>{this.props.photo.title}</h3>
                    <p>{this.props.photo.city}, {this.props.photo.country}</p>
                    <button onClick={this.handleViewClick}>👁</button>
                    <button onClick={this.handleFavClick}>💜</button>
                    <button onClick={this.handleMapClick}>🌎</button>
                    <button onClick={this.handleEditClick}>🖋</button>
                </div>
                <div className="overlay2">
                    <div onClick={this.handleRemoveFavorite} className="text">X</div>
                </div>
            </span>
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
        e.stopPropagation();
    }
}

export default PhotoThumb