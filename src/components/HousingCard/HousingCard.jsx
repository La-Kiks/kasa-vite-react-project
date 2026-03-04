import { Link } from "react-router-dom";
import "./HousingCard.scss";

function HousingCard({ housing }) {
  return (
    <Link to={`/housing/${housing.id}`} className="housing-card">
      <img
        src={housing.cover}
        alt={housing.title}
        className="housing-card__image"
      />
      <div className="housing-card__overlay"></div>
      <h2 className="housing-card__title">{housing.title}</h2>
    </Link>
  );
}

export default HousingCard;
