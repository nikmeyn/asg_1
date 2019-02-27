import React from "react";
import FavoriteItem from './FavoriteItem.js';
import ZipFavs from './ZipFavs.js';


class Favorites extends React.Component {
    render() {
        if (this.props.favList.length > 0) {
            return (
                <article className="favorites">
                    { this.props.favList.map( (p) => <FavoriteItem favPhoto={p} key={p.id}/> )} 
					<ZipFavs favList = this.props.favList/>
                </article>
            );
        }else{
        return null
        }
    }
}
export default Favorites