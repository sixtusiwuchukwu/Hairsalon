import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="holder">
        <div className="hold">
          <div className="contain">
            <div className="nav">
              <h2>Debie</h2>
            </div>
            <ul>
              <a href="#About_us">
                <li>About</li>
              </a>
              <a href="#contact_us">
                <li>Contact</li>
              </a>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="description">
          <h2>Derbie Breads</h2>
          <p>
            svh;jhv;jhv;jkv;kvfkvjfjvhjvhn c
            nckjnfvjfvjfvfvf;vkfvkdsffsdfsdfsdfsffdffsfdfvv
          </p>
        </div>
        <a href="#what_we_do" id="exp">
          {" "}
          <button className="explore">EXPLORE</button>
        </a>
      </div>
    </div>
  );
};
export default Header;
