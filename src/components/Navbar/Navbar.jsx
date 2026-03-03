import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import kasaLogoLarge from "../../assets/KASA-Logo-210-Salmon.svg";
import kasaLogoMobile from "../../assets/KASA-Logo-145-Salmon.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src={kasaLogoLarge}
        srcSet={`
          ${kasaLogoMobile} 145w,
          ${kasaLogoLarge} 210w
        `}
        sizes="(max-width: 375px) 100vw, 210px"
        width="210px"
        height="68px"
        alt="Kasa Logo salmon-color"
      />
      <div className="navbar__links">
        <NavLink to="/" end className="navbar__link">
          ACCUEIL
        </NavLink>
        <NavLink to="/about" className="navbar__link">
          A PROPOS
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
