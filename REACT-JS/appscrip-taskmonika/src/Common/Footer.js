import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faPinterest,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import payment from "../../src/Image/payment-logo.png";
import React from "react";
import "../../src/css/style.css";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="footer">
          <div className="footer-up">
            <div className="up-right">
              <h2>BE THE FRIST TO KNOW</h2>
              <p>Sign up for updates from products</p>
              <div>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your e-mail... "
                />
                <span>
                  <button>SUBSCRIBE</button>
                </span>
              </div>
            </div>

            <div className="up-left">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@product.com</p>

              <h3>CURRENCY</h3>
              <h4>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </h4>
            </div>
          </div>
          <hr />
          <div className="footer-down">
            <div className="down-right">
              <h2>Product</h2>
              <h5>
                <a>HOME</a>
              </h5>
              <h5>
                <a>ABOUT</a>
              </h5>
              <h5>
                <a>CONTACT</a>
              </h5>
              <h5>
                <a>PRODUCT</a>
              </h5>
              <h5>
                <a>FAQ 'S</a>
              </h5>
            </div>
            <div className="down-midal">
              <h2>Quick Links</h2>
              <h5>Quick Links Orders & Shipping</h5>
              <h5>Join/Login as a Seller</h5>
              <h5> Payment & Pricing</h5>

              <h5> FAQs</h5>

              <h5> Terms & Conditions</h5>
            </div>

            <div className="down-left">
              <h2>FOLLOW US</h2>
              <div className="left-icone">
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faTwitter} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faPinterest} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faFacebook} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faInstagram} />
                </p>
              </div>

              <h4>ACCEPTS PAYMENT </h4>

              <img src={payment} alt="" />
            </div>
          </div>

          <div className="footer-last">
            <p>Copyright © 2024 products. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
