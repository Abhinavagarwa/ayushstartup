import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import toggleLight from "../../assets/night.png";
import toggleDark from "../../assets/day.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Languageoption from "../language/language";

const Navbar = ({ theme, setTheme }) => {
  const { t } = useTranslation();

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const navItems = [
    { to: "/home", text: t("home") },
    { to: "/application", text: t("application") },
    { to: "/aboutus", text: t("aboutus") },
    { to: "/schemes", text: t("schemes") },
    { to: "/resources", text: t("resources") },
    { to: "/network", text: t("network") },
  ];

  return (
    <nav className="navbar-container">
      <div className={`navbar ${theme === "dark" ? "dark" : ""}`}>
        <div className="left-side">
          <NavLink to="/home" activeClassName="active"><img src="/logo.png" alt="" className="logo"/></NavLink>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={item.to.slice(1)}>
                <NavLink to={item.to} activeClassName="active">
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-side">
          <input type="text" placeholder={t("search")} />
          <button onClick={toggleMode} className="toggle-button">
            <img
              src={theme === "light" ? toggleLight : toggleDark}
              alt="toggle-icon"
              className="toggle-icon"
            />
          </button>
          <ul className="login">
            <li className="app">
              <NavLink to="/">{t("loginOrSignup")}</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Languageoption onChange={handleLanguageChange} />
    </nav>
  );
};

export default Navbar;