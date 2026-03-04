import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <h2 className="notfound__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="notfound__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
