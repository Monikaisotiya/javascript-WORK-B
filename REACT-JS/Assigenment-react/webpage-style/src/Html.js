import React, { useState } from "react";
import "./Html.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import burgr from "./Images/01.jpg";
import pizza from "./Images/02.jpg";
import honey from "./Images/honey.jpg";
import grill from "./Images/grilled.jpg";
import rice from "./Images/rice.jpg";
import soup from "./Images/soup.jpg";
import backg from "./Images/hero-bg.jpg";
import about from "./Images/about-img.png";
import slide1 from "./Images/slide1.jpg";
import slide2 from "./Images/slide2.jpg";
import slide3 from "./Images/silde3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Html = () => {
  const [openresbar, setOpenresbar] = useState(false);
  console.log(openresbar, "openresbar");
  const handleopen = () => {
    setOpenresbar(!openresbar);
  };

  return (
    <>
      <div>
        <div class="section">
          <header>
            <div class="div1">
              <h3>feane</h3>
            </div>
            <div class="div2">
              <h6>HOME</h6>
              <h6>MENU</h6>
              <h6>ABOUT</h6>
              <h6>BOOKTABLE</h6>
            </div>

            <div class="div3">
              <FontAwesomeIcon icon={faUser} style={{ color: "#efeff1" }} />

              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#e8ecf2" }}
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#edf1f7" }}
              />

              <button>order online</button>
            </div>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#e9ecf1" }}
              onClick={handleopen}
              className="barsicon"
            />
          </header>
        </div>
        {openresbar ? (
          <div class="responsivemenu">
            <h6>HOME</h6>
            <h6>MENU</h6>
            <h6>ABOUT</h6>
            <h6>BOOKTABLE</h6>
          </div>
        ) : null}
        <div class="section1">
          <div class="bgimaages1">
            <img src={backg} alt="" />
          </div>
          <div class="bgcontain">
            <h3>Fast Food Restaurant</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              dolores dolorem sit ullam consequuntur, exercitationem saepe
              quisquam architecto incidunt excepturi mollitia expedita
              repudiandae in cumque! Autem quod laboriosam repudiandae eveniet
              veritatis nobis natus fugiat corrupti voluptas nemo, deserunt
              aperiam tempore.
            </p>
            <button className="ordernow">order now</button>
          </div>
        </div>

        <div class="section2">
          <div class="right">
            <img src={burgr} alt="" />
            <div class="b1">
              <h3>Tasty</h3>
              <h2>20% Off</h2>
              <button>
                order now <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div class="midal">
            <img src={pizza} alt="" />
            <div class="b1">
              <h3>Pizza Days</h3>
              <h2>15% off</h2>
              <button>
                order now <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div class="left">
            <img src={grill} alt="" />
            <div class="b1">
              <h3>pasta day</h3>
              <h2>10% off</h2>
              <button>
                order now <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div class="last">
            <img src={rice} alt="" />
            <div class="b1">
              <h3>Pizza Days</h3>
              <h2>15% off</h2>
              <button>
                order now <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>

          <div class="last">
            <img src={honey} alt="" />
            <div class="b1">
              <h3>Pizza Days</h3>
              <h2>15% off</h2>
              <button>
                order now <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <div class="last">
            <img src={soup} alt="" />
            <div class="b1">
              <h3>Pizza Days</h3>
              <h2>15% off</h2>
              <button>
                order now <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="section3">
          <div class="r8">
            <img src={about} alt="" />
          </div>
          <div class="r9">
            <h2>We Are Feane</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <button>read more</button>
          </div>
        </div>

        <div class="section4">
          {/* <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={vegitable}
                  class="d-block w-100"
                  alt="moni1"
                  height="600px"
                  width="600px"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={veg}
                  class="d-block w-100"
                  alt="moni2"
                  height="600px"
                  width="600px"
                />
              </div>
              <div class="carousel-item">
                <img src={vegitable} alt="moni3" height="600px" width="600px" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}
          <Carousel
            class="carousel-item"
            showArrows={true}
            showThumbs={false}
            sli
          >
            <div>
              <img src={slide1} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={slide2} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={slide3} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>

        <div class="section5">
          <div class="footer1">
            <div class="first">
              <h4>contact</h4>
              <div class="box">
                <a href="">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#f0f2f5" }}
                  />
                  <span>location</span>
                </a>
                <br />
                <a href="">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    style={{ color: "#eff1f5" }}
                  />
                  <span>Call +01 1234567890</span>
                </a>
                <br />
                <a href="">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#e9ecf1" }}
                  />
                  <span> demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div class="secound">
              <h4>feace</h4>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div class="footer.i">
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#eef1f6" }}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#e9ecf1" }}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#e1e6ef" }}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#eef1f6" }}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    style={{ color: "#eff1f5" }}
                  />
                </a>
              </div>
            </div>

            <div class="thard">
              <h4>oponing hours</h4>
              <p>Everyday</p>
              <p>10:00am - 10:00pm</p>
            </div>
          </div>
        </div>

        <div class="section6">
          <div class="footer2">
            <p>@ 2024 All Rights Reserved By Html Free Templet</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Html;
