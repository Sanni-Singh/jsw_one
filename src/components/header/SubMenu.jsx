"use client";

import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const SubMenu = ({ item })=> {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
          hasChildren ? "font-semibold" : ""
        }`}
      >
        {item.label}
        {hasChildren && <FaAngleRight className="ml-2 text-sm" />}
      </div>

      {hasChildren && isHovered && (
        <div className="absolute left-full top-0 w-52 bg-white rounded-md shadow-lg z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default SubMenu;

