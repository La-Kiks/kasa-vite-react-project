import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Housing() {
  const { id } = useParams();

  const [housing, setHousing] = useState(null);
  const [loading, setLoading] = useState(true);
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

        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      <h1>{housing.title}</h1>
      <p>{housing.description}</p>
    </div>
  );
}

export default Housing;
