import React from "react";

class FavoriteItem extends React.Component{
    render() {
        const imgURL =  `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.favPhoto.path}`;
        return (
            <div className="photoBox" onClick = {this.handleViewClick}>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.favPhoto.title} alt={this.props.favPhoto.title} />
                </figure>
            </div>
        );
    }
}
export default FavoriteItem