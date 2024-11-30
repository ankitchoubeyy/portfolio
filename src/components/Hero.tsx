"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightining from "../assets/icon2.png";
import profileImage from "../assets/profilepic.png";

function Hero() {
  return (
    <div className="py-24 mt-14 relative overflow-clip">
      <div>
      <div className="text-5xl md:text-8xl font-bold text-center px-2">
        <h1 className="text-[#98B4CE] mb-5 font-Secondary">Hi, I am</h1>
        <h1 className="text-[#ec6313] mb-5 font-Primary">Ankit Choubey</h1>
      </div>

      <motion.div className="hidden md:block absolute left-[130px] top-[170px]" drag>
        <Image
          src={cursor}
          height="190"
          width="190"
          alt="cursor"
          draggable="false"
        />
      </motion.div>
      
      <motion.div className="hidden md:block absolute right-[250px] top-[20px]" drag>
        <Image
          src={lightining}
          height="120"
          width="120"
          alt="cursor"
          draggable="false"
        />
      </motion.div>

      <p className="text-center font-nav_font px-2  max-w-[500px] mx-auto text-white/80 mt-2">
        I am a Full Stack Developer focused on creatinng a websites that
        provides the best experience to the users.
      </p>

      <Image
        src={profileImage}
        alt="profile image"
        className="h-auto w-auto mx-auto"
      />
      </div>
    </div>
  );
}

export default Hero;
