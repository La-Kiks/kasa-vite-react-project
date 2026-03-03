import { Link } from "react-router-dom";

function HousingCard({ housing }) {
  return (
    <Link to={`/housing/${housing.id}`}>
      <div className="card">
        <h2>{housing.title}</h2>
      </div>
    </Link>
  );
}

export default HousingCard;
