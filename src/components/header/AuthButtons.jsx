"use client";
import React, { useState } from "react";

const AuthButtons = () => {

  return (
    <>
      <div className="flex sm:gap-12 gap-5">
        <button
          className="text-blue-900 sm:font-bold cursor-pointer"
         
        >
          Register
        </button>
        <button className="text-blue-900 sm:font-bold cursor-pointer">
          Login
        </button>
      </div>
    </>
  );
};

export default AuthButtons;
