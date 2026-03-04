import { useEffect, useState } from "react";
import HousingCard from "../../components/HousingCard/HousingCard";
import "./Home.scss";
import bannerImg from "../../assets/banner-cliff-beach.png";

function Home() {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => setHousings(data));
  }, []);

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
