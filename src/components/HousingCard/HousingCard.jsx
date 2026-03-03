import { Link } from "react-router-dom";
import "./HousingCard.scss";

function HousingCard({ housing }) {
  return (
    <Link to={`/housing/${housing.id}`} className="housing-card">
      <div className="housing-card__content">
        <h2 className="housing-card__title">{housing.title}</h2>
      </div>
    </Link>
  );
}

export default HousingCard;
