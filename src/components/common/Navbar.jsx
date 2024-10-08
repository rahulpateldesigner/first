import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart-icon-white.svg";
import thememodeicon from "../../assets/theme-mode-icon.png";
import { ThemeContext } from "../../global/Contexts";

const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (     
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary border-bottom"
      data-bs-theme={theme}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sarth's Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jewelery">
                Jewelery
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clothing
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/men-clothing">
                    Men's Clothing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/women-clothing">
                    Women's Clothing
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <span className="themeMode mx-3">
          <img onClick={()=>{setTheme(theme==='light'?'dark':'light')}} role="button" width={30} style={{'filter':'invert(.5)'}} height={30} src={thememodeicon} alt="" />
          </span>
          <span
            className="viewCart"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <img  src={cartIcon} alt="" />
          </span>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
