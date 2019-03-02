import React from "react";
import FavoriteItem from './FavoriteItem.js';
import ZipFavs from './ZipFavs.js';
import {Collapse, Button} from 'reactstrap';


class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: true};
    }


    render() {
        if (this.props.favList.length > 0) {
            return (
                <div>
                    <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>Show Favourites</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <article className="favorites">

                            {this.props.favList.map((p) => <FavoriteItem favPhoto={p} key={p.id}
                                                                         removeFromFavs={this.props.removeFromFavs}/>)}
                            <ZipFavs favList={this.props.favList}/>

                        </article>
                    </Collapse>
                </div>
            );
        } else {
            return null
        }
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }
}

export default Favorites