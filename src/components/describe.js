import React from "react";
import "../styles/describe.css";
import image1 from "../images/A4.jpeg";
import image2 from "../images/A5.jpeg";
import image3 from "../images/A6.jpeg";

const Describe = () => {
  return (
    <div>
      <div id="what_we_do">
        <h1>WHAT WE DO</h1>
        <div className="line">
          <div className="show">
            <div className="text">
              <h2>We Braid Classic</h2>
              <p>
                hvfhvvhnvnhdn vhd;vuh;dd;uvd;vu;;
                fvfvhdfvhdfvfhvdvhfvvhdfvfvvdfvdfv
                jbvfjvlvlvlsvslvflvfvlfvfvfvdvdsvfvfvvfvsvsfvsfvsvs
                fvsfvsvsvsvssfvvsvsvs
              </p>
            </div>
            <img src={image1} alt="classic" />
          </div>
          <div className="show">
            <div className="text">
              <h2>We Fix Classic</h2>
              <p>
                hvfhvvhnvnhdn vhd;vuh;dd;uvd;vu;;
                fvfvhdfvhdfvfhvdvhfvvhdfvfvvdfvdfv
                jbvfjvlvlvlsvslvflvfvlfvfvfvdvdsvfvfvvfvsvsfvsfvsvs
                fvsfvsvsvsvssfvvsvsvs
              </p>
            </div>
            <img src={image2} alt="classic" />
          </div>
          <div className="show">
            <div className="text">
              <h2>We cut Classic</h2>
              <p>
                hvfhvvhnvnhdn vhd;vuh;dd;uvd;vu;;
                fvfvhdfvhdfvfhvdvhfvvhdfvfvvdfvdfv
                jbvfjvlvlvlsvslvflvfvlfvfvfvdvdsvfvfvvfvsvsfvsfvsvs
                fvsfvsvsvsvssfvvsvsvs
              </p>
            </div>
            <img src={image3} alt="classic" />
          </div>
          <div className="show">
            <div className="text">
              <h2>We Polish Classic</h2>
              <p>
                hvfhvvhnvnhdn vhd;vuh;dd;uvd;vu;;
                fvfvhdfvhdfvfhvdvhfvvhdfvfvvdfvdfv
                jbvfjvlvlvlsvslvflvfvlfvfvfvdvdsvfvfvvfvsvsfvsfvsvs
                fvsfvsvsvsvssfvvsvsvs
              </p>
            </div>
            <img src={image2} alt="classic" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Describe;
