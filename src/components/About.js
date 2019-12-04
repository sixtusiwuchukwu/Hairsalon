import React from "react";
import "../styles/about.css";
import image1 from "../images/A5.jpeg";
const About = () => {
  return (
    <div id="About_us">
      <h1>About_us</h1>
      <div className="About_hold">
        <div className="details">
          <p>
            Derbie classy have been in existence over 5years ago and have
            archieved many braids awards such as Derbie classy have been in
            existence over 5years ago and have archieved many braids awards such
            as <li>winner braids</li>
            <li>winner braids</li>
          </p>
        </div>
        <div className="loaction">
          <address>
            loaction:no6 Ajagba off Brass Road
            <br /> Aba
            <br /> Abia State
            <br /> Nigeria.
          </address>
        </div>
        <img src={image1} alt="" />
      </div>
    </div>
  );
};
export default About;
