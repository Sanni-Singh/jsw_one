"use client";
import React, { useState } from "react";
import RegisterModal from "./RegisterModal";

const AuthButtons = () => {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <>
      <div className="flex sm:gap-12 gap-5">
        <button
          className="text-blue-900 sm:font-bold cursor-pointer"
          onClick={() => setOpenRegister(true)}
        >
          Register
        </button>
        <button className="text-blue-900 sm:font-bold cursor-pointer">
          Login
        </button>
      </div>

      <RegisterModal
        isOpen={openRegister}
        onClose={() => setOpenRegister(false)}
      />
    </>
  );
};

export default AuthButtons;
