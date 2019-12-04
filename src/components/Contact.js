import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div id="contact_us">
      <h1>Contact us</h1>
      <fieldset>
        
        <div className="line2">
          <div className="line2-contain">
            <form>
              <input name="fullname" placeholder="FULLNAME" type="text" />
              <br />
              <input name="gmail" placeholder="GMAIL" type="email" />
              <br />
              <textarea name="message" placeholder="MESSAGE" type />
              <br />
            </form>
            <button>Submit</button>
          </div>
          <ul>
            <a href="www.facebook.com/sixtusiwuchukwu.21">
              <li>facebook</li>
            </a>
            <a href="www.twitter.com/sixtusiwuchukwu">
              <li>Twitter</li>
            </a>
            <a href="www.twitter.com/sixtusiwuchukwu">
              <li>Twitter</li>
            </a>
            <a href="www.twitter.com/sixtusiwuchukwu" target="_blank">
              <li>Twitter</li>
            </a>
          </ul>
        </div>
      </fieldset>
    </div>
  );
};
export default Contact;
