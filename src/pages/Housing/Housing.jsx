import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carousel from "../../components/Carousel/Carousel";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();

  const [housing, setHousing] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const foundHousing = data.find((item) => item.id === id);
        if (!foundHousing) {
          setError(true);
        } else {
          setHousing(foundHousing);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  if (error) {
    return <Navigate to="/404" replace />;
  }

  if (!housing) return <p>Loading...</p>;

  return (
    <div className="housing">
      <Carousel className="housing__carousel" pictures={housing.pictures} />

      {/* TITLE + HOST */}
      <div className="housing__header">
        <div className="housing__info">
          <h1>{housing.title}</h1>
          <p className="housing__location">{housing.location}</p>

          <div className="housing__tags">
            {housing.tags.map((tag, index) => (
              <span key={index} className="housing__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="housing__host">
          <div className="housing__host-info">
            <span>{housing.host.name}</span>
            <img src={housing.host.picture} alt={housing.host.name} />
          </div>

          {/* RATING */}
          <div className="housing__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>{star <= housing.rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>

      {/* DROPDOWNS */}
      <div className="housing__dropdowns">
        <Dropdown title="Description">
          <p>{housing.description}</p>
        </Dropdown>

        <Dropdown title="Équipements">
          <ul>
            {housing.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default Housing;
