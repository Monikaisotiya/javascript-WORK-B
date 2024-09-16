import React from "react";
import "../css/style.css";
import applogo from "../../src/Image/logo.png";

import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <div className="conatiner">
        <div className="Mainheader">
          <div className="head">
            <div className="head-right">
              <div>
                <img src={applogo} alt="" />
              </div>
            </div>
            <div className="head-middal">
              <div>{/* <img src={logo} alt="" /> */}</div>
            </div>
            <div className="haed-left" style={{ fontSize: "22px" }}>
              <ul>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>

                <li>
                  <a>
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="head2">
            <ul>
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>SUCCESS</a>
              </li>

              <li>
                <a href="">PRODUCT</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
