import React from "react";
import "./About.css"

function About () {
    return (
        <div>
        <div className="About">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <div className="about-section">
            <h1>About Us ...</h1>
            <p>Best Gift the best way to give gift cards today </p>
            <p>We believe in customer service, reliability and customized price</p>
            <p>At our site you can purchase gift cards for family ,friends and the important people in your life and in a simple way you can give them the gift via email.</p>
            <p>Yours the Best Gift team</p>
            <p></p>
        </div>
        </div>
    <h2 className="OurTitle">Our Team</h2>
    <div className="row row-cols-1 row-cols-md-2">
        <div className="column">
            <div className="card w-75 h-100">
                <img src="images/ceoPhoto.PNG" className="photos" />
                    <div className="container">
                        <h2>Amit Dayan</h2>
                        <p className="title">CEO & Founder</p>
                        <p>Some text that describes me...</p>
                        <p>Amitd833@gmail.com</p>
                        <p>
                            <button className="button">Contact</button>
                        </p>
                    </div>
            </div>
        </div>
            <div className="column">
                <div className="card w-75 h-100">
                    <img src="images/artDirectorPhoto.PNG" className="photos" />
                        <div className="container">
                            <h2>Adi Dayan</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me...</p>
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
