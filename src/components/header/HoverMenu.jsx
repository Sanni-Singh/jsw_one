"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import SubMenu from "./SubMenu";

const HoverMenu = ({ item })=>  {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative py-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 hover:text-blue-700 transition-colors cursor-pointer font-medium"
      >
        {item.label}
        <FaAngleDown
          className={`ml-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && item.subItems && (
        <div className="absolute left-0 top-full w-56 rounded-md  bg-white shadow-lg z-50">
          {item.subItems.map((sub) => (
            <SubMenu key={sub.label} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
