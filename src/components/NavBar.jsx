"use client";
import Resume from "../components/Resume";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const dataMenu = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "#" },
    { title: "Contact me", path: "#contact" },
  ];

  return (
    <nav
      className={`w-full bg-[#181818] text-white fixed top-0 left-0 z-50 ${
        sticky ? "shadow-lg" : ""
      } transition-all duration-500`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        {/* Brand Name */}
        <h1 className="text-2xl font-semibold font-Primary">Ankit Choubey</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center  gap-8 text-lg font-Secondary font-semibold">
          {dataMenu.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="hover:text-gray-300 transition">
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <Resume />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none transition-all duration-300"
        >
          {
            !mobileMenu ? (<GiHamburgerMenu className="text-3xl" />): (<MdCancelPresentation className="text-3xl" />)
          }
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenu && (
        <div className="bg-[#181818] md:hidden">
          <ul className="flex flex-col gap-4 text-lg font-Secondary font-semibold text-right p-5">
            {dataMenu.map((item, index) => (
              <li key={index} onClick={toggleMenu}>
                <a href={item.path} className="hover:text-gray-300 transition">
                  {item.title}
                </a>
              </li>
            ))}
            <li>
            <Resume />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
