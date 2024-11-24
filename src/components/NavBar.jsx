'use client';

import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const dataMenu = [
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#project" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`w-full bg-[#181818] text-white fixed top-0 left-0 z-50 ${
        sticky ? 'shadow-lg' : ''
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        {/* Brand Name */}
        <h1 className="text-2xl font-semibold font-logo">Ankit Choubey</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          {dataMenu.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="hover:text-gray-300 transition">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <GiHamburgerMenu className='text-3xl'/>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenu && (
        <div className="bg-[#181818] md:hidden">
          <ul className="flex flex-col gap-4 text-lg p-5">
          {dataMenu.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <a href={item.path} className="hover:text-gray-300 transition">
                {item.title}
              </a>
            </li>
          ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
