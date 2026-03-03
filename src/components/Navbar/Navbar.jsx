import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <div className="navbar__links">
        <Link to={"/"}>
          <p className="navbar__link">Accueil</p>
        </Link>
        <Link to={"/about"}>
          <p className="navbar__link">A propos</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
