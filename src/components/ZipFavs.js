import React from "react";
import JSZipUtils from "jszip-utils";
import {JSZip, saveAs} from "jszip";

class ZipFavs extends React.Component {
    render() {
        return (
            <div className="photoFave wrapper">
                <button className="photoThumb" onClick={this.handleDownloadClick}>Download</button>
            </div>
        );
    }


    handleDownloadClick = () => {
        var zip = new JSZip();
        var count = 0;
        var name = +"Names.zip";
        console.log(name);
        // JSZipUtils.getBinaryContent(`https://storage.googleapis.com/funwebdev-3rd-travel/large/${this.props.favList[0].path}`, function (err, data){


        // console.log("downloaded files" + zip);

    };

    /*var zip = JSZip;
    zip.file("Hello.txt", "Hello world\n");


    zip.generateAsync({type:"blob"}).then(function (blob) {
        saveAs(blob, "favorites.zip");
    }, function (err) {
        console.log(err);
    });*/


}

export default ZipFavs

/*var Promise = window.Promise;
if (!Promise) {
    Promise = JSZip.external.Promise;
}

function urlToPromise(url) {
    return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

var $form = $("#download_form").on("submit", function () {

    resetMessage();

    var zip = new JSZip();

    // find every checked item
    $(this).find(":checked").each(function () {
        var $this = $(this);
        var url = $this.data("url");
        var filename = url.replace(/.*\//g, "");
        zip.file(filename, urlToPromise(url), {binary:true});
    });

    // when everything has been downloaded, we can trigger the dl
    zip.generateAsync({type:"blob"}, function updateCallback(metadata) {
        var msg = "progression : " + metadata.percent.toFixed(2) + " %";
        if(metadata.currentFile) {
            msg += ", current file = " + metadata.currentFile;
        }
        showMessage(msg);
        updatePercent(metadata.percent|0);
    })
    .then(function callback(blob) {

        // see FileSaver.js
        saveAs(blob, "example.zip");

        showMessage("done !");
    }, function (e) {
        showError(e);
    });

    return false;
});
}*/