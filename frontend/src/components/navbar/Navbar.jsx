import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import toggleLight from "../../assets/night.png";
import toggleDark from "../../assets/day.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Languageoption from "../language/language";

const Navbar = ({theme, setTheme }) => {
  const {t} = useTranslation();

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div className="navbar-container">
      <div className={`navbar ${theme === "dark" ? "dark" : ""}`}>
        <div className="left-side">
          <img src="" alt="" className="logo" />
          <ul>
            <li className="home">
              <NavLink to="/home" activeClassName="active">
                {t("home")}
              </NavLink>
            </li>
            <li className="application">
              <NavLink to="/application" activeClassName="active">
                {t("application")}
              </NavLink>
            </li>
            <li className="aboutus">
              <NavLink to="/aboutus" activeClassName="active">
                {t("aboutus")}
              </NavLink>
            </li>
            <li className="schemes">
              <NavLink to="/schemes" activeClassName="active">
                {t("schemes")}
              </NavLink>
            </li>
            <li className="resources">
              <NavLink to="/resources" activeClassName="active">
                {t("resources")}
              </NavLink>
            </li>
            <li className="network">
              <NavLink to="/network" activeClassName="active">
                {t("network")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <input type="text" placeholder={t("search")} />
          <img
            onClick={toggleMode}
            src={theme === "light" ? toggleLight : toggleDark}
            alt="toggle-icon"
            className="toggle-icon"
          />
          <ul className="login">
            <li className="app">
              <NavLink to="/">{t("loginOrSignup")}</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Languageoption onChange={handleLanguageChange} />
    </div>
  );
};

export default Navbar;
