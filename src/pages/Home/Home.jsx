import { useEffect, useState } from "react";
import HousingCard from "../../components/HousingCard/HousingCard";
import "./Home.scss";
import bannerImg from "../../assets/banner-cliff-beach.png";

function Home() {
  const [housings, setHousings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setHousings(data))
      .catch(() => setError(true));
  }, []);

  if (error) return <Navigate to="/404" replace />;

  return (
    <div className="home">
      <div className="home__banner">
        <img src={bannerImg} alt="banner" />
        <h1 className="home__banner__title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="home__grid">
        {housings.map((housing) => (
          <HousingCard key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  );
}

export default Home;
