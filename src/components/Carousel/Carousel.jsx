import { useState } from "react";
import "./Carousel.scss";
import arrowLeft from "../../assets/Left-Arrow.svg";
import arrowRight from "../../assets/Right-Arrow.svg";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  if (!pictures || pictures.length === 0) return null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      {length > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          >
            <img src={arrowLeft} alt="Previous slide" />
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          >
            <img src={arrowRight} alt="Next slide" />
          </button>
        </>
      )}

      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`slide ${index}`}
          className={`carousel__image ${
            index === current ? "carousel__image--active" : ""
          }`}
        />
      ))}

      {length > 1 && (
        <div className="carousel__counter">
          {current + 1} / {length}
        </div>
      )}
    </div>
  );
}

export default Carousel;
