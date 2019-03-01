<<<<<<< HEAD
import React from "react";
import JSZipUtils from "jszip-utils";
import JSZip from "jszip";


export default function zipTargetFiles(favs) {
	
    if (favs.length <= 1) {
        return favs;
    } else {
		var zip = new JSZip();
		
		favs.foreach( photo => {
			JSZipUtils.getBinaryContent(`https://storage.googleapis.com/funwebdev-3rd-travel/large/${photo.path}`, function (err, data) {
				if(err) {
					throw err; // or handle the error
				}
 				var zip = new JSZip();
   				zip.file("picture.png", data, {binary:true});			}
		)
		}
	);
	}
}
=======
// import React from "react";
// import JSZipUtils from "jszip-utils";
// import JSZip from "jszip";
//
//
// export default function zipTargetFiles(favs) {
//
//     if (favs.length <= 1) {
//         return favs;
//     } else {
// 		var zip = new JSZip();
//
// 		favs.foreach( JSZipUtils.getBinaryContent(	"", function (err, data) {
// 				if(err) {
// 					throw err; // or handle the error
// 				}
//  				var zip = new JSZip();
//    				zip.file("picture.png", data, {binary:true});			}
// 		)
// 	);
// 	}
// }
>>>>>>> 0b62a081dc204bc348c34d436a8d525277b19332
