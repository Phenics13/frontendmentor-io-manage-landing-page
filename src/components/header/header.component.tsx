import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import close from "../../assets/icon-close.svg";
import hamburger from "../../assets/icon-hamburger.svg";

import { CSSTransition } from "react-transition-group";

import Button from "../button/button.component";

import "./header.styles.scss";
import { useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showHamburgerIcon, setShowHamburgerIcon] = useState(true);

  const handleOnClickCloseIcon = () => {
    setShowHeader(false);
  };

  const handleOnClickHamburgerIcon = () => {
    setShowHeader(true);
  };

  const handleOnEnter = () => {
    setShowHamburgerIcon(false);
    setShowCloseIcon(true);
  };

  const handleOnExited = () => {
    setShowHamburgerIcon(true);
    setShowCloseIcon(false);
  };

  return (
    <header className="header container">
      <img src={logo} className="header--logo" alt="logo" />
      <CSSTransition
        in={showHeader}
        timeout={300}
        classNames="header--animation"
        unmountOnExit
        onEnter={handleOnEnter}
        onExited={handleOnExited}
      >
        <div className="header--nav">
          <nav className="nav--inner">
            <Link to="/">Pricing</Link>
            <Link to="/">Product</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Community</Link>
          </nav>
        </div>
      </CSSTransition>
      {showCloseIcon && (
        <div className="icon-wrapper">
          <img
            src={close}
            className="header--close"
            onClick={handleOnClickCloseIcon}
          />
        </div>
      )}
      {showHamburgerIcon && (
        <div className="icon-wrapper">
          <img
            src={hamburger}
            className="header--hamburger"
            onClick={handleOnClickHamburgerIcon}
          />
        </div>
      )}
      <Button>Get Started</Button>
    </header>
  );
};

export default Header;
