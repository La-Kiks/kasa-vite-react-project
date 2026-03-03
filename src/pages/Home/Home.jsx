import { useEffect, useState } from "react";
import HousingCard from "../../components/HousingCard/HousingCard";
import "./Home.scss";

function Home() {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => setHousings(data));
  }, []);

  return (
    <div className="home">
      <div className="home_banner"></div>
      <div className="home__grid">
        {housings.map((housing) => (
          <HousingCard key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  );
}

export default Home;
