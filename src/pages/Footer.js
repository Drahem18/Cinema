import React from "react";
import "./footer.css";
import FooterNavItem from "../components/FooterNavItem";

function Footer() {
  const UsefullLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of servie",
    "Privacy Policy",
  ];
  const locations = [
    "Dolorun option",
    "Non ren reurn",
    "Cras fermentum odio",
    "Justo eget",
    "Fermentum iaculis",
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4 ">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                enim sapiente recusandae blanditiis consequuntur corporis
                consectetur aliquid. Quasi aut sapiente mollitia obcaecati.{" "}
              </p>
              <div className="d-flex justify-content-start gap-3  ">
                <div className="social-link mt-3">
                  <a href="/" className="twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
                <div className="social-link mt-3">
                  <a href="/" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </div>
                <div className="social-link mt-3">
                  <a href="/" className="instgram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
                <div className="social-link mt-3">
                  <a href="/" className="youtube">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-7 mx-auto footer-links">
              <h4>Useful Links</h4>
              <ul>
                {UsefullLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-7  mx-auto  footer-links ">
              <h4>Useful Locations</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Street Name <br />
                City Name, State 123456 <br />
                Austrelia <br />
                <br />
                <strong>Phones:</strong> +12345678900
                <br />
                <strong>Email:</strong> info@example.com <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyrightcCenter mt-4">
          <div className="copyright ">
            &copy; Copyright
            <strong>
              <span>Drahem</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits mx-2">
            Desiged by <a href="/"> Youssef Drahem</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
