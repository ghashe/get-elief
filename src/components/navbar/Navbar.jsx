import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GetReliefCompanyLogo2.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#features">Services</a>
    </p>
    <p>
      <a href="#faqs"></a>FAQs
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
    <p>
      <a href="#blog">Upcoming</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gr__navbar">
      <div className="gr__navbar-links">
        <div className="gr__navbar-logo">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="gr__navbar-links_container">
          <Menu />
        </div>
        </div>

        <div className="gr__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>

        <div className="gr__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gr__navbar-menu_container scale-up-center">
              <div className="gr__navbar-menu_container-links">
                <Menu />
              </div>

              <div className="gr__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>

             
            </div>
          )}
        </div>
      </div>

  );
};

export default Navbar;
