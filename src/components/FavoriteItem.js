import React from "react";
import '../styles/favoriteItem.css';
class FavoriteItem extends React.Component {
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.favPhoto.path}`;
        return (
            <div className="photoFave wrapper" onClick={this.handleViewClick}>
                <figure>
                    <img className="image" src={imgURL} className="photoThumb" title={this.props.favPhoto.title}
                         alt={this.props.favPhoto.title}/>
                    <div className="overlay">
                        <div className="text">Remove</div>
                    </div>
                    {/*<button className="photoThumb" onClick = {this.handleRemoveFavorite }>Remove</button>*/}
                    {/*<span onClick={this.handleRemoveFavorite} className="close"></span>*/}
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