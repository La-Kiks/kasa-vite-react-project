import { useState } from "react";
import "./Dropdown.scss";
import arrow from "../../assets/arrow-up.svg";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__header" onClick={toggleDropdown}>
        <span>{title}</span>
        <img
          src={arrow}
          alt="arrow icon"
          className={`dropdown__arrow ${isOpen ? "dropdown__arrow--open" : ""}`}
        />
      </button>
      <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
