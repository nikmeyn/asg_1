import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import SinglePhoto from './SinglePhoto.js';
import ViewMap from "./ViewMap.js";
import Search from './Search.js';


class PhotoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPhoto: 1, viewStatus: "map"};
    }

    async componentDidMount() {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    editImageDetails = (id) => {
        this.setState({currentPhoto: id, viewStatus: "edit"}, function () {
            console.log(this.state.viewStatus);
        });
    }
    viewSinglePhoto = (id) => {
        this.setState({currentPhoto: id, viewStatus: "view"}, function () {
            console.log(this.state.viewStatus);
        });
    }
    showMap = (id) => {
        this.setState({currentPhoto: id, viewStatus: "map"}, function () {
            console.log(this.state.viewStatus);
        });
    }

    render() {
        let view;
        if (this.state.viewStatus === "map") {

            view = <ViewMap photos={this.props.unfilteredPhotos} currentPhoto={this.state.currentPhoto}
                            editImageDetails={this.editImageDetails} viewSinglePhoto={this.viewSinglePhoto}
                            showMap={this.showMap}/>
        } else if (this.state.viewStatus === "edit") {
            view = <EditPhotoDetails photos={this.props.unfilteredPhotos} currentPhoto={this.state.currentPhoto}
                                     updatePhoto={this.props.updatePhoto} editImageDetails={this.editImageDetails}
                                     addToFavs={this.props.addToFavs} viewSinglePhoto={this.viewSinglePhoto}
                                     showMap={this.showMap}/>
        } else if (this.state.viewStatus === "view") {
            view = <SinglePhoto photos={this.props.unfilteredPhotos} currentPhoto={this.state.currentPhoto}
                                updatePhoto={this.props.updatePhoto} viewStatus={this.state.viewStatus}
                                editImageDetails={this.editImageDetails} addToFavs={this.props.addToFavs}
                                viewSinglePhoto={this.viewSinglePhoto} showMap={this.showMap}/>
        }

        return (

            <section>

                <Search filterList={this.props.filterList}/>
                <div className="container">
                    <PhotoList photos={this.props.photos} editImageDetails={this.editImageDetails}
                               addToFavs={this.props.addToFavs} viewSinglePhoto={this.viewSinglePhoto}
                               showMap={this.showMap}/>
                    {view}
                </div>
            </section>
        );
    }
}

export default PhotoBrowser