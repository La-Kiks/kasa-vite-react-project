import { useParams, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const { state } = useLocation();

  const [housing, setHousing] = useState(state?.housing || null);
  const [error, setError] = useState(false);

  const needsFetch = !state?.housing;

  useEffect(() => {
    if (!needsFetch) return;

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
  }, [needsFetch, id]);

  if (error) {
    return <Navigate to="/404" replace />;
  }

  if (!housing) return <p>Loading...</p>;

  return (
    <div className="housing">
      <Carousel pictures={housing.pictures} />

      <div className="housing__header">
        <div className="housing__info">
          <div className="housing__title-group">
            <h1 className="housing__title">{housing.title}</h1>
            <p className="housing__location">{housing.location}</p>
          </div>

          <div className="housing__tags">
            {housing.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="housing__host">
          <Host host={housing.host} />
          <Rating rating={Number(housing.rating)} />
        </div>
      </div>

      <div className="housing__dropdowns">
        <Dropdown title="Description">
          <p>{housing.description}</p>
        </Dropdown>
        <Dropdown title="Équipements">
          {housing.equipments.map((equip, index) => (
            <div key={index}>{equip}</div>
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

export default Housing;
