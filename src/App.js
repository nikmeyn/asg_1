import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Favorites from './components/Favorites.js';


class App extends Component {
    
    constructor(props){
        super(props)
        this.state = { photos: [] , favList : [] , unfilteredPhotos : [] };
    }
    
    async componentDidMount() {
        try {
            const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
            const response = await fetch(url);
            const jsonData = await response.json();
            this.setState({ photos: jsonData , unfilteredPhotos : jsonData });
        }
        catch (error) {
            console.error(error);
        }
    }
    updatePhoto = (id, photo) => {
        
        // Create deep clone of photo array from state.
        // We will use a lodash function for that task.
        const copyPhotos = cloneDeep(this.state.photos);
        
        // find photo to update in cloned array
        const photoToReplace = copyPhotos.find( p => p.id === id);
        
        // replace photo fields with edited values
        photoToReplace.title = photo.title;
        photoToReplace.city = photo.city;
        photoToReplace.country = photo.country;
        
        //update state
        this.setState( {photos: copyPhotos } );
    }
    addToFavs = (id) => {
        
        //create a deep clone of photos array
        const copyPhotos = cloneDeep(this.state.photos);

        //find photo to fav in cloned array
        const photoToFav = copyPhotos.find( p => p.id === id);
        
        //is this already favorited
        const exists = this.state.favList.find ( p => p.id === id)
        
        //if yes, dont try re-adding
        if (exists != null){
            return;
        }
        
        //deep clone favList
        const copyfavs = cloneDeep(this.state.favList);
        
        //add photo to fav to favList
        copyfavs.push(photoToFav);
        
        //update state
        this.setState( {favList : copyfavs} );
        
        
    }
    filterList = (filter) => {
        
        console.log("at the app filter method");
        
        //var unfilteredPhotos = cloneDeep(this.state.photos);

        var filteredPhotos = this.state.unfilteredPhotos.filter( (p) => { return p.city.toLowerCase().includes(filter) || p.country.toLowerCase().includes(filter) } );
        
        console.log(filteredPhotos);
        /*
        function(item){
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });*/
        this.setState( {photos : filteredPhotos} );
    }
    
    render() {
        return (
            <div>
                <HeaderApp />
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/home' exact component={Home} />
                <Route path='/browse' exact render ={ (props) => 
                    <div> 
                        <Favorites favList = { this.state.favList } /> 
                        <PhotoBrowser photos={ this.state.photos } updatePhoto = { this.updatePhoto } addToFavs = { this.addToFavs } filterList = {this.filterList} unfilteredPhotos = { this.state.unfilteredPhotos } /> 
                    </div> 
                } />
                

            </div>
        );
    }
    
    
}

export default App;
