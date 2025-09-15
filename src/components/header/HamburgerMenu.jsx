"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import menuItems from "@/data/menuItems";

const HamburgerMenu = ({ onClose })=> {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      >
        <div
          className="absolute top-5 right-5"
          style={{
            transform: visible ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <button onClick={handleClose}>
            
            <ImCross size={25} color="white"/>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out`}
        style={{
          width: "80%",
          transform: visible ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="flex flex-col divide-y divide-gray-200 mt-4">
          {menuItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-6 py-4 hover:bg-gray-100 transition-colors"
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              ) : (
                <div className="px-6 py-4 font-semibold">{item.label}</div>
              )}

              {item.children && (
                <div className="flex flex-col bg-gray-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="px-12 py-3 hover:bg-gray-100 transition-colors"
                      onClick={handleClose}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HamburgerMenu;


