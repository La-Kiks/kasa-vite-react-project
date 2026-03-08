import "./Rating.scss";
import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? starActive : starInactive}
          alt="rating star"
          className="rating__star"
        />
      ))}
    </div>
  );
}

export default Rating;
