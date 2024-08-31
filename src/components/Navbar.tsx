"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Project", path: "#project" },
  { title: "Contact", path: "#contact" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
        x: 0,
        transition: {
            stiffness: 20,
            damping: 15
        }
    },
    close: {
        x: '-100%',
        transition: {
            stiffness: 20,
            damping: 15
        }
    },
  };

  return (
    <div className="text-white/70 pt-6">
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex space-x-8 flex-row text-xl">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-orange-500">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}

          
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 text-white/70 border rounded border-white/70 p-2 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <motion.div
        initial={false}
        animate={nav ? "open" : "close"}
        variants={menuVariants}
        className=" fixed left-0 top-0 w-full z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
