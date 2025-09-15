"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AuthButtons from "./AuthButtons";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";
import ConnectMenu from "./ConnectMenu";
import { LuMapPin } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full border-b border-[#E6E6E6] bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between px-6 py-3">
          
          <div className="flex flex-col w-full xl:flex-row xl:items-center xl:gap-6 xl:flex-1">
            <div className="flex items-center justify-between w-full xl:w-auto">
              <div className="flex items-center gap-4">
                <button
                  className="block xl:hidden rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => setMenuOpen(true)}
                >
                  <FaBars size={22} className="text-gray-700" />
                </button>

                <Logo />
              </div>

              <div className="xl:hidden">
                <AuthButtons />
              </div>
            </div>

            <div className="w-full mt-3 xl:mt-0 xl:max-w-[700px]">
              <SearchBar />
            </div>
            <div className="xl:hidden mt-3 flex gap-2 items-center">
              <LuMapPin color="blue"/>
              <IoIosArrowDown color="blue" size={13}/>
            </div>
          </div>

          <div className="hidden xl:block">
            <AuthButtons />
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <HamburgerMenu
          onClose={() => setMenuOpen(false)}
          width="80%"
        />
      )}

      <div className="w-full border-b border-[#E6E6E6]  hidden xl:block">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6">
            <NavLinks />
            <ConnectMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
