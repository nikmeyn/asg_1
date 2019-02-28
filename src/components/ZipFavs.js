import React from "react";
import JSZip from "jszip";

class ZipFavs extends React.Component {
    render() {
		var [favorites] = this.props.photos;
		const zip = new JSZip();

		var favorites = zip.folder("favorites");

		for (let i=0; i< this.props.photos.length; i++){
			favorites.file(this.props.photos[i].title, this.props.photos[i]);
		}
		return(<p> test</p>

		);
	}
}