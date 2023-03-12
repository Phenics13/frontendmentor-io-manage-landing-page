import { Link } from "react-router-dom";
import Button from "../button/button.component";

import "./footer.styles.scss";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";
import logo from "../../assets/logo.svg";

const LINKS = [
  "Home",
  "Careers",
  "Pricing",
  "Community",
  "Products",
  "Privacy Policy",
  "About Us",
];

const SOCIALS = [facebook, youtube, twitter, pinterest, instagram];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer--content">
          <div className="footer--bar">
            <input type="text" placeholder="Updates in your inbox..." />
            <Button>Go</Button>
          </div>
          <div className="footer--nav">
            {LINKS.map((link, index) => (
              <Link key={index} to={`/`}>
                {link}
              </Link>
            ))}
          </div>
          <div className="footer--links">
            <div className="footer--socials">
              {SOCIALS.map((social, index) => (
                <Link key={index} to={`/`}>
                  <img src={social} />
                </Link>
              ))}
            </div>
            <div className="footer--logo">
              <img src={logo} />
            </div>
          </div>
          <div className="footer--copyright">
            <span>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
