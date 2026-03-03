import { useEffect, useState } from "react";
import HousingCard from "../components/HousingCard/HousingCard";

function Home() {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => setHousings(data));
  }, []);

  return (
    <div className="home">
      {housings.map((housing) => (
        <HousingCard key={housing.id} housing={housing} />
      ))}
    </div>
  );
}

export default Home;
