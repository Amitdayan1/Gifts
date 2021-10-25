import React from "react";
import "./About.css"

function About () {
    return (
        <div>
        <div className="about-section">
            <h1>About Us Page</h1>
            <p>Best Gift is </p>
            <p></p>
        </div>
    <h2 style={{textAlign:"center"}}>Our Team</h2>
    <div className="row">
        <div className="column">
            <div className="card">
                <img src="images/ceoPhoto.PNG" className="photos" />
                    <div className="container">
                        <h2>Amit Dayan</h2>
                        <p className="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>Amitd833@gmail.com</p>
                        <p>
                            <button className="button">Contact</button>
                        </p>
                    </div>
            </div>
        </div>
            <div className="column">
                <div className="card">
                    <img src="images/artDirectorPhoto.PNG" className="photos" />
                        <div className="container">
                            <h2>Adi Dayan</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>Adidayan17@gmail.com</p>
                            <p>
                                <button className="button">Contact</button>
                            </p>
                        </div>
                   </div>
            </div>
    </div>
        </div>
 )
}
export default About;
