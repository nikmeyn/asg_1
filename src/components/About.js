import React from "react";
import '../styles/About.css';

class About extends React.Component {
    render() {
        return (
            <div className="banner-b">
                <div>
                    <h3>About Assignment 1</h3>
                    <br></br>
					<h3>Nik Meyn and Gio Moros</h3>
					<br></br>
                    <h4>Resources/packages used:</h4>
						<ul>google-map-react</ul>
						<ul>JSZip</ul>
						<ul>jszip-utils</ul>
						<ul>Paletton for color scheme</ul>
						<ul>Splash page thanks to <a href='https://source.unsplash.com/'>Unsplash Source</a></ul>
                </div>
            </div>
        );
    }
}
export default About