import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__header" onClick={toggleDropdown}>
        <span>{title}</span>
        <span
          className={`dropdown__arrow ${isOpen ? "dropdown__arrow__open" : ""}`}
        >
          ▲
        </span>
      </button>
      <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
