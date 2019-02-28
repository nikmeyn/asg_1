import React from "react";
import PhotoThumb from './PhotoThumb.js';


class PhotoList extends React.Component {
    render() {
        if (this.props.photos.length > 0) {
            return (
                <div className="photos">
                    { this.props.photos.map( (p) => <PhotoThumb photo={p} key={p.id} editImageDetails = { this.props.editImageDetails } addToFavs = { this.props.addToFavs } viewSinglePhoto = { this.props.viewSinglePhoto } showMap = { this.props.showMap }/> ) } 
                </div>
            );
        }else{
            return null
        }
    }
}
export default PhotoList