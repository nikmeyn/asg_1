import React from "react";

class FavoriteItem extends React.Component {
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.favPhoto.path}`;
        return (
            <div className="photoFave wrapper" onClick={this.handleViewClick}>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.favPhoto.title}
                         alt={this.props.favPhoto.title}/>
                    <span onClick={this.handleRemoveFavorite} className="close"></span>
                </figure>
            </div>
        );
    }
	handleRemoveFavorite = (e) => {
		console.log("remove fav");
        this.props.removeFromFavs(this.props.favPhoto.id);
    }

}

export default FavoriteItem