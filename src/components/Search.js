import React from "react";
import '../styles/search.css';

class Search extends React.Component {
    render() {
        return(

            <div className="searchBox">
                <input type="text" name="filter" onKeyUp = {this.filterList} placeholder="Filter Country or City" />
            </div>
        );
    }
    filterList = (e) => {
        this.props.filterList(e.target.value.toLowerCase());
    }
}
export default Search