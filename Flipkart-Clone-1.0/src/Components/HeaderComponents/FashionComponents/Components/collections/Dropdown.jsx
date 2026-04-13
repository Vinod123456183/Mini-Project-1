import { useState } from "react";

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-option flex flex-col p-5">
      <div
        className="font-medium flex items-center space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <h1>{title}</h1>
      </div>

      {isOpen && (
        <div>
          {options.map((option, index) => (
            <div key={index} className="p-2 ml-3">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
